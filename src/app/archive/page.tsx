'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

interface Coordinator {
  id: number;
  name: string;
  team: string;
  year: string;
  position?: string;
}

const coordinatorsData: { [key: string]: Coordinator[] } = {
  '2023-24': [
    { id: 1, name: 'Dev Khokhar', team: 'Student Head', year: '4th Year (CSE)', position: 'Student Head' },
    { id: 2, name: 'Jashith Arora', team: 'Web & Design Team', year: '2nd Year (IT)' },
    { id: 3, name: 'Devansh Tyagi', team: 'Web & Design Team', year: '2nd Year (IT)' },
    { id: 4, name: 'Ameya Bhargava', team: 'Web & Design Team', year: '3rd Year (CSE)' },
    { id: 5, name: 'Ashish Dhiman', team: 'Web & Design Team', year: '3rd Year (CSE)' },
    { id: 6, name: 'Ansh Kapoor', team: 'Content & Documentation Team', year: '4th Year (CSE)' },
    { id: 7, name: 'Dhruv Mathur', team: 'Content & Documentation Team', year: '3rd Year (CSE)' },
    { id: 8, name: 'Anekant Manthan', team: 'Content & Documentation Team', year: '3rd Year (CSE)' },
    { id: 9, name: 'Utkarsh Rajora', team: 'Publicity Team', year: '3rd Year (CSE)' },
    { id: 10, name: 'Tushar Singh', team: 'Publicity Team', year: '3rd Year (CSE)' },
    { id: 11, name: 'Manvi', team: 'Publicity Team', year: '4th Year (ICE)' },
    { id: 12, name: 'Mehreen', team: 'Event Coordination Team', year: '4th Year (CSE)' },
    { id: 13, name: 'Saatvik Dhurandher', team: 'Event Coordination Team', year: '3rd Year (CSE)' },
    { id: 14, name: 'Chinmai Sharma', team: 'Event Coordination Team', year: '4th Year (ICE)' },
  ],
  '2024-25': []
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const TabButton = ({ active, onClick, children, disabled = false }: TabButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-6 py-3 text-lg font-medium transition-colors ${
      active 
        ? 'text-orange-600 border-b-2 border-orange-600 font-semibold' 
        : 'text-gray-600 hover:text-orange-500'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);

export default function ArchivePage() {
  const [activeTab, setActiveTab] = useState<'2023-24' | '2024-25'>('2023-24');

  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              OUR COORDINATORS
            </h1>
            <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full"></div>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-12 border-b border-gray-200">
            <TabButton 
              active={activeTab === '2023-24'} 
              onClick={() => setActiveTab('2023-24')}
            >
              2023-24
            </TabButton>
            <TabButton 
              active={activeTab === '2024-25'} 
              onClick={() => setActiveTab('2024-25')}
              disabled={coordinatorsData['2024-25'].length === 0}
            >
              2024-25 {coordinatorsData['2024-25'].length === 0 && '(Coming Soon)'}
            </TabButton>
          </div>

          {/* Coordinators List */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 bg-orange-50 px-6 py-4 border-b border-gray-200">
              <div className="col-span-1 text-sm font-semibold text-gray-700">S.No</div>
              <div className="col-span-4 text-sm font-semibold text-gray-700">Name</div>
              <div className="col-span-4 text-sm font-semibold text-gray-700">Team</div>
              <div className="col-span-3 text-sm font-semibold text-gray-700">Year</div>
            </div>

            {/* Mobile and Tablet View */}
            <div className="md:hidden">
              {coordinatorsData[activeTab].map((coordinator) => (
                <div 
                  key={coordinator.id}
                  className="border-b border-gray-200 p-4 hover:bg-orange-50 transition-colors duration-200"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-500 mr-2">{coordinator.id}.</span>
                        <h3 className="text-lg font-semibold text-gray-800">{coordinator.name}</h3>
                      </div>
                      <p className="text-orange-600 font-medium mt-1">{coordinator.team}</p>
                    </div>
                    <span className="text-sm text-gray-600">{coordinator.year}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              {coordinatorsData[activeTab].map((coordinator) => (
                <div 
                  key={coordinator.id}
                  className="grid grid-cols-12 items-center px-6 py-4 border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200"
                >
                  <div className="col-span-1 text-gray-600">{coordinator.id}</div>
                  <div className="col-span-4 font-medium text-gray-800">
                    {coordinator.name}
                    {coordinator.position && (
                      <span className="ml-2 text-xs text-orange-600">({coordinator.position})</span>
                    )}
                  </div>
                  <div className="col-span-4 text-gray-700">{coordinator.team}</div>
                  <div className="col-span-3 text-gray-600">{coordinator.year}</div>
                </div>
              ))}
            </div>

            {coordinatorsData[activeTab].length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No data available for {activeTab}. Check back later!
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
