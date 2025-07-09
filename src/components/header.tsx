"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [hiddenTabIndicator, setHiddenTabIndicator] = useState(true);

const setActiveTabColor = (index: number) => {
  return activeTabIndex === index ? "text-purple-500" : activeTabIndex === 3 ? "text-black lg:text-white" : "text-black";
};

const headerElements = ["Home", "Gallery", "About", "Contact"];
const headerStyles = ["text-decoration-none md:underline cursor underline-offset-6"];

useEffect(() => {
  const storedIndex = localStorage.getItem("activeTabIndex");
  if (storedIndex !== null && parseInt(storedIndex, 10) !== activeTabIndex) {
    setActiveTabIndex(parseInt(storedIndex, 10));
  }
}, []);

useEffect(() => {
  localStorage.setItem("activeTabIndex", String(activeTabIndex));
}, [activeTabIndex]);

    return (
      <div className="flex justify-between z-10 max-h-50 w-full absolute">
      <Link href="/home">
            <div className="h-35 md:h-40 lg:h-45 xl:h-55 2xl:h-60 w-35 md:w-40 lg:w-45 xl:w-55 2xl:w-60 relative" onClick={() => setActiveTabIndex(0)}>
              <Image
                src="/IMG_0059.PNG"
                className="absolute bg-gray-100/70 rounded-br-xl"
                width={300}
                height={300}
                alt="Fernando Family Daycare"
              />
            </div>
          </Link>
        {/* Burger/close icon always visible on mobile */}
        <div className="right-8 top-8 visible md:invisible absolute hover:cursor-pointer z-50" onClick={() => setHiddenTabIndicator(!hiddenTabIndicator)}>
          {hiddenTabIndicator ? (
            // Hamburger icon (3 lines)
            <>
              <div className="h-1.5 w-12 m-1.5 bg-black rounded-lg"></div>
              <div className="h-1.5 w-12 m-1.5 bg-black rounded-lg"></div>
              <div className="h-1.5 w-12 m-1.5 bg-black rounded-lg"></div>
            </>
          ) : (
            // Close icon (2 red lines)
            <>
              <div className="h-1.5 w-8 m-1.5 bg-red-600 rounded-lg absolute rotate-45"></div>
              <div className="h-1.5 w-8 m-1.5 bg-red-600 rounded-lg -rotate-45"></div>
            </>
          )}
        </div>
        {/* Animated sliding menu container */}
        <div
          className={`
            fixed top-0 right-0 h-full w-2/4 max-w-md z-40 bg-white shadow-lg
            transform transition-transform duration-300 ease-in-out
            ${hiddenTabIndicator ? 'translate-x-full' : 'translate-x-0'}
            md:static md:translate-x-0 md:shadow-none md:bg-transparent md:w-3/5
          `}
        >
        <div className={`flex flex-col items-center w-full md:w-2/4 pl-10 py-10 text-black h-auto md:p-0 md:bg-transparent`}>
          <div className={`inline-flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-10 lg:space-x-20 mr-20 md:mr-10 mt-10 md:ml-20 text-xl font-mono cursor-pointer`}>
            {headerElements.map((element, index) => (
              <Link href={`/${element.toLowerCase()}`} key={index}>
              <li
                onClick={() => {
                  setActiveTabIndex(index)
                  setHiddenTabIndicator(true)
                }}
                className={`${headerStyles} w-full list-none ${setActiveTabColor(index)}`}
              >
                {element}
              </li>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    )
}