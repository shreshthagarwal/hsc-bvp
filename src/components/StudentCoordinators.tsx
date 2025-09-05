'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Github } from 'lucide-react';

type Department = {
  id: string;
  name: string;
};

type Coordinator = {
  id: number;
  name: string;
  title: string;
  designation: string;
  image: string;
  linkedin?: string;
  email?: string;
  github?: string;
};

const departments: Department[] = [
  { id: 'head', name: 'Student Head' },
  { id: 'website', name: 'Website and Design' },
  { id: 'content', name: 'Content and Documentation' },
  { id: 'events', name: 'Events and Management' },
  { id: 'pr', name: 'Public Relations' },
];

// Sample data - replace with actual data
const coordinatorsData: Record<string, Coordinator[]> = {
  head: [
    {
      id: 1,
      name: 'John Doe',
      title: 'Student Head',
      designation: 'Computer Science',
      image: '/student1.jpg',
      linkedin: '#',
      email: 'john@example.com',
    },
  ],
  website: [
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Lead Developer',
      designation: 'Computer Science',
      image: '/student2.jpg',
      linkedin: '#',
      github: '#',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      title: 'UI/UX Designer',
      designation: 'Design',
      image: '/student3.jpg',
      linkedin: '#',
      email: 'alex@example.com',
    },
  ],
  content: [
    {
      id: 4,
      name: 'Sarah Williams',
      title: 'Content Lead',
      designation: 'English',
      image: '/student4.jpg',
      email: 'sarah@example.com',
    },
  ],
};

const StudentCoordinators = () => {
  const [activeTab, setActiveTab] = useState<string>('head');

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5EFE7' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Student Coordinators</h2>
        
        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === dept.id
                  ? 'bg-black text-white'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coordinatorsData[activeTab]?.map((coordinator) => (
            <div 
              key={coordinator.id}
              className="border-2 border-black rounded-2xl p-6 bg-white flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-black">
                <Image
                  src={coordinator.image}
                  alt={coordinator.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{coordinator.name}</h3>
              <p className="text-gray-700 font-medium">{coordinator.title}</p>
              <p className="text-gray-600 text-sm mb-4">{coordinator.designation}</p>
              
              <div className="flex gap-4 mt-auto">
                {coordinator.linkedin && (
                  <a href={coordinator.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {coordinator.email && (
                  <a href={`mailto:${coordinator.email}`} className="hover:text-red-600">
                    <Mail className="w-5 h-5" />
                  </a>
                )}
                {coordinator.github && (
                  <a href={coordinator.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCoordinators;
