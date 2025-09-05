import { Metadata } from 'next';
import Navbar from '@/components/Navbar';

// Sample resource data - replace with actual content
const resources = [
  {
    title: 'Study Materials',
    description: 'Comprehensive collection of study resources and reference materials for all subjects',
  },
  {
    title: 'Past Papers',
    description: 'Previous years\' question papers with solutions and marking schemes',
  },
  {
    title: 'Lecture Notes',
    description: 'Detailed notes from classroom lectures and presentations',
  },
  {
    title: 'Lab Manuals',
    description: 'Practical guides and instructions for laboratory sessions',
  },
  {
    title: 'Research Papers',
    description: 'Collection of academic papers and research articles',
  },
  {
    title: 'Reference Books',
    description: 'Digital copies of recommended textbooks and reference materials',
  },
];

export const metadata: Metadata = {
  title: 'Resources - HSC BVP',
  description: 'Access study materials and resources for students.',
};

const ResourceCard = ({ title, description, className = '' }: { title: string; description: string; className?: string }) => {
  return (
    <div className={`relative bg-[#F5EFE7] border-2 border-black rounded-lg p-6 hover:shadow-lg transition-all duration-200 ${className}`}>
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
        <p className="text-gray-700 flex-grow">{description}</p>
        <div className="mt-4 flex justify-end">
          <button className="w-8 h-8 flex items-center justify-center text-black hover:bg-black hover:text-[#F5EFE7] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ResourcesPage() {
  return (
    <div className="bg-[#F5EFE7] min-h-screen">
      <Navbar />
      <main className="w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-black">
            Resources
          </h1>

          {/* Corrected Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 max-w-7xl mx-auto">
            {/* Card 1: Spans 2 columns, 2 rows */}
            <ResourceCard
              {...resources[0]}
              className="col-span-1 md:col-span-2 row-span-2 min-h-[400px]"
            />

            {/* Card 2: Spans 1 column, 2 rows */}
            <ResourceCard
              {...resources[1]}
              className="col-span-1 md:col-span-1 row-span-2 min-h-[400px]"
            />

            {/* Card 3: Spans 1 column, 2 rows */}
            <ResourceCard
              {...resources[2]}
              className="col-span-1 md:col-span-1 row-span-2 min-h-[400px]"
            />
            
            {/* Card 4: Spans 1 column, 2 rows */}
            <ResourceCard
              {...resources[3]}
              className="col-span-1 md:col-span-1 row-span-2 min-h-[400px]"
            />

            {/* Card 5: Spans 1 column, 2 rows */}
            <ResourceCard
              {...resources[4]}
              className="col-span-1 md:col-span-1 row-span-2 min-h-[400px]"
            />

            {/* Card 6: Spans 2 columns, 2 rows */}
            <ResourceCard
              {...resources[5]}
              className="col-span-1 md:col-span-2 row-span-2 min-h-[400px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}