'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ResourceModal from '@/components/ResourceModal';

// Resource data
const resources = [
  {
    title: 'ENTRANCE & LANGUAGE EXAMS',
    description: 'List of popular and required entrance and English language proficiency exams for further studies. Select your preferred study destination to view relevant exams and testing agencies.',
    buttons: [
      {
        label: 'Competitive Exams - Within India',
        description: 'Competitive Exams for further studies in India',
        content: '#EXAMURL1\nUPSC\nhttps://www.upsc.gov.in/\n2\nSSC\nhttps://ssc.nic.in/\n3\nCAT\nhttps://iimcat.ac.in\n4\nGATE\nhttps://gate.iitkgp.ac.in/'
      },
      {
        label: 'Competitive Exams - Abroad',
        description: 'Competitive Exams and English Language Proficiency Exams for further studies abroad.',
        content: '#EXAMURL1\nGRE\nhttps://www.ets.org/gre\n2\nGMAT\nhttps://www.mba.com/exams/gmat\n3\nILETS\nhttps://www.ielts.org/\n4\nTOEFL\nhttps://www.ets.org/toefl'
      }
    ]
  },
  {
    title: 'TOP UNIVERSITIES FOR MASTERS',
    description: 'Comprehensive list of top-ranked global universities for MS programs. Features institutions known for academic excellence and research opportunities worldwide.',
    content: `LIST OF TOP UNIVERSITIES FOR MASTERS ABROAD

If you're considering applying for an MS program abroad, here are some of the top universities you shouldn't miss. These universities have consistently ranked among the best globally.

1. Massachusetts Institute of Technology (MIT) - https://www.mit.edu/
2. Stanford University - https://www.stanford.edu/
3. Harvard University - https://www.harvard.edu/
4. California Institute of Technology (Caltech) - https://www.caltech.edu/
5. University of Oxford - https://www.ox.ac.uk/`
  },
  {
    title: 'STUDENT SUCCESS STORIES',
    description: 'Showcase of our alumni currently pursuing masters at prestigious universities across the globe. Learn about their journeys and achievements.',
    content: `STUDENT SUCCESS STORIES

Read inspiring stories from our alumni who are now pursuing their dreams at top universities around the world.

1. John Doe - MS in Computer Science at Stanford University
2. Jane Smith - MS in Data Science at MIT
3. Alex Johnson - MS in Mechanical Engineering at ETH Zurich

Each of our students has a unique journey. Contact us to learn more about their experiences and how we helped them achieve their academic goals.`
  },
  {
    title: 'STATEMENT OF PURPOSE GUIDE',
    description: 'Step-by-step guide to writing an impressive SOP. Learn how to effectively demonstrate your skills, ambitions, and experience to stand out in your application.',
    content: `HOW TO WRITE A STATEMENT OF PURPOSE (SOP)

A well-crafted Statement of Purpose (SOP) is crucial for your graduate school application. Here's a comprehensive guide:

1. Introduction
   - Start with a compelling opening
   - State your purpose clearly
   - Mention your field of interest

2. Academic Background
   - Highlight relevant coursework
   - Mention academic achievements
   - Discuss research experience

3. Work Experience
   - Detail relevant work experience
   - Highlight key projects
   - Show leadership and teamwork

4. Future Goals
   - Short-term goals
   - Long-term aspirations
   - How the program fits your goals

5. Why This University?
   - Specific faculty or research
   - Unique program features
   - Alignment with your goals

6. Conclusion
   - Summarize key points
   - Reaffirm your interest
   - Thank the committee

Tips:
- Be concise (500-1000 words)
- Be specific and provide examples
- Proofread carefully
- Tailor each SOP to the specific program`
  },
  {
    title: 'LETTER OF RECOMMENDATION',
    description: 'Essential guidelines for obtaining strong recommendation letters. Includes tips for both students and recommenders to create impactful academic endorsements.',
    content: `LETTER OF RECOMMENDATION GUIDE

A strong Letter of Recommendation (LOR) can significantly enhance your graduate school application. Here's what you need to know:

1. WHO TO ASK
   - Professors who know you well
   - Research supervisors
   - Work supervisors (if relevant)
   - Someone who can speak to your abilities

2. WHEN TO ASK
   - At least 2-3 months before deadline
   - During office hours or scheduled meeting
   - Not during busy periods (exams, end of term)

3. HOW TO ASK
   - Ask in person if possible
   - Be polite and professional
   - Provide necessary information
   - Follow up if needed

4. WHAT TO PROVIDE
   - Your CV/resume
   - Transcripts
   - Statement of Purpose
   - List of programs and deadlines
   - Specific points to highlight

5. SAMPLE EMAIL REQUEST
   Subject: Letter of Recommendation Request for [Your Name]
   
   Dear [Professor's Name],
   
   I hope this message finds you well. I am applying to [program name] at [university name] and would be honored if you could write me a strong letter of recommendation.
   
   [Briefly remind them of your work together]
   
   The deadline is [date]. Please let me know if you need any additional information.
   
   Thank you for your time and consideration.
   
   Best regards,
   [Your Name]`
  },
];

// Metadata can't be exported from client components
// Add this to your layout.tsx or page.tsx in a parent server component

interface ButtonProps {
  label: string;
  description: string;
  content?: string;
}

interface ResourceCardProps {
  title: string;
  description: string;
  details?: string;
  buttons?: ButtonProps[];
  className?: string;
  onClick?: () => void;
  onButtonClick?: (e: React.MouseEvent, button: ButtonProps) => void;
}

const ResourceCard = ({ 
  title, 
  description, 
  details, 
  buttons, 
  className = '',
  onClick,
  onButtonClick 
}: ResourceCardProps) => {
  console.log(`Rendering card: ${title}, has onClick: ${!!onClick}`);
  return (
    <div 
      className={`relative group h-full ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <motion.div 
        className="relative bg-white rounded-xl p-6 h-full overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        {/* Hover background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-4 pb-3 border-b border-gray-200 group-hover:border-orange-200">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-gray-800 transition-colors">
              {title}
            </h3>
          </div>
          <div className="flex-grow">
            <p className="mb-2 leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors">
              {description}
            </p>
            {details && (
              <pre className="text-sm whitespace-pre-wrap font-sans text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {details}
              </pre>
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 group-hover:border-orange-200 space-y-3">
            {buttons ? (
              buttons.map((button, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between group/button p-3 rounded-lg hover:bg-orange-100/80 border border-transparent hover:border-orange-200 transition-colors"
                  onClick={(e) => {
                    console.log('Button clicked in card');
                    onButtonClick?.(e, button);
                  }}
                >
                  <div className="flex-1 pr-2">
                    <div className="font-medium text-gray-900 group-hover/button:text-orange-700">{button.label}</div>
                    <div className="text-sm text-gray-600 group-hover/button:text-gray-700">{button.description}</div>
                  </div>
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover/button:translate-x-1 transition-transform text-orange-600">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-10 h-10 flex items-center justify-center ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:translate-x-1 transition-transform text-orange-600">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ModalState {
  isOpen: boolean;
  title: string;
  content: string;
}

export default function ResourcesPage() {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    title: '',
    content: ''
  });

  const openModal = (title: string, content: string) => {
    console.log('Opening modal with title:', title);
    console.log('Content:', content);
    setModal({
      isOpen: true,
      title,
      content
    });
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  const handleCardClick = (resource: any) => {
    console.log('Card clicked:', resource.title);
    console.log('Has content?', !!resource.content);
    if (resource.content) {
      openModal(resource.title, resource.content);
    }
  };

  const handleButtonClick = (e: React.MouseEvent, resource: any, button: any) => {
    e.stopPropagation();
    console.log('Button clicked:', button.label);
    console.log('Button has content?', !!button.content);
    if (button.content) {
      openModal(button.label, button.content);
    }
  };
  return (
    <div className="bg-[#F5EFE7] min-h-screen">
      <Navbar />
      <ResourceModal 
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        content={modal.content}
      />
      <main className="w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              ACADEMIC RESOURCES
            </h1>
            <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full"></div>
          </div>

          {/* Grid Layout for 5 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Row 1 */}
            <div className="md:col-span-2">
              <ResourceCard
                {...resources[0]}
                className="h-full min-h-[300px]"
                onButtonClick={(e, button) => handleButtonClick(e, resources[0], button)}
              />
            </div>
            <div className="md:col-span-1">
              <ResourceCard
                {...resources[1]}
                className="h-full min-h-[300px]"
                onClick={() => handleCardClick(resources[1])}
              />
            </div>

            {/* Row 2 */}
            <div className="md:col-span-1">
              <ResourceCard
                {...resources[2]}
                className="h-full min-h-[300px]"
                onClick={() => handleCardClick(resources[2])}
              />
            </div>
            <div className="md:col-span-1">
              <ResourceCard
                {...resources[3]}
                className="h-full min-h-[300px]"
                onClick={() => handleCardClick(resources[3])}
              />
            </div>
            <div className="md:col-span-1">
              <ResourceCard
                {...resources[4]}
                className="h-full min-h-[300px]"
                onClick={() => handleCardClick(resources[4])}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}