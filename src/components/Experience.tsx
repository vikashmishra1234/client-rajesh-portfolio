import React from 'react';

const ProfessionalExperience: React.FC = () => {
  const experienceData = [
    {
      title: 'Assistant Professor (faculty of pharmacy)',
      company: 'BSA College Of Eng. And Tech, Mathura',
      year: '2023 - Present',
      description:
        'An ability to stay abreast on the latest trends and development in the subject area.',
    },
    {
      title: 'Assistant Professor ',
      company: 'Pt Rajendra Prasad smarak college',
      year: '2022 - 2023',
      description:
        'tech didactic and experimental settings of pharmacy practice to students',
    },
    {
      title: 'Sales & Marketing Explosure',
      company: 'Delcure Lifesciences LTD',
      year: '2017 - 2019',
      description:
        'Focused on Communicating and selling the products',
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-gray-800">{experience.title}</h3>
            <p className="text-gray-600 text-xl">{experience.company}</p>
            <span className="text-gray-500 text-md">{experience.year}</span>
            <p className="text-gray-700 text-lg mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
