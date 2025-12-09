"use client";

import Image from "next/image";

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

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center w-full relative h-screen">
        {/* in progress */}
        <button onClick={() => prev && prev()} className="border-2 z-10 text-white border-red-600 bg-red-500 hover:bg-red-700 hover:cursor-pointer font-bold py-2 px-4 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex w-2/4 items-center flex-wrap h-full justify-center">
          {(Array.isArray(images) ? images : [images]).map((image, index) => (
            <div
              key={index}
              className='flex w-3/4 flex-col items-center absolute'
            >
              <div className="font-bold z-10 text-black text-4xl text-center">
                <p>{titles[index]}</p>
              </div>
              <div className="flex relative items-center h-[400px] w-[400px] rounded-lg shadow-lg my-10">
                <Image
                  src={`/${image}`}
                  alt={`${titles[index]}`}
                  fill
                  className="object-cover rounded-lg"
                  placeholder="blur"
                  blurDataURL={`/${image}`}
                  sizes={size}
                />
              </div>
              <div className="mt-4 z-10 text-black text-xl text-center">
                <p>{descriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
        {/* in progress */}
        <button onClick={() => shift && shift()} className="border-blue-600 bg-blue-500 border-2 z-10 text-white hover:bg-blue-700 hover:cursor-pointer font-bold py-2 px-4 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
