import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'M Pharma (Pharmaceutical chemistry)',
      institution: 'Sun Institute of Pharmaceutical Education and Research',
      year: '2020 - 2022',
    },
    {
      degree: 'B. Pharma',
      institution: 'Shri Ram Nath Singh College of Pharmacy',
      year: '2004 - 2008',
    },
    {
      degree: '12th PCB',
      institution: 'Shri Durge Higher Secondary School',
      year: '1999-2000',
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
      <div className="space-y-6">
        {educationData.map((education, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{education.degree}</h3>
            <p className="text-gray-600 text-xl">{education.institution}</p>
            <span className="text-gray-500 text-md">{education.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
