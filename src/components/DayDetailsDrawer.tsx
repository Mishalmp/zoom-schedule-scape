
import React from 'react';
import { useZoom } from '../context/ZoomContext';
import { getEventsByDay } from '../data/scheduleData';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../components/ui/sheet";
import EventCard from './EventCard';
import { Check, Calendar, Clock } from 'lucide-react';

const DayDetailsDrawer: React.FC = () => {
  const { selectedDay, setSelectedDay } = useZoom();
  
  const dayEvents = selectedDay ? getEventsByDay(selectedDay) : [];
  
  return (
    <Sheet open={!!selectedDay} onOpenChange={(open) => !open && setSelectedDay(null)}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold">{selectedDay}</SheetTitle>
          <SheetDescription className="text-base">
            {dayEvents.length} sessions scheduled
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-4">
          {dayEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DayDetailsDrawer;
