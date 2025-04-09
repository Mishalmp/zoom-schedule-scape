
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
  attendees?: string[];
  isConfirmed?: boolean;
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
    description: 'Daily standup meeting to discuss progress and blockers.',
    attendees: ['Team Alpha', 'John Doe', 'Jane Smith'],
    isConfirmed: true
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
    description: 'Review of the latest product features and roadmap planning.',
    attendees: ['Product Team', 'Design Team'],
    isConfirmed: true
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
    description: 'Meeting with ABC Corp to discuss the new project requirements.',
    attendees: ['Sales Team', 'Client Representatives'],
    isConfirmed: false
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
    description: 'Collaborative design workshop for the new user interface.',
    attendees: ['Design Team', 'UX Researchers'],
    isConfirmed: true
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
    description: 'Technical discussion and coordination between engineering teams.',
    attendees: ['Backend Team', 'Frontend Team'],
    isConfirmed: true
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
    description: 'Strategic planning session for the upcoming quarter.',
    attendees: ['Leadership Team', 'Department Heads'],
    isConfirmed: true
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
    description: 'Team building lunch to celebrate recent project completion.',
    attendees: ['All Staff'],
    isConfirmed: true
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
    description: 'Initial meeting to launch the new marketing automation project.',
    attendees: ['Project Team', 'Stakeholders'],
    isConfirmed: true
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
    description: 'Quarterly meeting with the board of directors to review performance.',
    attendees: ['Board Members', 'Executive Team'],
    isConfirmed: true
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
    description: 'Demo and review of completed work from the current sprint.',
    attendees: ['Development Team', 'Product Owners'],
    isConfirmed: true
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
    description: 'Usability testing session with focus group participants.',
    attendees: ['UX Team', 'Test Participants'],
    isConfirmed: true
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
    description: 'Knowledge sharing session about the latest technologies.',
    attendees: ['All Technical Staff', 'Interested Parties'],
    isConfirmed: true
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
