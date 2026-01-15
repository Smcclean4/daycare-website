"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ScrollCarouselProps {
  images: string | string[];
  titles?: string[];
  descriptions?: string[];
  size?: string;
  shift?: () => void;
  prev?: () => void;
}

export default function ScrollCarousel({
  images,
  titles = [],
  descriptions = [],
  size,
  shift,
  prev
}: ScrollCarouselProps) {
  const imageArray = Array.isArray(images) ? images : [images];
  const currentImage = imageArray[0];
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center relative m-0 min-h-[700px] h-auto py-8">
      <div className="flex w-full max-w-[700px] items-center flex-wrap h-auto justify-center">
        <div className='flex min-h-[600px] h-auto w-full flex-col items-center relative'>
          <div className="font-bold z-10 text-black text-3xl md:text-4xl text-center mb-4 px-2">
            <p>{titles[0]}</p>
          </div>
          <div className="flex relative items-center h-[400px] w-[400px] md:h-[550px] md:w-[550px] rounded-lg shadow-lg my-4">
            <Image
              src={`/${currentImage}`}
              alt={`${titles[0] || 'Gallery image'}`}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 400px, 550px"
              priority={isFirstLoad}
              loading={isFirstLoad ? undefined : "lazy"}
              quality={85}
            />
          </div>
          <div className="flex gap-2">
            <button onClick={() => prev && prev()} className="border-2 z-10 text-white border-red-600 bg-red-500 hover:bg-red-700 hover:cursor-pointer font-bold p-3 md:p-4 rounded-full">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => shift && shift()} className="border-blue-600 bg-blue-500 border-2 z-10 text-white hover:bg-blue-700 hover:cursor-pointer font-bold p-3 md:p-4 rounded-full">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="mt-4 z-10 text-black text-base md:text-xl text-center bg-gray-100/70 rounded-md p-2 mx-2">
            <p>{descriptions[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
