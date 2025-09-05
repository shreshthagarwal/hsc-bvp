import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

// Sample event data - replace with actual data
const events = [
  {
    id: 1,
    title: 'Tech Symposium 2023',
    description: 'Annual technology conference featuring industry leaders and workshops on emerging technologies.',
    image: '/event1.jpg',
    date: '15',
    month: 'Oct',
    year: '2023'
  },
  {
    id: 2,
    title: 'AI & ML Workshop',
    description: 'Hands-on workshop covering the latest in AI and Machine Learning.',
    image: '/event2.jpg',
    date: '05',
    month: 'Nov',
    year: '2023'
  },
  {
    id: 3,
    title: 'Design Thinking Bootcamp',
    description: 'Learn design thinking methodologies for real-world problem-solving.',
    image: '/event3.jpg',
    date: '10',
    month: 'Dec',
    year: '2023'
  },
  {
    id: 4,
    title: 'Startup Pitch Competition',
    description: 'Witness innovative startup ideas and network with entrepreneurs.',
    image: '/event4.jpg',
    date: '20',
    month: 'Jan',
    year: '2024'
  },
];

export const metadata: Metadata = {
  title: 'Events - HSC BVP',
  description: 'Upcoming events and webinars organized by HSC BVP.',
};

export default function EventsPage() {
  return (
    <div style={{ backgroundColor: '#F5EFE7', minHeight: '100vh' }}>
      <Navbar />
      <main className="w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Our Past Events</h2>
        </div>

        {/* Events Grid */}
        <div className="space-y-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-[#F5EFE7] rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row border border-gray-200"
              style={{ height: '40vh' }}
            >
              {/* Date Section */}
              <div className="p-6 flex flex-col items-center justify-center w-full md:w-48 flex-shrink-0 relative">
                <div className="absolute right-0 top-0 bottom-0 w-px bg-[#F57D3B] bg-opacity-50"></div>
                <div className="text-4xl font-bold text-gray-800">{event.date}</div>
                <div className="text-xl text-gray-600">{event.month}</div>
                <div className="text-lg text-gray-500">{event.year}</div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-black mb-2">{event.title}</h3>
                <div className="h-1 w-16 bg-[#F57D3B] my-3"></div>
                <p className="text-gray-700">{event.description}</p>
              </div>

              {/* Event Image */}
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </main>
    </div>
  );
}
