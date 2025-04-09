
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Users, Clock, Settings, Home, CalendarCheck, CalendarRange, UserPlus } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div 
      className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col h-screen ${
        collapsed ? 'w-16' : 'w-64'
      } ${className}`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && <h2 className="font-semibold text-lg">Schedule</h2>}
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-gray-100 transition ml-auto"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          <Link to="/" className="sidebar-link active">
            <Home size={20} />
            {!collapsed && <span>Dashboard</span>}
          </Link>
          
          <div className={`mt-6 mb-2 px-3 ${collapsed ? 'hidden' : 'block'}`}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Planning</p>
          </div>
          
          <Link to="/calendar" className="sidebar-link">
            <Calendar size={20} />
            {!collapsed && <span>Calendar</span>}
          </Link>
          <Link to="/" className="sidebar-link">
            <CalendarRange size={20} />
            {!collapsed && <span>Timeline</span>}
          </Link>
          <Link to="/" className="sidebar-link">
            <CalendarCheck size={20} />
            {!collapsed && <span>Schedules</span>}
          </Link>
          
          <div className={`mt-6 mb-2 px-3 ${collapsed ? 'hidden' : 'block'}`}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Organization</p>
          </div>
          
          <Link to="/teams" className="sidebar-link">
            <Users size={20} />
            {!collapsed && <span>Teams</span>}
          </Link>
          <Link to="/" className="sidebar-link">
            <UserPlus size={20} />
            {!collapsed && <span>Members</span>}
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <Link to="/" className="sidebar-link">
          <Settings size={20} />
          {!collapsed && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
