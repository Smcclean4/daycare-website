"use client";

import Image from "next/image";

interface ScrollCarouselProps {
  images: string | string[];
  titles?: string[];
  descriptions?: string[];
  size?: string;
}

export default function ScrollCarousel({
  images,
  titles = [],
  descriptions = [],
  size,
}: ScrollCarouselProps) {
  return (
    <div className=" w-full">
      <div className="w-full h-full overflow-y-auto">
        <div className="flex flex-wrap justify-around">
          {(Array.isArray(images) ? images : [images]).map((image, index) => (
            <div
              key={index}
              className={`lg:w-1/4 mx-16 flex flex-col justify-evenly items-center lg:hover:cursor-pointer ${index === 4 ? "lg:mt-40" : index % 2 !== 0 ? "lg:mt-20" : {}
                }`}
            >
              <div className="font-bold text-black mb-4 text-4xl text-center">
                <p>{titles[index]}</p>
              </div>
              <div className="relative h-[400px] w-full">
                <Image
                  src={`/${image}`}
                  alt={titles[index]}
                  fill
                  className="object-cover rounded-lg"
                  placeholder="blur"
                  blurDataURL={`/${image}`}
                  sizes={size}
                />
              </div>
              <div className="mt-4 text-black text-xl text-center bg-white/75 p-4 rounded-lg">
                <p>{descriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
