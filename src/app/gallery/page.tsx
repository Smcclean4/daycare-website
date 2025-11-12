"use client";

import ScrollCarousel from "../../components/carousel";

import * as motion from "motion/react-client"

export default function Gallery() {
  const images = [
    "family image 1.jpeg",
    "family_image_7.png",
    "IMG_6885.png",
    "IMG_6083.jpg"
  ];

  const titles = [
    "Outdoor Play",
    "Arts and Crafts",
    "Holidays and Celebrations",
    "Birthday Parties"
  ];

  const cards = [{
    src: 'IMG_1381.jpeg',
    alt: 'Thank you card 1',
  }, {
    src: 'IMG_1382.jpeg',
    alt: 'Thank you card 2',
  }, {
    src: 'IMG_1383.jpeg',
    alt: 'Thank you card 3',
  }, {
    src: 'IMG_1384.jpeg',
    alt: 'Thank you card 4',
  }, {
    src: 'IMG_1386.jpeg',
    alt: 'Thank you card 5',
  }, {
    src: 'IMG_1387.jpeg',
    alt: 'Thank you card 6',
  }, {
    src: 'IMG_1388.jpeg',
    alt: 'Thank you card 7',
  }, {
    src: 'IMG_1389.jpeg',
    alt: 'Thank you card 8',
  }, {
    src: 'IMG_1390.jpeg',
    alt: 'Thank you card 9',
  }, {
    src: 'IMG_1391.jpeg',
    alt: 'Thank you card 10',
  }, {
    src: 'IMG_1392.jpeg',
    alt: 'Thank you card 11',
  }, {
    src: 'IMG_1393.jpeg',
    alt: 'Thank you card 12',
  }, {
    src: 'IMG_1394.jpeg',
    alt: 'Thank you card 13',
  }, {
    src: 'IMG_1395.jpeg',
    alt: 'Thank you card 14',
  }, {
    src: 'IMG_1396.jpeg',
    alt: 'Thank you card 15',
  }, {
    src: 'IMG_1397.jpg',
    alt: 'Thank you card 16',
  }, {
    src: 'IMG_1398.jpeg',
    alt: 'Thank you card 17',
  }, {
    src: 'IMG_1399.jpeg',
    alt: 'Thank you card 18',
  }]

  const descriptions = [
    "Our spacious outdoor play area is where imaginations run wild! Children develop physical skills, explore nature, and learn important social skills through cooperative play.",
    "In our creative arts corner, children express themselves through painting, drawing, and crafts. Every masterpiece tells a unique story of their growing imagination.",
    "We celebrate various holidays and special occasions throughout the year, creating joyful memories and teaching children about different cultures and traditions.",
    "Birthday parties at our daycare are filled with fun, laughter, and excitement. We make each celebration special with themed decorations, games, and delicious treats."
  ];

  return (
    <div className="flex justify-center min-h-screen py-12 px-4 relative pt-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/388-3884330_crayons-transparent-border-crayon-border-clip-art-png 5.png")',
          backgroundPosition: 'center',
          backgroundSize: '101vw auto',
          backgroundRepeat: 'repeat',
          width: '100%',
          height: '100%'
        }}
      />
      <div className="w-7/8 relative">
        <h1 className="text-4xl font-bold mt-20 lg:mt-0 text-center mb-4 text-black">
          Our Gallery
        </h1>
        <p className="text-xl text-center mb-12 text-black  max-w-2xl mx-auto">
          Each image captures a special moment in our daycare. From joyful playtimes to creative activities, our gallery showcases the vibrant and nurturing environment we provide for your children.
        </p>
        <div className="mb-12">
          <ScrollCarousel
            images={images}
            titles={titles}
            descriptions={descriptions}
            size={`50vw`}
          />
        </div>
        <div>
          <div className="text-4xl flex justify-center items-center font-bold text-black"><p>Take a look at some of the thank you notes from our parents & kids:</p></div>
          <div className="flex flex-row flex-wrap justify-center items-center mt-8 gap-6 w-full">
            {cards.map((card, index) => (
              <div key={index} className="w-1/4">
                <motion.div
                  whileHover={{ scale: 2 }}
                  className="hover:cursor-pointer"
                >
                  <img
                    key={index}
                    src={`/${card.src}`}
                    alt={card.alt}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
