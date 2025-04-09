
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ScheduleHeader from '../components/ScheduleHeader';
import ScheduleGrid from '../components/ScheduleGrid';
import { ZoomProvider } from '../context/ZoomContext';
import { Menu } from 'lucide-react';

const Index = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  
  return (
    <ZoomProvider>
      <div className="flex h-screen w-full bg-gray-50">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        {/* Mobile Sidebar */}
        {showMobileSidebar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setShowMobileSidebar(false)}>
            <div className="absolute left-0 top-0 h-full w-64 bg-white" onClick={e => e.stopPropagation()}>
              <Sidebar />
            </div>
          </div>
        )}
        
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* Mobile Header with menu button */}
          <div className="md:hidden bg-white p-4 border-b flex items-center">
            <button 
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setShowMobileSidebar(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-semibold ml-4">Schedule</h1>
          </div>
          
          {/* Schedule Header with zoom controls */}
          <ScheduleHeader title="Zoom Schedule" />
          
          {/* Schedule Grid */}
          <ScheduleGrid />
        </div>
      </div>
    </ZoomProvider>
  );
};

export default Index;
