import { Metadata } from 'next';
import Navbar from '@/components/Navbar';

// Sample data - replace with actual data from your database/API
const alumniData = [
  { id: 1, name: 'John Doe', university: 'Stanford University', year: '2023' },
  { id: 2, name: 'Jane Smith', university: 'MIT', year: '2022' },
  { id: 3, name: 'Robert Johnson', university: 'Harvard University', year: '2023' },
  { id: 4, name: 'Emily Davis', university: 'University of Cambridge', year: '2022' },
  { id: 5, name: 'Michael Brown', university: 'ETH Zurich', year: '2023' },
  { id: 6, name: 'Sarah Wilson', university: 'University of Oxford', year: '2021' },
  { id: 7, name: 'David Taylor', university: 'Caltech', year: '2023' },
  { id: 8, name: 'Jennifer Lee', university: 'Imperial College London', year: '2022' },
];

export const metadata: Metadata = {
  title: 'Alumni - HSC BVP',
  description: 'Connect with our distinguished alumni network.',
};

export default function AlumniPage() {
  return (
    <div style={{ backgroundColor: '#F57D3B', minHeight: '100vh' }}>
      <Navbar />
      <main className="w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">
            LIST OF STUDENTS PURSUING MASTERS FROM TOP UNIVERSITIES
          </h1>
          
          <div className="space-y-2 w-full max-w-5xl mx-auto">
            {alumniData.map((alumni, index) => (
              <div 
                key={alumni.id} 
                className="relative bg-[#F5EFE7] rounded-lg px-6 py-3 shadow-sm hover:shadow transition-all duration-150 w-full"
              >
                <div className="flex items-center justify-between w-full h-16">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* S.No in square orange div */}
                    <div className="flex-shrink-0 w-10 h-10 bg-[#F57D3B] flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    
                    {/* Name and University */}
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{alumni.name}</h3>
                      <p className="text-gray-700 text-sm truncate">{alumni.university}</p>
                    </div>
                  </div>
                  
                  {/* Year */}
                  <div className="text-black font-medium px-3 py-1">
                    {alumni.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
