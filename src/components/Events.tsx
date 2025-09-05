'use client';

import Image from 'next/image';

// Sample event data - replace with actual data
const events = [
  {
    id: 1,
    title: 'Tech Symposium 2023',
    description: 'Annual technology conference featuring industry leaders and workshops on emerging technologies.',
    image: '/event1.jpg',
    date: 'Oct 15, 2023'
  },
  {
    id: 2,
    title: 'AI & ML Workshop',
    description: 'Hands-on workshop covering the latest in AI and Machine Learning.',
    image: '/event2.jpg',
    date: 'Nov 5, 2023'
  },
  {
    id: 3,
    title: 'Design Thinking Bootcamp',
    description: 'Learn design thinking methodologies for real-world problem-solving.',
    image: '/event3.jpg',
    date: 'Dec 10, 2023'
  },
  {
    id: 4,
    title: 'Startup Pitch Competition',
    description: 'Witness innovative startup ideas and network with entrepreneurs.',
    image: '/event4.jpg',
    date: 'Jan 20, 2024'
  },
];

const Events = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5EFE7' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <h2 className="text-4xl font-bold text-black mb-4 md:mb-0">Events and Webinars</h2>
          <p className="text-lg text-gray-800 max-w-md">
            Join us for exciting events and webinars featuring industry experts and thought leaders.
          </p>
        </div>

        {/* Scrollable Events */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="flex-none w-80 bg-transparent rounded-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                  <h3 className="text-xl font-bold text-black mb-2">{event.title}</h3>
                  <p className="text-gray-700 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
