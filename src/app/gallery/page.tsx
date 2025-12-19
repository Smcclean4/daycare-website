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
  const [outdoorDeck, setOutdoorDeck] = useState<string[]>([]);
  const [artsAndCraftsDeck, setArtsAndCraftsDeck] = useState<string[]>([]);
  const [holidaysAndCelebrationsDeck, setHolidaysAndCelebrationsDeck] = useState<string[]>([]);
  const [birthdayPartiesDeck, setBirthdayPartiesDeck] = useState<string[]>([]);

  const images = [
    ["IMG_1377.jpg", "IMG_1378.jpg", "IMG_1379.jpg", "IMG_6839.jpg", "family_image_7.png"],
    ["IMG_6904.jpeg", "IMG_6838.jpg", "IMG_6889.png", "IMG_6879.PNG", "IMG_6878.PNG", "IMG_6876.PNG", "IMG_6877.PNG", "IMG_6881.PNG", "IMG_6865.jpg"],
    ["IMG_6884.PNG", "IMG_6885.PNG", "IMG_6886.PNG", "IMG_6887.PNG", "IMG_6888.PNG", "IMG_6893.PNG", "IMG_6880.JPG", "IMG_8257.JPG", "IMG_4244.jpeg", "IMG_1034.jpeg", "IMG_2164.jpeg", "IMG_4535.png", "IMG_4544.jpg", "IMG_4549.jpg", "IMG_5325.jpg", "IMG_4562.jpeg", "IMG_5493.jpg", "IMG_5503.jpg", "IMG_5528.jpg", "IMG_5412.jpg"],
    ["IMG_6083.jpg", "IMG_0789.jpeg", "IMG_4915.png"]
  ];

  const titles = [
    ["Outdoor Play"],
    ["Arts and Crafts"],
    ["Holidays and Celebrations"],
    ["Birthday Parties"]
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
    ["Our spacious outdoor play area is where imaginations run wild! Children develop physical skills, explore nature, and learn important social skills through cooperative play."],
    ["In our creative arts corner, children express themselves through painting, drawing, and crafts. Every masterpiece tells a unique story of their growing imagination."],
    ["We celebrate various holidays and special occasions throughout the year, creating joyful memories and teaching children about different cultures and traditions."],
    ["Birthday parties at our daycare are filled with fun, laughter, and excitement. We make each celebration special with themed decorations, games, and delicious treats."]
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

  const nextImage = (deck: string[], setDeck: React.Dispatch<React.SetStateAction<string[]>>) => {
    const firstInLine = deck.shift();
    if (firstInLine) {
      setDeck([...deck, firstInLine]);
    } else {
      return;
    }
  }

  const prevImage = (deck: string[], setDeck: React.Dispatch<React.SetStateAction<string[]>>) => {
    const lastInLine = deck.pop();
    if (lastInLine) {
      setDeck([lastInLine, ...deck])
    } else {
      return;
    }
  }

  useEffect(() => {
    setCardDeck(cards);
    setOutdoorDeck(images[0] as string[]);
    setArtsAndCraftsDeck(images[1] as string[]);
    setHolidaysAndCelebrationsDeck(images[2] as string[]);
    setBirthdayPartiesDeck(images[3] as string[]);
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
      <div className=" flex flex-col items-center justify-center w-7/8 relative">
        <div className="flex flex-col items-center justify-center text-2xl text-center mt-12 text-black min-h-[300px] max-h-[350px] max-w-3xl mx-auto">
          <p>
            Each image captures a special moment in our daycare. From joyful playtimes to creative activities, our gallery showcases the vibrant and nurturing environment we provide for your children.
          </p>
        </div>
        <div className="flex flex-row justify-around min-h-[1500px] flex-wrap">
          <ScrollCarousel
            images={outdoorDeck[0]}
            titles={titles[0]}
            descriptions={descriptions[0]}
            size={`50vw`}
            shift={() => nextImage(outdoorDeck, setOutdoorDeck)}
            prev={() => prevImage(outdoorDeck, setOutdoorDeck)}
          />
          <ScrollCarousel
            images={artsAndCraftsDeck[0]}
            titles={titles[1]}
            descriptions={descriptions[1]}
            size={`50vw`}
            shift={() => nextImage(artsAndCraftsDeck, setArtsAndCraftsDeck)}
            prev={() => prevImage(artsAndCraftsDeck, setArtsAndCraftsDeck)}
          />
          <ScrollCarousel
            images={holidaysAndCelebrationsDeck[0]}
            titles={titles[2]}
            descriptions={descriptions[2]}
            size={`50vw`}
            shift={() => nextImage(holidaysAndCelebrationsDeck, setHolidaysAndCelebrationsDeck)}
            prev={() => prevImage(holidaysAndCelebrationsDeck, setHolidaysAndCelebrationsDeck)}
          />
          <ScrollCarousel
            images={birthdayPartiesDeck[0]}
            titles={titles[3]}
            descriptions={descriptions[3]}
            size={`50vw`}
            shift={() => nextImage(birthdayPartiesDeck, setBirthdayPartiesDeck)}
            prev={() => prevImage(birthdayPartiesDeck, setBirthdayPartiesDeck)}
          />
        </div>
        <div className=" flex flex-col text-center items-center justify-around mb-4 h-screen min-h-[1000px]">
          <div className="text-5xl flex justify-center items-center font-bold text-black"><p>Swipe through some thank you <span className="italic text-yellow-400 drop-shadow-4xl">Notes</span> from our parents & kids:</p></div>
          <div ref={dragContainerRef} className="relative flex-col flex items-center justify-center flex-wrap h-3/4 w-3/4">
            {cardDeck.map((card, index) => (
              <motion.div
                drag
                whileDrag={{ scale: 1.5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', rotate: (Math.random() * 20) - 10 }}
                key={index}
                initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)', rotate: (Math.round(Math.random()) * 20) - 10 }}
                onDragEnd={() => { endOfLine() }}
                style={{ zIndex: cardDeck.length - index }}
                className={`hover:cursor-grab active:cursor-grabbing w-auto h-auto flex flex-col items-center justify-center list-none absolute`}
                dragConstraints={dragContainerRef}
                dragElastic={0.2}
                dragSnapToOrigin={true}
              >
                <Image
                  src={`/${card.src}`}
                  alt={`${card.alt}`}
                  width={500}
                  height={500}
                  className="rounded-2xl"
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
