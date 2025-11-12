'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [tabIndex, setTabIndex] = useState(0)

  const tabsContent = [
    <div key={tabIndex} className="text-white p-4 z-10 flex justify-between flex-col">
      <h1 className="underline font-mono underline-offset-4 text-2xl font-bold mb-6">
        Serving Children 4 wks – 8 yrs
      </h1>
      <ul className="space-y-4 list-disc pl-6">
        <li>Ages: 1-12 Months</li>
        <li>Toddlers</li>
        <li>Early Preschool - Preschool</li>
        <li>Before / Afterschool</li>
      </ul>
    </div>,
    <div key={tabIndex} className="text-white p-4 z-10 flex justify-around flex-col">
      <h1 className="underline font-mono underline-offset-4 text-2xl font-bold mb-6">
        Hours of Operation
      </h1>
      <ul className="space-y-4 list-disc pl-6">
        <li>Monday - Friday: 7:00 AM - 6:00 PM</li>
        <li>Saturday: Closed</li>
        <li>Sunday: Closed</li>
      </ul>
    </div>,
    <div key={tabIndex} className="text-white p-4 z-10 flex justify-around flex-col">
      <h1 className="underline font-mono underline-offset-4 text-2xl font-bold mb-6">
        We Offer
      </h1>
      <ul className="space-y-4 list-disc pl-6">
        <li>A Clean, Safe Environment</li>
        <li>Interactive Learning Through Music, Dancing and Singing</li>
        <li>A stimulating curriculum</li>
        <li>Creative Activities, Arts, Crafts, and Educational Games</li>
        <li>Morning and Afternoon Snacks Provided</li>
        <li>Indoor/outdoor Play Space</li>
        <li>A qualified, caring staff</li>
      </ul>
    </div>,
    <div key={tabIndex} className="text-white p-4 z-10 flex justify-around flex-col">
      <h1 className="underline font-mono underline-offset-4 text-2xl font-bold mb-6">
        Benefits
      </h1>
      <ul className="space-y-4 list-disc pl-6">
        <li>Full or Part time</li>
        <li>Daily Activities</li>
        <li>Convenient Location</li>
        <li>Great References</li>
      </ul>
    </div>,
    <div key={tabIndex} className="text-white p-4 z-10 flex justify-around flex-col">
      <h1 className="underline font-mono underline-offset-4 text-2xl font-bold mb-6">
        Qualifications
      </h1>
      <ul className="space-y-4 list-disc pl-6">
        <li>State Licensed</li>
        <li>CPR & First Aid Certified</li>
        <li>Loving Mother of Two</li>
      </ul>
    </div>
  ]

  const tabsHeader = ["Serving", "Hours", "Offers", "Benefits", "Credentials"]

  const tabs = [<svg key={tabIndex} className="w-6 h-6 text-purple-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
  </svg>, <svg key={tabIndex} className="w-6 h-6 text-purple-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
  </svg>, <svg key={tabIndex} className="w-6 h-6 text-purple-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
  </svg>, <svg key={tabIndex} className="w-6 h-6 text-purple-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
    <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
  </svg>, <svg key={tabIndex} className="w-6 h-6 text-purple-800 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
  </svg>]

  const setActiveTabColor = (index: number) => {
    return tabIndex === index ? "bg-purple-300 -mb-0.5" : "bg-purple-400";
  };

  useEffect(() => {
    setTabIndex(tabIndex)
  }, [tabIndex])

  return (
    <div className="h-auto min-h-275 lg:h-screen w-full flex justify-between flex-row lg:flex-col flex-wrap items-center bg-gradient-to-b from-purple-100/75 to-purple-300/75 pb-12 relative pt-20">
      <div className="w-full lg:w-2/4 text-center m-10 lg:m-0">
        <p className="text-4xl font-bold text-black my-4">About Us</p>
        <p className="text-lg px-4 text-black">
          Welcome to our nurturing daycare center, where we create a warm and stimulating environment for your child&apos;s growth.
          Our experienced team is committed to providing exceptional care while fostering creativity, learning, and social development
          in a safe and loving atmosphere.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center h-3/4 w-full xl:w-4/5">
        <div className="flex flex-row lg:flex-col text-center justify-between items-center relative h-auto w-3/4  lg:w-1/2 bg-purple-300 border-t-1 border-r-1 border-white rounded-xl shadow-lg">
          <p className="md:m-0 text-2xl md:text-3xl lg:text-4xl text-purple-800 p-6" style={{ fontFamily: "Edu NSW ACT Cursive" }}>Hi, my name is Shiromi!</p>
          <Image
            src="/IMG_9968.jpeg"
            alt="Profile Photo"
            className="my-10 md:my-20 lg:m-10 xl:m-10 object-cover aspect-square border-l-2 border-b-2 rounded-sm border-white/80"
            width="300"
            height="100"
          />
        </div>
        <div className="flex flex-wrap justify-around items-center w-full md:w-4/5 align-center text-lg">
          <div className="w-4/5">
            <div className="flex flex-row justify-around items-center">
              {tabs.map((tab, index) => {
                return (
                  <div key={index} onClick={() => setTabIndex(index)} className={`text-white border-white rounded-t-2xl border-t-1 border-r-1 font-serif w-full p-2 flex justify-around hover:cursor-pointer ${setActiveTabColor(index)}`}>
                    <p>{tab}</p>
                    <p className="hidden xl:block">{tabsHeader[index]}</p>
                  </div>
                )
              })}
            </div>
            <div className="bg-purple-300 min-h-96 rounded-b-lg border-t-1 xl:min-w-132 shadow-lg border-white border-r-1">
              {tabsContent[tabIndex]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
