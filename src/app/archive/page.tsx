'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

// Sample data - replace with actual data
const coordinatorsData = {
  '2023-24': [
    { id: 1, name: 'John Doe', team: 'Technical', year: '2023-24' },
    { id: 2, name: 'Jane Smith', team: 'Events', year: '2023-24' },
    { id: 3, name: 'Robert Johnson', team: 'Publicity', year: '2023-24' },
    { id: 4, name: 'Emily Davis', team: 'Logistics', year: '2023-24' },
  ],
  '2024-25': [
    { id: 1, name: 'Michael Brown', team: 'Technical', year: '2024-25' },
    { id: 2, name: 'Sarah Wilson', team: 'Events', year: '2024-25' },
    { id: 3, name: 'David Taylor', team: 'Publicity', year: '2024-25' },
    { id: 4, name: 'Jennifer Lee', team: 'Logistics', year: '2024-25' },
  ]
};

const TabButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 text-lg font-medium transition-colors ${active ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}
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
          <h1 className="text-4xl font-bold text-center mb-12 text-black">Archives</h1>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8 border-b border-gray-300">
            <TabButton 
              active={activeTab === '2023-24'} 
              onClick={() => setActiveTab('2023-24')}
            >
              Student Coordinators 2023-24
            </TabButton>
            <TabButton 
              active={activeTab === '2024-25'} 
              onClick={() => setActiveTab('2024-25')}
            >
              Student Coordinators 2024-25
            </TabButton>
          </div>
          
          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-black overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Team
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coordinatorsData[activeTab].map((coordinator) => (
                  <tr key={coordinator.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {coordinator.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {coordinator.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {coordinator.team}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {coordinator.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
