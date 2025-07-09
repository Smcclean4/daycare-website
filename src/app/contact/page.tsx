import Image from "next/image"

export default function Contact() {
    return (
        <div className="h-screen flex flex-col lg:flex-row text-center justify-around items-center text-gray-900">
            <div className="flex justify-center items-center w-1/2 h-full bg-white">
                <Image src="/ChatGPT Image May 15, 2025, 10_38_24 PM.png" alt="Kids Runnings With A Kite" height="900" width="900" />
            </div>
            <div className="flex flex-col items-center justify-around text-center h-full w-full lg:w-auto bg-green-700/75 text-white italic text-xl">
                <div className="min-h-2/4 w-6/7 md:w-3/4">
                <h1 className="text-4xl font-bold underline underline-offset-6 m-6">Contact</h1>
            <ul className="text-left w-full h-auto flex flex-col justify-center">
            <li className="p-1 list-disc"><span className="underline text-bold text-xl underline-offset-2">Email:</span> lsferndo@sbcglobal.net</li>
            <li className="p-1 list-disc"><span className="underline text-bold text-xl underline-offset-2">Phone Number:</span> (310) 532-7529  /   (310) 293-3883</li>
            <li className="p-1 pt-4">I am a trained and qualified daycare owner/childcare provider and will treat your children with love and respect.</li>
            <li className="p-1 text-xl">- Shiromi Fernando</li>
            <li className="p-4 text-xl">Call For a Tour and Rates!</li>
            </ul>
                </div>
            </div>
        </div>
    )
}