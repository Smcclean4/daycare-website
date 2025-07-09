'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [homeImageIndex, setHomeImageIndex] = useState(0);

  const homeScrollImage = ["/image.png", "/image2.png", "/image3.jpg", "/image4.png"];

  const delay = 7000;

  useEffect(() => {
    const rotateImages = () => {
      setHomeImageIndex((prevImageIndex) => (prevImageIndex + 1) % homeScrollImage.length)
    }

    const imageTimeoutId = setTimeout(rotateImages, delay);

    return () => clearTimeout(imageTimeoutId);
  }, [homeImageIndex, homeScrollImage.length]);

  return (
    <div className="flex justify-center items-center -z-40 relative h-screen pt-40">
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-200/75 h-auto lg:4/5 rounded-lg z-50 w-7/8 text-black p-10">
        <div className="flex flex-col w-4/5 md:w-3/5 lg:w-3/5 xl:4/5 text-center m-2 lg:m-10">
          <h1 className="text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-mono lg:m-4"><span className="text-pink-500 underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Play</span>, <span className="text-yellow-500 underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Learn</span> and <span className="text-blue-400 underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Grow</span> Together!</h1>
          <h2 className="text-lg xl:text-2xl lg:text-xl font-mono lg:m-4">Let your child grow in <span className="text-pink-500 underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">love</span>, <span className="text-yellow-500 underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">confidence</span>, and <span className="text-blue-400 underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">independence</span>.</h2>
        </div>
        <div className="flex flex-col w-full lg:w-3/4">
          <h3 className="text-sm lg:text-xl xl:text-xl 2xl:text-2xl font-mono">Welcome to <span className="text-purple-500 underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Fernando</span> <span className="text-purple-500 underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Family</span> <span className="text-purple-500 underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Daycare</span>! Here, we offer more than just babysitting—we provide a loving, supportive family environment where your child’s emotional and developmental needs are met. With activities like music, outdoor play, arts and crafts, and more, your child will receive the care and attention they deserve. You can have peace of mind knowing they’re in a safe, nurturing home, treated with respect and love. Thank you for visiting, and I look forward to making your child’s early years filled with joy and growth.</h3>
        </div>
      </div>
      <Image src={`${homeScrollImage[homeImageIndex]}`} className="object-cover" layout="fill" alt="Fernando Family Daycare" />
    </div>
  );
}
