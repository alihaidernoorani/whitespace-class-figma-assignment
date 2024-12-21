import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import workImage from '@/assets/Group 327.png';

const WorkTogetherSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container lg:w-[80%] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          {/* Left Side (Circles and Dots) */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
              {/* Dashed Circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 animate-pulse-slow"></div>
              <div className="absolute inset-1/4 rounded-full border-2 border-dashed border-blue-300 animate-pulse-medium"></div>

              {/* Center Icon */}
              <div className="absolute inset-1/3 bg-white rounded-lg flex items-center justify-center">
                <Image src={workImage} alt="Work Together Icon" width={50} height={50} />
              </div>

              {/* Dots (using absolute positioning) */}
              <div className="absolute top-[12%] left-[48%] w-8 h-8 rounded-full bg-[#00CA75] shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Green */}
              <div className="absolute top-[42%] left-[83%] w-8 h-8 rounded-full bg-[#FF5252] shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Red */}
              <div className="absolute bottom-[12%] left-[48%] w-8 h-8 rounded-full bg-[#FFD700] shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Yellow */}
              <div className="absolute top-[42%] left-[17%] w-8 h-8 rounded-full bg-blue-500 shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Blue */}
              <div className="absolute top-[7%] left-[78%] w-8 h-8 rounded-full bg-[#00A3FF] shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Light Blue */}
              <div className="absolute bottom-[7%] left-[22%] w-8 h-8 rounded-full bg-[#00A3FF] shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Light Blue */}
              <div className="absolute top-[72%] left-[22%] w-8 h-8 rounded-full bg-[#00CA75] shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Green */}
              <div className="absolute bottom-[37%] left-[78%] w-8 h-8 rounded-full bg-[#FFD700] shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Yellow */}
              <div className="absolute top-[27%] left-[2%] w-8 h-8 rounded-full bg-blue-500 shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Blue */}
              <div className="absolute bottom-[27%] left-[98%] w-8 h-8 rounded-full bg-blue-500 shadow-md -translate-x-1/2 -translate-y-1/2"></div> {/* Blue */}
            </div>
          </div>

          {/* Right Side (Text and Button) */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8 md:space-y-12">
            <div className='space-y-6'>
              <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold leading-tight text-[#212529]">Work together</h2>
              <p className="text-base md:text-lg leading-relaxed text-[#212529]">
                With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
              </p>
            </div>
            <Button width='w-auto md:w-48' height='h-12 md:h-16' btnText='Try it now' /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogetherSection;