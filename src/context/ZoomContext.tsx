
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ZoomContextType = {
  zoomLevel: number;
  increaseZoom: () => void;
  decreaseZoom: () => void;
  selectedDay: string | null;
  setSelectedDay: (day: string | null) => void;
};

const ZoomContext = createContext<ZoomContextType | undefined>(undefined);

export const useZoom = () => {
  const context = useContext(ZoomContext);
  if (!context) {
    throw new Error('useZoom must be used within a ZoomProvider');
  }
  return context;
};

export const ZoomProvider = ({ children }: { children: ReactNode }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const increaseZoom = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 0.25, 2.5));
  };

  const decreaseZoom = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.25, 0.5));
  };

  return (
    <ZoomContext.Provider value={{ 
      zoomLevel, 
      increaseZoom, 
      decreaseZoom,
      selectedDay,
      setSelectedDay
    }}>
      {children}
    </ZoomContext.Provider>
  );
};
