import Image from 'next/image';

// Sample alumni data - replace with actual data
const alumniData = [
  // First column (top to bottom)
  [
    {
      id: 1,
      name: 'Rahul Sharma',
      university: 'Stanford University',
      image: '/alumni1.jpg',
    },
    {
      id: 2,
      name: 'Priya Patel',
      university: 'University of Toronto',
      image: '/alumni2.jpg',
    },
  ],
  // Second column (single card)
  [
    {
      id: 3,
      name: 'Aarav Gupta',
      university: 'MIT',
      image: '/alumni3.jpg',
    },
  ],
  // Third column (top to bottom)
  [
    {
      id: 4,
      name: 'Ananya Reddy',
      university: 'University of Cambridge',
      image: '/alumni4.jpg',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      university: 'ETH Zurich',
      image: '/alumni5.jpg',
    },
  ],
];

const AlumniCard = ({ name, university, image }: { name: string; university: string; image: string }) => (
  <div className="mb-6 last:mb-0">
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 h-full transform transition-transform hover:scale-102">
      <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-white font-medium mb-1">Alumni</p>
      <p className="text-white">{university}</p>
    </div>
  </div>
);

const Alumni = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f57d3b' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Recent Student Admits - Alumni</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumniData.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col">
              {column.map((alumni) => (
                <AlumniCard key={alumni.id} {...alumni} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
