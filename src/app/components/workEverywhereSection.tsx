import React from 'react';
import { Button } from './ui/button';

const WorkEverywhereSection = () => {
  return (
    <div className="bg-[#043873] text-white h-[574px] flex justify-center items-center">
      <div className="flex flex-col items-center lg:w-[80%] text-center mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl -tracking-[2%] font-bold">
          Your work, everywhere you are
        </h2>
        <p className="text-normal md:text-lg font-normal -tracking-[2%] leading-7">
          Access your notes from your computer, phone, or tablet by synchronising with various services, including whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
        </p>
        <Button btnText="Try Taskey" width="w-auto md:w-48" height="h-12 md:h-16" />
      </div>
    </div>
  );
};

export default WorkEverywhereSection;
