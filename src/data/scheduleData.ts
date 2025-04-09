
export type Room = {
  id: string;
  name: string;
};

export type ScheduleEvent = {
  id: string;
  title: string;
  roomId: string;
  startTime: string;
  endTime: string;
  day: string;
  description?: string;
  organizer?: string;
  color?: string;
};

export const rooms: Room[] = [
  { id: 'room1', name: 'Conference Room A' },
  { id: 'room2', name: 'Meeting Room B' },
  { id: 'room3', name: 'Workshop Room C' },
  { id: 'room4', name: 'Executive Room D' },
  { id: 'room5', name: 'Collaboration Space' },
];

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const timeSlots = [
  '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00'
];

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: 'event1',
    title: 'Team Standup',
    roomId: 'room1',
    startTime: '9:00',
    endTime: '9:30',
    day: 'Monday',
    organizer: 'Alex Miller',
    color: 'bg-blue-100 border-blue-300',
  },
  {
    id: 'event2',
    title: 'Product Review',
    roomId: 'room2',
    startTime: '10:00',
    endTime: '11:30',
    day: 'Monday',
    organizer: 'Sarah Johnson',
    color: 'bg-green-100 border-green-300',
  },
  {
    id: 'event3',
    title: 'Client Meeting',
    roomId: 'room3',
    startTime: '13:00',
    endTime: '14:00',
    day: 'Monday',
    organizer: 'Michael Chen',
    color: 'bg-purple-100 border-purple-300',
  },
  {
    id: 'event4',
    title: 'Design Workshop',
    roomId: 'room5',
    startTime: '14:30',
    endTime: '16:30',
    day: 'Monday',
    organizer: 'Emma Davis',
    color: 'bg-yellow-100 border-yellow-300',
  },
  {
    id: 'event5',
    title: 'Engineering Sync',
    roomId: 'room1',
    startTime: '14:00',
    endTime: '15:00',
    day: 'Tuesday',
    organizer: 'John Smith',
    color: 'bg-red-100 border-red-300',
  },
  {
    id: 'event6',
    title: 'Quarterly Planning',
    roomId: 'room4',
    startTime: '9:00',
    endTime: '12:00',
    day: 'Tuesday',
    organizer: 'Lisa Wong',
    color: 'bg-indigo-100 border-indigo-300',
  },
  {
    id: 'event7',
    title: 'Team Lunch',
    roomId: 'room2',
    startTime: '12:00',
    endTime: '13:30',
    day: 'Wednesday',
    organizer: 'Team',
    color: 'bg-pink-100 border-pink-300',
  },
  {
    id: 'event8',
    title: 'Project Kickoff',
    roomId: 'room3',
    startTime: '10:00',
    endTime: '11:00',
    day: 'Wednesday',
    organizer: 'David Kim',
    color: 'bg-cyan-100 border-cyan-300',
  },
  {
    id: 'event9',
    title: 'Board Meeting',
    roomId: 'room4',
    startTime: '15:00',
    endTime: '17:00',
    day: 'Thursday',
    organizer: 'CEO',
    color: 'bg-amber-100 border-amber-300',
  },
  {
    id: 'event10',
    title: 'Sprint Review',
    roomId: 'room5',
    startTime: '9:30',
    endTime: '10:30',
    day: 'Friday',
    organizer: 'Product Team',
    color: 'bg-emerald-100 border-emerald-300',
  },
  {
    id: 'event11',
    title: 'User Testing',
    roomId: 'room1',
    startTime: '11:00',
    endTime: '12:30',
    day: 'Friday',
    organizer: 'UX Team',
    color: 'bg-teal-100 border-teal-300',
  },
  {
    id: 'event12',
    title: 'Tech Talk',
    roomId: 'room3',
    startTime: '16:00',
    endTime: '17:30',
    day: 'Friday',
    organizer: 'Engineering',
    color: 'bg-blue-100 border-blue-300',
  },
];

export const getEventsByDay = (day: string) => {
  return scheduleEvents.filter(event => event.day === day);
};

export const getEventsByRoom = (roomId: string) => {
  return scheduleEvents.filter(event => event.roomId === roomId);
};

export const getTimePosition = (time: string) => {
  const index = timeSlots.findIndex(t => t === time);
  return index !== -1 ? index : 0;
};

export const calculateEventHeight = (startTime: string, endTime: string, baseHeight: number) => {
  const startIndex = timeSlots.findIndex(t => t === startTime);
  const endIndex = timeSlots.findIndex(t => t === endTime);
  return (endIndex - startIndex) * baseHeight;
};

export const calculateEventPosition = (startTime: string, baseHeight: number) => {
  const startIndex = timeSlots.findIndex(t => t === startTime);
  return startIndex * baseHeight;
};
