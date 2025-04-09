
import React from 'react';
import { useZoom } from '../context/ZoomContext';
import { ScheduleEvent } from '../data/scheduleData';
import { Check, Calendar, Clock } from 'lucide-react';

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
  
  // Determine which content to show based on card height
  const showDetails = height > 60;
  const showDescription = height > 100;
  
  // Extract background color class without the "bg-" prefix
  const colorClass = event.color?.split('-')[1] || 'blue';
  
  return (
    <div 
      className={`schedule-card absolute left-0 right-0 mx-1 border rounded-md shadow-sm transition-all hover:shadow-md group`}
      style={{ 
        top: `${top}px`, 
        height: `${height}px`,
        transition: 'height 0.3s, top 0.3s',
        background: `linear-gradient(to right, var(--${colorClass}-100, #dbeafe), var(--${colorClass}-50, #eff6ff))`,
        borderColor: `var(--${colorClass}-300, #93c5fd)`
      }}
    >
      <div className="h-full flex flex-col p-2 overflow-hidden relative">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-800 truncate">{event.title}</h3>
          {showDetails && (
            <div className="rounded-full w-4 h-4 bg-green-50 flex items-center justify-center">
              <Check size={10} className="text-green-600" />
            </div>
          )}
        </div>
        
        <div className="flex items-center text-xs text-gray-600 mt-0.5">
          <Clock size={10} className="mr-1" />
          <span>{event.startTime} - {event.endTime}</span>
        </div>
        
        {showDetails && (
          <div className="mt-1 text-xs text-gray-700">{event.organizer}</div>
        )}
        
        {showDescription && (
          <p className="mt-2 text-xs text-gray-600 line-clamp-2">
            {event.description || "Session details will appear here. Click for more information."}
          </p>
        )}
        
        {/* Subtle gradient overlay at the bottom if content might be cut off */}
        {(showDescription && event.description) && (
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default ScheduleCard;
