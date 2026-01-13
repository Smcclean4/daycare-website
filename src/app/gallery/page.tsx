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
  const [learningTimeDeck, setLearningTimeDeck] = useState<string[]>([]);

  const images = [
    ["IMG_1377.jpg", "IMG_1379.jpg","IMG_3788.jpg", "IMG_6839.jpg", "IMG_3920.jpg", "IMG_4036.jpg", "IMG_4391.jpg", "IMG_6950.jpg", "IMG_0219.jpg", "IMG_3505.jpg", "IMG_6929.jpg", "IMG_4055.jpg", "IMG_8440.jpg", "IMG_7013.jpg"],
    ["IMG_6880.JPG", "IMG_6893.png", "IMG_6888.png","IMG_6884.PNG", "IMG_6885.PNG", "IMG_6886.PNG", "IMG_6904.jpeg", "IMG_6838.jpg", "IMG_6889.png", "IMG_6879.PNG", "IMG_6878.PNG", "IMG_6876.PNG", "IMG_6877.PNG", "IMG_6881.PNG", "IMG_6865.jpg", "IMG_9894_Facetune_17-07-2022-17-10-36.jpg", "IMG_1333.jpg", "IMG_1347.jpg", "IMG_6887.png"],
    ["IMG_8257.jpg", "IMG_4244.JPEG", "IMG_1034.jpeg", "IMG_2164.jpeg", "IMG_4535.png", "IMG_4544.jpg", "IMG_4549.jpg", "IMG_4562.jpeg", "IMG_5493.jpg", "IMG_5503.jpg", "IMG_5528.jpg", "IMG_5412.jpg", "IMG_5986.jpg", "IMG_1544.jpg", "IMG_0987.jpg", "IMG_0998.jpg", "IMG_1014.jpg", "IMG_1333.jpg", "IMG_1347.jpg", "IMG_1353.jpeg", "IMG_1369.jpeg", "IMG_1532.jpeg", "IMG_1540.jpeg", "IMG_3986.jpeg", "IMG_3989.jpeg", "IMG_7571.jpeg", "IMG_7660.jpeg", "IMG_7668.jpeg", "IMG_7684.jpeg", "IMG_7685.jpeg", "IMG_7689 2.jpeg", "IMG_7677.jpeg", "IMG_7710.jpeg", "IMG_8353.jpeg", "IMG_8997.jpeg", "IMG_5326.jpg"],
    ["IMG_6083.jpg", "IMG_0789.jpeg", "IMG_4915.png", "IMG_9356.jpg", "IMG_1821.jpg", "IMG_5664.jpg", "IMG_5717.jpeg", "IMG_5733.jpeg", "IMG_4937.jpeg", "IMG_4904.jpeg", "IMG_4923.jpeg", "IMG_4899.jpeg", "IMG_3898.jpeg", "IMG_3912.jpeg", "IMG_3907.jpeg", "IMG_2771.jpg", "IMG_0775.jpeg", "IMG_0813.jpeg", "IMG_0810.jpeg", "IMG_6132.JPG", "IMG_4948.jpg", "IMG_4946.PNG"],
    ["IMG_1378.jpg", "IMG_8273.jpg", "IMG_6852.jpg"]
  ];

  const titles = [
    ["Outdoor Play"],
    ["Arts and Crafts"],
    ["Holidays and Celebrations"],
    ["Birthday Parties"],
    ["Learning Time"]
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
    ["Birthday parties at our daycare are filled with fun, laughter, and excitement. We make each celebration special with themed decorations, games, and delicious treats."],
    ["Learning time is a special time for children to learn new things and grow. We provide a fun and engaging learning environment that emphasizes the importance of reading and writing."]
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
    setLearningTimeDeck(images[4] as string[]);
  }, []);

  return (
    <div className="flex justify-center min-h-screen py-12 px-4 relative pt-20 overflow-x-hidden">
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
      <div className="flex flex-col items-center justify-center w-full relative gap-8 pb-8">
        <div className="flex flex-col items-center justify-center text-2xl text-center mt-12 text-black py-8 max-w-3xl mx-auto px-4">
          <p>
            Each image captures a special moment in our daycare. From joyful playtimes to creative activities, our gallery showcases the vibrant and nurturing environment we provide for your children.
          </p>
        </div>
        <div className="flex flex-row h-auto justify-around flex-wrap gap-8 w-full px-4">
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
          <ScrollCarousel
            images={learningTimeDeck[0]}
            titles={titles[4]}
            descriptions={descriptions[4]}
            size={`50vw`}
            shift={() => nextImage(learningTimeDeck, setLearningTimeDeck)}
            prev={() => prevImage(learningTimeDeck, setLearningTimeDeck)}
          />
        </div>
        <div className="flex flex-col text-center items-center justify-center mb-4 py-8 min-h-[800px] md:min-h-[900px] lg:min-h-[1200px] xl:min-h-[1300px] w-full px-4">
          <div className="text-3xl sm:text-4xl md:text-5xl flex justify-center items-center font-bold text-black mb-12 md:mb-16 px-4"><p>Swipe through some thank you <span className="italic text-yellow-400 drop-shadow-4xl">Notes</span> from our parents & kids:</p></div>
          <div ref={dragContainerRef} className="relative flex-col flex items-center justify-center flex-wrap h-[600px] md:h-[800px] lg:h-[1000px] xl:h-[1100px] w-full max-w-7xl xl:max-w-[90rem] mt-8 pt-12">
            {cardDeck.map((card, index) => (
              <motion.div
                drag
                whileDrag={{ scale: 1.3, rotate: (Math.random() * 20) - 10, outline: 'none' }}
                key={index}
                initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.5)', rotate: (Math.round(Math.random()) * 20) - 10 }}
                onDragEnd={() => { endOfLine() }}
                style={{ zIndex: cardDeck.length - index, outline: 'none' }}
                className={`hover:cursor-grab active:cursor-grabbing w-auto h-auto flex flex-col items-center justify-center list-none absolute outline-none focus:outline-none`}
                dragConstraints={dragContainerRef}
                dragElastic={0.2}
                dragSnapToOrigin={true}
              >
                <Image
                  src={`/${card.src}`}
                  alt={`${card.alt}`}
                  width={500}
                  height={500}
                  className="rounded-2xl w-[450px] h-[450px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] object-contain"
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
