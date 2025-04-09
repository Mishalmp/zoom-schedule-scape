
import React, { useState, useEffect } from 'react';
import { useZoom } from '../context/ZoomContext';
import ScheduleCard from './ScheduleCard';
import { days, rooms, timeSlots, scheduleEvents } from '../data/scheduleData';

const BASE_CELL_HEIGHT = 40; // Height of a 30-minute slot at zoom level 1

const ScheduleGrid: React.FC = () => {
  const { zoomLevel } = useZoom();
  const [currentView, setCurrentView] = useState<'day' | 'room'>('day');
  
  // Calculate time slot height based on zoom level
  const timeSlotHeight = BASE_CELL_HEIGHT * zoomLevel;
  
  // Generate time labels
  const renderTimeLabels = () => {
    return (
      <div className="sticky left-0 z-20 bg-white border-r border-gray-200 w-20">
        <div className="h-12 border-b border-gray-200"></div>
        <div>
          {timeSlots.map((time, index) => (
            <div 
              key={time} 
              className="border-b border-gray-200 flex items-center justify-center text-xs text-gray-500"
              style={{ height: `${timeSlotHeight}px` }}
            >
              {time}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Generate day headers
  const renderDayHeaders = () => {
    return (
      <div className="sticky top-0 z-10 flex">
        <div className="w-20 h-12 bg-white border-r border-gray-200"></div>
        {days.map(day => (
          <div 
            key={day} 
            className="flex-1 h-12 bg-white border-b border-gray-200 flex items-center justify-center font-medium"
          >
            {day}
          </div>
        ))}
      </div>
    );
  };
  
  // Generate room headers
  const renderRoomHeaders = () => {
    return (
      <div className="sticky top-0 z-10 flex">
        <div className="w-20 h-12 bg-white border-r border-gray-200"></div>
        {rooms.map(room => (
          <div 
            key={room.id} 
            className="flex-1 h-12 bg-white border-b border-gray-200 flex items-center justify-center font-medium px-2 truncate"
          >
            {room.name}
          </div>
        ))}
      </div>
    );
  };

  // Generate day columns with events
  const renderDayView = () => {
    return (
      <div className="flex flex-1">
        {days.map(day => (
          <div key={day} className="flex-1 relative">
            {/* Render time grid lines */}
            {timeSlots.map((time, index) => (
              <div 
                key={`${day}-${time}`}
                className="border-b border-gray-200"
                style={{ height: `${timeSlotHeight}px` }}
              ></div>
            ))}
            
            {/* Render events for this day */}
            {scheduleEvents
              .filter(event => event.day === day)
              .map(event => {
                const startTimeIndex = timeSlots.indexOf(event.startTime);
                const topOffset = startTimeIndex * BASE_CELL_HEIGHT;
                
                return (
                  <ScheduleCard 
                    key={event.id} 
                    event={event} 
                    baseHeight={BASE_CELL_HEIGHT}
                    topOffset={topOffset}
                  />
                );
              })}
          </div>
        ))}
      </div>
    );
  };

  // Generate room columns with events
  const renderRoomView = () => {
    return (
      <div className="flex flex-1">
        {rooms.map(room => (
          <div key={room.id} className="flex-1 relative">
            {/* Render time grid lines */}
            {timeSlots.map((time, index) => (
              <div 
                key={`${room.id}-${time}`}
                className="border-b border-gray-200"
                style={{ height: `${timeSlotHeight}px` }}
              ></div>
            ))}
            
            {/* Render events for this room */}
            {scheduleEvents
              .filter(event => event.roomId === room.id)
              .map(event => {
                const startTimeIndex = timeSlots.indexOf(event.startTime);
                const topOffset = startTimeIndex * BASE_CELL_HEIGHT;
                
                return (
                  <ScheduleCard 
                    key={event.id} 
                    event={event} 
                    baseHeight={BASE_CELL_HEIGHT}
                    topOffset={topOffset}
                  />
                );
              })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="bg-white sticky top-0 z-30 border-b border-gray-200 flex gap-4 px-6 py-2">
        <button 
          onClick={() => setCurrentView('day')}
          className={`px-4 py-1.5 rounded-md ${
            currentView === 'day' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Day View
        </button>
        <button 
          onClick={() => setCurrentView('room')}
          className={`px-4 py-1.5 rounded-md ${
            currentView === 'room' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Room View
        </button>
      </div>

      <div className="relative">
        {/* Headers */}
        {currentView === 'day' ? renderDayHeaders() : renderRoomHeaders()}
        
        {/* Schedule grid with time labels and content */}
        <div className="flex">
          {renderTimeLabels()}
          <div className="flex-1 overflow-x-auto">
            {currentView === 'day' ? renderDayView() : renderRoomView()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleGrid;
