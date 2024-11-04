import React from 'react';

function GallerySection() {
  const images = [
    { src: '/assets/gallery/gallery1.jpg', alt: 'Lantano Nabaala' },
    { src: '/assets/gallery/gallery2.jpg', alt: 'Deaconness' },
    { src: '/assets/gallery/gallery4.jpg', alt: 'Lesson discussion' },
    { src: '/assets/gallery/gallery5.jpeg', alt: 'Bible Study' },
    { src: '/assets/gallery/gallery.jpg', alt: 'Outdoor activites' },
    { src: '/assets/gallery/gallery7 (1).jpeg', alt: 'youths' },
    { src: '/assets/gallery/gallery6.jpeg', alt: 'Pr daniel' },
    { src: '/assets/gallery/gallery8.JPG', alt: 'Men singing' },
    { src: '/assets/gallery/gallery3.jpg', alt: 'Youths' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our church</h2>
          <p className="mt-4 text-lg text-gray-600">Moments from our church </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;