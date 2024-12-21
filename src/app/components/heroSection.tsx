import React from 'react'
import { Button } from './ui/button'
import { BlueBox } from './ui/blueBox'

const HeroSection = () => {
  return (
    <div className='w-full bg-[#043873] py-16 md:py-24 lg:py-32'> 
      <div className='container lg:w-[80%] px-4 mx-auto '> 
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8'> 
          <div className='w-full md:w-1/2 space-y-8 md:space-y-12'> 
            <div className='space-y-4 md:space-y-6'>
              <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-white leading-tight md:leading-snug lg:leading-normal -tracking-1 md:-tracking-2'> {/* Adjusted font sizes and leading */}
                Get More Done with whitespace
              </h2>
              <p className='text-base md:text-lg text-white leading-relaxed md:leading-loose'> 
                Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
              </p>
            </div>
            <div>
              <Button width='w-auto md:w-48' height='h-12 md:h-16' btnText='Try Whitespace free' /> 
            </div>
          </div>
          <div className='w-full md:w-2/3'> 
            <BlueBox width='w-full 'height='h-[300px] xl:h-[400px]' /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection