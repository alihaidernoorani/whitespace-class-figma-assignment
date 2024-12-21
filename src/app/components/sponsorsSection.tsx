import React from 'react';
import Image from 'next/image';
import Apple from '@/assets/Apple.png';
import Microsoft from '@/assets/microsoft 1.png';
import Slack from '@/assets/Slack_Technologies_Logo 1.png';
import Google from '@/assets/Google.png';

const SponsorsSection = () => {
    return (
      <div className="flex flex-col justify-center lg:w-[80%] h-[538px] text-center mx-auto gap-20 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl tracking-tight font-bold">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <Image src={Apple} alt="Apple logo" height={55.47} />
          <Image src={Microsoft} alt="Microsoft logo" height={55.47} />
          <Image src={Slack} alt="Slack logo" height={55.47} />
          <Image src={Google} alt="Google logo" height={55.47} />
        </div>
      </div>
    );
  };
  
  export default SponsorsSection;