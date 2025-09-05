import React from 'react';

const Vision = () => {
  const objectives = [
    "To foster academic excellence and research culture",
    "To develop industry-relevant skills and innovation",
    "To promote holistic development of students"
  ];

  const cards = [
    {
      id: 1,
      title: "Academic Excellence",
      content: "Promote cutting-edge research and innovation in technical education"
    },
    {
      id: 2,
      title: "Industry Collaboration",
      content: "Bridge the gap between academia and industry requirements"
    },
    {
      id: 3,
      title: "Student Development",
      content: "Nurture well-rounded individuals with strong technical and soft skills"
    }
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5EFE7' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading and Description */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Vision and Objectives</h2>
          <p className="text-lg text-gray-800">
            Our vision is to be a center of excellence in technical education, fostering innovation,
            research, and holistic development to create future-ready professionals who can contribute
            meaningfully to society and industry.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Card - 40% width */}
          <div className="md:col-span-2 h-[50vh] border-2 border-black rounded-lg p-8 bg-[#F5EFE7]">
            <h3 className="font-semibold text-xl mb-3">{cards[0].title}</h3>
            <p className="text-gray-800">{cards[0].content}</p>
          </div>
          
          {/* Right Column - 60% width */}
          <div className="md:col-span-3 flex flex-col gap-[2vh]">
            {/* Right Top Card */}
            <div className="h-[24vh] border-2 border-black rounded-lg p-6 bg-[#F5EFE7]">
              <h3 className="font-semibold text-lg mb-2">{cards[1].title}</h3>
              <p className="text-gray-800">{cards[1].content}</p>
            </div>
            
            {/* Right Bottom Card */}
            <div className="h-[24vh] border-2 border-black rounded-lg p-6 bg-[#F5EFE7]">
              <h3 className="font-semibold text-lg mb-2">{cards[2].title}</h3>
              <p className="text-gray-800">{cards[2].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
