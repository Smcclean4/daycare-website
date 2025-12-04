"use client";

import ScrollCarousel from "../../components/carousel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import * as motion from "motion/react-client"

interface Card {
  src: string;
  alt: string;
}

export default function Gallery() {
  const [cardDeck, setCardDeck] = useState<Card[]>([]);

  const images = [
    ["family image 1.jpeg", "IMG_1377.jpg", "IMG_1378.jpg", "IMG_1379.jpg", "IMG_6839.jpg"],
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

  const dragContainerRef = useRef<HTMLDivElement>(null);

  const endOfLine = () => {
    const firstInLine = cardDeck.shift();
    if (firstInLine) {
      setCardDeck([...cardDeck, firstInLine]);
    } else {
      return;
    }
  }

  useEffect(() => {
    setCardDeck(cards);
  }, []);

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
        <p className="text-2xl text-center my-12 text-black  max-w-2xl mx-auto">
          Each image captures a special moment in our daycare. From joyful playtimes to creative activities, our gallery showcases the vibrant and nurturing environment we provide for your children.
        </p>
        <div className="mb-12">
          {/* create a map within a map of images? and make it clickable.. look into this? */}
          <ScrollCarousel
            images={images[0]}
            titles={titles}
            descriptions={descriptions}
            size={`50vw`}
          />
        </div>
        <div className="mb-4 flex flex-col items-center">
          <div className="text-5xl flex justify-center items-center font-bold text-black"><p>Swipe through some thank you <span className="italic text-yellow-400 drop-shadow-4xl">Notes</span> from our parents & kids:</p></div>
          <div ref={dragContainerRef} className="flex flex-col flex-wrap justify-center h-screen min-h-[1050px] items-center w-3/4">
            {cardDeck.map((card, index) => (
              <motion.div
                drag
                whileDrag={{ scale: 1.5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', rotate: (Math.random() * 20) - 10 }}
                key={index}
                initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)', rotate: (Math.round(Math.random()) * 20) - 10 }}
                onDragEnd={() => { endOfLine() }}
                style={{ zIndex: cardDeck.length - index }}
                className={`hover:cursor-grab active:cursor-grabbing flex flex-col items-center justify-center list-none absolute`}
                dragConstraints={dragContainerRef}
                dragElastic={0.2}
                dragSnapToOrigin={true}
              >
                <Image
                  src={`/${card.src}`}
                  alt={`${card.alt}`}
                  height={500}
                  width={500}
                  className="object-cover h-auto w-auto rounded-2xl"
                  style={{ touchAction: 'none' }}
                  placeholder="blur"
                  blurDataURL={`/${card.src}`}
                  draggable={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
