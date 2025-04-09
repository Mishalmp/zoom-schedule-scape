
import React from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { useZoom } from '../context/ZoomContext';

interface ScheduleHeaderProps {
  title: string;
}

const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({ title }) => {
  const { zoomLevel, increaseZoom, decreaseZoom } = useZoom();

  return (
    <div className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">
          Zoom: {Math.round(zoomLevel * 100)}%
        </span>
        <div className="flex items-center border rounded-md overflow-hidden">
          <button 
            onClick={decreaseZoom}
            className="p-2 hover:bg-gray-100 transition border-r"
            aria-label="Zoom out"
            disabled={zoomLevel <= 0.5}
          >
            <ZoomOut size={18} className={zoomLevel <= 0.5 ? "text-gray-300" : "text-gray-600"} />
          </button>
          <button 
            onClick={increaseZoom}
            className="p-2 hover:bg-gray-100 transition"
            aria-label="Zoom in"
            disabled={zoomLevel >= 2.5}
          >
            <ZoomIn size={18} className={zoomLevel >= 2.5 ? "text-gray-300" : "text-gray-600"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleHeader;
