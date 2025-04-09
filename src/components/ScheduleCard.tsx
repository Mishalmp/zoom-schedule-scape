
import React from 'react';
import { useZoom } from '../context/ZoomContext';
import { ScheduleEvent } from '../data/scheduleData';

interface ScheduleCardProps {
  event: ScheduleEvent;
  baseHeight: number;
  topOffset: number;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ event, baseHeight, topOffset }) => {
  const { zoomLevel } = useZoom();
  
  // Calculate duration in 30-min slots
  const startTimeIndex = event.startTime.split(':').map(Number);
  const endTimeIndex = event.endTime.split(':').map(Number);
  
  const startSlots = startTimeIndex[0] * 2 + (startTimeIndex[1] === 30 ? 1 : 0) - 16; // Assuming day starts at 8:00
  const endSlots = endTimeIndex[0] * 2 + (endTimeIndex[1] === 30 ? 1 : 0) - 16;
  const durationSlots = endSlots - startSlots;
  
  // Calculate height based on zoom level
  const height = durationSlots * baseHeight * zoomLevel;
  
  // Adjust top position based on zoom level
  const top = topOffset * zoomLevel;
  
  return (
    <div 
      className={`schedule-card absolute left-0 right-0 mx-1 ${event.color || 'bg-blue-100 border-blue-300'}`}
      style={{ 
        top: `${top}px`, 
        height: `${height}px`,
        transition: 'height 0.3s, top 0.3s'
      }}
    >
      <div className="h-full flex flex-col overflow-hidden">
        <h3 className="font-medium text-gray-800 truncate">{event.title}</h3>
        <p className="text-xs text-gray-600">{event.startTime} - {event.endTime}</p>
        {height > 60 && (
          <p className="text-xs text-gray-500 mt-1 truncate">{event.organizer}</p>
        )}
      </div>
    </div>
  );
};

export default ScheduleCard;
