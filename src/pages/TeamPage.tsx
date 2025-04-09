import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { ZoomProvider } from '../context/ZoomContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Users, UserPlus, Mail, Phone, Calendar, Menu } from 'lucide-react';

const teams = [
  {
    id: "team1",
    name: "Product Development",
    members: 8,
    lead: "Alex Johnson",
    description: "Responsible for product roadmap and implementation",
    image: "https://via.placeholder.com/40"
  },
  {
    id: "team2",
    name: "Marketing",
    members: 5,
    lead: "Sarah Williams",
    description: "Handles all marketing and PR activities",
    image: "https://via.placeholder.com/40"
  },
  {
    id: "team3",
    name: "Sales",
    members: 6,
    lead: "Michael Chen",
    description: "Client acquisition and relationship management",
    image: "https://via.placeholder.com/40"
  },
  {
    id: "team4",
    name: "Customer Support",
    members: 4,
    lead: "David Kim",
    description: "User assistance and problem resolution",
    image: "https://via.placeholder.com/40"
  }
];

const TeamPage = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  
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
            <h1 className="text-lg font-semibold ml-4">Teams</h1>
          </div>
          
          {/* Page content */}
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Teams</h1>
                  <p className="text-gray-600 mt-1">Manage and view all teams in your organization</p>
                </div>
                <button className="mt-4 md:mt-0 flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  <UserPlus size={16} className="mr-2" />
                  Create New Team
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map(team => (
                  <Card key={team.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle>{team.name}</CardTitle>
                          <CardDescription className="mt-0">{team.members} members</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <p className="text-sm text-gray-600 mb-4">{team.description}</p>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="font-medium">Team Lead:</div>
                        <div className="ml-2">{team.lead}</div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 flex items-center justify-between">
                      <button className="text-sm text-blue-600 hover:text-blue-800 transition flex items-center">
                        <Calendar size={14} className="mr-1" />
                        View Schedule
                      </button>
                      <button className="text-sm text-blue-600 hover:text-blue-800 transition flex items-center">
                        <Users size={14} className="mr-1" />
                        View Members
                      </button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ZoomProvider>
  );
};

export default TeamPage;
