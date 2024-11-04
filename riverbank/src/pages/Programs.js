import React from 'react';

function Programs() {
  const programs = [
    {
      title: "Children's Ministry",
      description: "Nurturing young minds in faith through engaging activities and Bible lessons.",
      time: "Every Sabbath at 9:30 AM",
      ageGroup: "Ages 4-12"
    },
    {
      title: "Youth Ministry",
      description: "Empowering young people to grow in faith and leadership.",
      time: "Sabbath Afternoons at 4:00 PM",
      ageGroup: "Ages 13-25"
    },
    {
      title: "Women's Ministry",
      description: "Supporting and empowering women through fellowship and spiritual growth.",
      time: "Monthly meetings",
      ageGroup: "All adult women"
    },
    {
      title: "Health Ministry",
      description: "Promoting wholistic health through education and lifestyle programs.",
      time: "Quarterly workshops",
      ageGroup: "All ages"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Programs</h1>
          <p className="mt-4 text-xl text-gray-600">
            Enriching lives through various ministries and activities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-indigo-600">
                    <span className="font-medium">Time:</span> {program.time}
                  </p>
                  <p className="text-sm text-indigo-600">
                    <span className="font-medium">Age Group:</span> {program.ageGroup}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;