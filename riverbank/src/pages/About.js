import React from 'react';

function About() {
  const beliefs = [
    { text: "The Bible as God's inspired Word", emoji: "📖" },
    { text: "Salvation through Jesus Christ", emoji: "✝️" },
    { text: "The Seventh-day Sabbath", emoji: "🌿" },
    { text: "Wholistic healthy living", emoji: "🍎" },
    { text: "The Second Coming of Christ", emoji: "☁️" },
    { text: "Service to humanity", emoji: "🤝" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">About Riverbank SDA Church</h1>
          <p className="text-xl font-medium">
            A welcoming community dedicated to living by God’s Word 🌍
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded in 2020, Riverbank SDA Church has been a beacon of faith and love in our community.
            Our congregation brings together people from all backgrounds to worship, grow, and serve.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are committed to sharing the gospel of Jesus Christ, supporting one another, and preparing believers
            for His soon return. Our church offers various ministries to meet the spiritual, emotional, and physical needs of our members and the community.
          </p>
        </div>

        {/* Our Beliefs Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Our Beliefs</h2>
          <p className="text-gray-700 mb-6">
            As followers of Christ, we embrace foundational beliefs that shape our lives and guide our actions.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl">{belief.emoji}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{belief.text}</h3>
                </div>
                <p className="text-gray-600">
                  {belief.text} is central to our faith, encouraging us to live in accordance with God's will and purpose.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bible Principles Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Our Commitment to Bible Principles</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We believe that the Bible is the inspired Word of God and the ultimate authority for faith and practice.
            Our commitment to biblical principles is unwavering, as we seek to live lives that reflect the teachings
            of Christ and the moral guidance provided in Scripture.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through our sermons, Bible studies, and personal lives, we aim to grow in our understanding and application
            of biblical truths, drawing closer to God each day.
          </p>
        </div>

        {/* Spirit of Prophecy Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Guided by the Spirit of Prophecy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We are inspired by the Spirit of Prophecy writings, which we believe provide additional guidance and
            counsel for our spiritual journey. These writings deepen our understanding of God’s Word and offer valuable
            insights for practical Christian living.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Riverbank SDA Church, we incorporate these teachings into our programs, services, and personal
            development, striving to honor God’s call to live in harmony with His will.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
