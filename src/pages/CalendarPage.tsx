
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import Sidebar from '../components/Sidebar';
import { ZoomProvider } from '../context/ZoomContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

const eventsByDate = {
  "2025-04-10": [
    { id: 1, title: "Team Standup", time: "09:00 - 09:30", confirmed: true },
    { id: 2, title: "Product Review", time: "14:00 - 15:30", confirmed: true }
  ],
  "2025-04-12": [
    { id: 3, title: "Client Meeting", time: "10:00 - 11:00", confirmed: false }
  ],
  "2025-04-15": [
    { id: 4, title: "Design Workshop", time: "13:00 - 16:00", confirmed: true },
    { id: 5, title: "Engineering Sync", time: "09:30 - 10:30", confirmed: true }
  ]
};

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  
  const formattedDate = date ? date.toISOString().split('T')[0] : "";
  const events = eventsByDate[formattedDate] || [];
  
  const handlePrevMonth = () => {
    if (date) {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() - 1);
      setDate(newDate);
    }
  };
  
  const handleNextMonth = () => {
    if (date) {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() + 1);
      setDate(newDate);
    }
  };
  
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
            <h1 className="text-lg font-semibold ml-4">Calendar</h1>
          </div>
          
          {/* Page content */}
          <div className="flex-1 overflow-auto">
            <div className="max-w-7xl mx-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Calendar</h1>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={handlePrevMonth}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  {date && (
                    <span className="font-medium">
                      {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </span>
                  )}
                  <button 
                    onClick={handleNextMonth}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Next month"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 bg-white shadow-sm pointer-events-auto">
                  <CardContent className="p-0 pointer-events-auto">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="p-3 pointer-events-auto"
                      modifiers={{
                        hasEvent: (date) => {
                          const dateString = date.toISOString().split('T')[0];
                          return !!eventsByDate[dateString];
                        }
                      }}
                      modifiersClassNames={{
                        hasEvent: "bg-blue-50 font-medium text-blue-600"
                      }}
                    />
                  </CardContent>
                </Card>
                
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CalendarIcon size={18} className="mr-2" />
                        <span>
                          {date ? date.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'long', 
                            day: 'numeric'
                          }) : 'Select a date'}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {events.length > 0 ? (
                        <div className="space-y-3">
                          {events.map(event => (
                            <div key={event.id} className="flex bg-white border rounded-md p-3 transition-all hover:shadow-sm">
                              <div className="mr-3">
                                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                                  event.confirmed ? 'bg-green-100' : 'bg-amber-100'
                                }`}>
                                  {event.confirmed && <Check size={12} className="text-green-600" />}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium text-gray-800">{event.title}</h3>
                                <p className="text-sm text-gray-600">{event.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm py-2">No events scheduled for this day.</p>
                      )}
                    </CardContent>
                  </Card>
                
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Upcoming Days with Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {Object.entries(eventsByDate).map(([dateStr, events]) => {
                          const eventDate = new Date(dateStr);
                          return (
                            <div 
                              key={dateStr} 
                              className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
                              onClick={() => setDate(eventDate)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                  <span className="text-xs font-medium text-blue-600">
                                    {eventDate.getDate()}
                                  </span>
                                </div>
                                <span className="font-medium">
                                  {eventDate.toLocaleDateString('en-US', { 
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </span>
                              </div>
                              <span className="text-sm text-gray-500">{events.length} events</span>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ZoomProvider>
  );
};

export default CalendarPage;
