"use client";

import ScrollCarousel from "../../components/carousel";

export default function Gallery() {
  const images = [
    "family image 1.jpeg",
    "family_image_7.png",
    "family image 3.jpeg",
    "family image 4.jpeg",
    "family image 5.jpeg",
    "family image 6.jpeg"
  ];

  const titles = [
    "Story Time",
    "Outdoor Play",
    "Arts and Crafts",
    "Morning Circle Time",
    "Snack Time",
    "Nap Time"
  ];

  const descriptions = [
    "Story time is a magical journey where children discover new worlds, develop language skills, and learn valuable life lessons through engaging tales and interactive reading.",
    "Our spacious outdoor play area is where imaginations run wild! Children develop physical skills, explore nature, and learn important social skills through cooperative play.",
    "In our creative arts corner, children express themselves through painting, drawing, and crafts. Every masterpiece tells a unique story of their growing imagination.","Our morning circle time brings everyone together for interactive songs, learning activities, and sharing special moments. It's a wonderful way to start each day with joy and connection."
    ,
    "Our nutritious snack time is more than just eating - it's a social experience where children learn about healthy choices and practice good manners while sharing stories." 
    ,
 "After an active morning, our cozy nap area provides a peaceful space for children to rest and recharge, ensuring they have the energy for afternoon adventures.",
    "The end of day brings reflection and celebration of our day's achievements, with calming activities that help children wind down and prepare for home time.",
  ];

  return (
    <div className="flex justify-center min-h-screen py-12 px-4 relative pt-20">
      <div 
        className="absolute inset-0 opacity-30"
                  style={{
            backgroundImage: 'url("/ChatGPT Image Jun 1, 2025, 09_34_50 PM.png")',
            backgroundSize: '1600px 1200px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}
      />
      <div className="w-7/8 relative">
        <h1 className="text-4xl font-bold mt-20 lg:mt-0 text-center mb-4 text-black">
          Our Gallery
        </h1>
        <p className="text-xl text-center mb-12 text-black  max-w-2xl mx-auto">
        Each image captures a special moment in our daycare. 
        You can click on the navigation buttons to the right and left of the carousel to flip through our gallery.
        </p>
        <div className="mb-12">
          <ScrollCarousel 
            images={images} 
            titles={titles}
            descriptions={descriptions}
          />
        </div>
      </div>
    </div>
  );
}
