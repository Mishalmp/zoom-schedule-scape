
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import { ScheduleEvent } from '../data/scheduleData';
import { Check, Calendar, Clock, Users, MapPin } from 'lucide-react';

interface EventCardProps {
  event: ScheduleEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Extract color class name from the color string (e.g. "bg-blue-100" -> "blue")
  const colorClass = event.color?.split('-')[1] || 'blue';
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-l-4" 
          style={{ borderLeftColor: `var(--${colorClass}-500, #3b82f6)` }}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{event.title}</h3>
          <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">
            <Check size={14} />
            <span>Confirmed</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{event.organizer}</p>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>
              {event.startTime} - {event.endTime}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span>{event.day}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="truncate">Room {event.roomId.replace('room', '')}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Users className="h-4 w-4 text-gray-500" />
            <span>8 attendees</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-end space-x-2">
        <button className="text-sm text-blue-600 hover:underline">Edit</button>
        <button className="text-sm text-gray-600 hover:underline">Details</button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
