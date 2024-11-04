import React from 'react';

function About() {
  const beliefs = [
    "The Bible as God's inspired Word",
    "Salvation through Jesus Christ",
    "The Seventh-day Sabbath",
    "Wholistic healthy living",
    "The Second Coming of Christ",
    "Service to humanity"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Riverbank SDA Church</h1>
          <p className="text-xl">A community of believers sharing God's love</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in [year], Riverbank SDA Church has been serving our community
              with dedication and love. Our congregation is diverse, welcoming people
              from all walks of life to worship together and grow in faith.
            </p>
            <p className="text-gray-600">
              We are committed to spreading the gospel of Jesus Christ, serving our
              community, and preparing people for His soon return. Our church offers
              various programs and ministries designed to meet the spiritual,
              emotional, and physical needs of our members and the community.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Beliefs</h2>
            <div className="space-y-4">
              {beliefs.map((belief, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="h-6 w-6 text-indigo-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{belief}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;