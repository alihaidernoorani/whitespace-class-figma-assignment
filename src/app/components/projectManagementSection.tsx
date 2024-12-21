import React from 'react';
import { BlueBox } from './ui/blueBox';
import { Button } from './ui/button';
import Image from 'next/image';

export const ProjectManagementSection = () => {
  return (
    <div className='lg:w-[80%] py-16 md:py-24 lg:py-32 mx-auto'>
      <div className='container mx-auto px-4'> 
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 lg:gap-24'> 
          <div className='w-full md:w-1/2 space-y-8 md:space-y-12'> 
            <div className='space-y-4 md:space-y-6'>
              <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#212529] leading-tight md:leading-snug lg:leading-normal'> 
                Project Management
              </h2>
              <p className='text-base md:text-lg text-[#212529] leading-relaxed md:leading-loose'> 
                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
              </p>
            </div>
            <div>
            <Button width='w-auto md:w-48' height='h-12 md:h-16' btnText='Get Started' /> 
            </div>
          </div>
          <div className='w-full md:w-1/2'> 
            <BlueBox width='w-full' height='h-[347px] xl:h-[547px]' /> 
          </div>
        </div>
      </div>
    </div>
  )
}