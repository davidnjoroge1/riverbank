import React from 'react';

function ServicesSection() {
  const services = [
    {
      title: 'Morning Devotion',
      emoji: '🌅',
      time: '8:00 - 9:00 AM',
      description: 'Start your day with spiritual nourishment through prayer and meditation on Gods word'
    },
    {
      title: 'Sabbath School',
      emoji: '📚',
      time: '9:00 - 9:30 AM',
      description: 'Engage in structured sabbath school programme for mission readings.'
    },
    {
      title: 'Lesson Discussion',
      emoji: '💭',
      time: '9:30 - 10:20 AM',
      description: 'Participate in interactive group discussions about the weekly Sabbath School lesson'
    },
    {
      title: 'Singing session',
      emoji: '🎵',
      time: '10:30 - 10:50 AM',
      description: 'Lift your voice in joyful praise through contemporary and inspired hymns'
    },
    {
      title: 'Divine Service',
      emoji: '⛪',
      time: '11:00 - 12:20 PM',
      description: 'Experience powerful worship through Spirit-filled preaching'
    },
    {
      title: 'Fellowship Lunch',
      emoji: '🍽️',
      time: '12:30 - 1:30 PM',
      description: 'Share a blessed meal with the church family and build meaningful connections'
    },
    {
      title: 'Bible Study & Prophecy',
      emoji: '📖',
      time: '2:00 - 6:00 PM',
      description: 'Dive deeper into scripture through themed studies and spiritual bible study'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our service
            
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join us for a day of worship, learning, and fellowship
          </p>
          <div className="mt-4 w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-4xl mb-4 block">{service.emoji}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4 transform origin-center group-hover:scale-x-150 transition-transform duration-300" />
                <p className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm">
                  {service.time}
                </p>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            "Let us not give up meeting together, as some are in the habit of doing, 
            but let us encourage one another." - Hebrews 10:25
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
            Join Us This Sabbath ✨
          </button>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-indigo-100 rounded-full opacity-50 -translate-x-16 -translate-y-16" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-100 rounded-full opacity-50 translate-x-16 translate-y-16" />
    </section>
  );
}

export default ServicesSection;