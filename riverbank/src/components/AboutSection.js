import React from 'react';
import {  Heart, Users, BookOpen, Handshake } from 'lucide-react';

function AboutSection() {
  const features = [
    {
      title: 'Christ-centered worship services',
      description: 'Join us for inspiring worship every Sabbath',
      icon: Heart
    },
    {
      title: 'Engaging Bible study groups',
      description: 'Deepen your understanding through interactive study',
      icon: BookOpen
    },
    {
      title: 'Active ministries',
      description: 'Get involved in our diverse ministry programs',
      icon: Users
    },
    {
      title: 'Community outreach programs',
      description: 'Serving our community with love and compassion',
      icon: Handshake
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-24 border-t border-indigo-200" />
              </div>
              <h3 className="relative pl-28 text-lg font-semibold text-indigo-600">
                Welcome to
              </h3>
            </div>
            
            <h2 className="mt-4 text-4xl font-bold text-gray-900 tracking-tight mb-6">
              Riverbank SDA Church
            </h2>
            
            <p className="text-xl leading-8 text-gray-600 mb-8">
              A welcoming community of Seventh Day Adventist believers dedicated to
              sharing God's love through worship, fellowship, and service.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Right Content */}
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative">
              <img
                className="rounded-2xl shadow-xl ring-1 ring-gray-900/10"
                src="/assets/gallery/about.jpeg"
                alt="Church Interior"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-600/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-100 rounded-full opacity-20" />
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-indigo-50 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;