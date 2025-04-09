
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, Clock, Settings, Home } from 'lucide-react';

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
          <a href="#" className="sidebar-link active">
            <Home size={20} />
            {!collapsed && <span>Dashboard</span>}
          </a>
          <a href="#" className="sidebar-link">
            <Calendar size={20} />
            {!collapsed && <span>Calendar</span>}
          </a>
          <a href="#" className="sidebar-link">
            <Users size={20} />
            {!collapsed && <span>Teams</span>}
          </a>
          <a href="#" className="sidebar-link">
            <Clock size={20} />
            {!collapsed && <span>Schedules</span>}
          </a>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <a href="#" className="sidebar-link">
          <Settings size={20} />
          {!collapsed && <span>Settings</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
