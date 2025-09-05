import Image from 'next/image';
import { Mail } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    { id: 1, name: 'Dr. John Doe', designation: 'Professor', email: 'john@example.com', image: '/faculty1.jpg' },
    { id: 2, name: 'Dr. Jane Smith', designation: 'Associate Professor', email: 'jane@example.com', image: '/faculty2.jpg' },
    { id: 3, name: 'Dr. Robert Brown', designation: 'Assistant Professor', email: 'robert@example.com', image: '/faculty3.jpg' },
    { id: 4, name: 'Dr. Emily Davis', designation: 'Professor', email: 'emily@example.com', image: '/faculty4.jpg' },
    { id: 5, name: 'Dr. Michael Wilson', designation: 'Associate Professor', email: 'michael@example.com', image: '/faculty5.jpg' },
    { id: 6, name: 'Dr. Sarah Johnson', designation: 'Assistant Professor', email: 'sarah@example.com', image: '/faculty6.jpg' },
    { id: 7, name: 'Dr. David Lee', designation: 'Professor', email: 'david@example.com', image: '/faculty7.jpg' },
    { id: 8, name: 'Dr. Lisa Wang', designation: 'Associate Professor', email: 'lisa@example.com', image: '/faculty8.jpg' },
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f57d3b' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Esteemed Faculty</h2>
        
        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Faculty Members */}
          {[...Array(9)].map((_, index) => {
            if (index === 4) { // Center cell
              return (
                <div key="center" className="bg-[#F5EFE7] rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Faculty</h3>
                  <p className="text-gray-700">
                    Our dedicated faculty members bring years of experience and expertise to provide quality education and mentorship to our students.
                  </p>
                </div>
              );
            }
            
            const faculty = facultyMembers[index > 4 ? index - 1 : index];
            return (
              <div key={faculty.id} className="bg-[#F5EFE7] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900">{faculty.name}</h3>
                <p className="text-gray-600 text-center mb-2">{faculty.designation}</p>
                <a 
                  href={`mailto:${faculty.email}`}
                  className="flex items-center justify-center text-blue-600 hover:underline"
                >
                  <Mail className="w-4 h-4 mr-1" />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
