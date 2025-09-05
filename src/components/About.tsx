import Image from 'next/image';

const About = () => {
  const cards = [
    { id: 1, title: 'Mission', image: '/placeholder1.jpg', hidden: true },
    { id: 2, title: 'Vision', image: '/placeholder2.jpg', hidden: false },
    { id: 3, title: 'Values', image: '/placeholder3.jpg', hidden: false },
    { id: 4, title: 'Achievements', image: '/placeholder4.jpg', hidden: false },
    { id: 5, title: 'Faculty', image: '/placeholder5.jpg', hidden: false },
    { id: 6, title: 'Alumni', image: '/placeholder6.jpg', hidden: true },
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f57d3b' }}>
      <div className="max-w-7xl mx-auto">
        {/* Quote - Positioned at the top, starting from second column */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="col-start-2 col-span-2">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              "EDUCATION IS THE MOST POWERFUL WEAPON WHICH YOU CAN USE TO CHANGE THE WORLD"
            </h2>
          </div>
        </div>
        
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className={`relative group overflow-hidden rounded-xl ${card.hidden ? 'invisible' : ''}`}
            >
              <div className="h-80 w-full">
                {!card.hidden && (
                  <>
                    <div className="w-full h-full bg-white bg-opacity-10 rounded-lg">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white px-4 py-2 rounded-tl-lg">
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default About;
