import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-8">
      <div className="container lg:w-[80%] h-[461px] mx-auto items-center px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <div>
            <div className="mb-4">
              <Image src={Logo} alt="Logo" />
            </div>
            <p className="text-lg">
              whitespace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h5 className="font-semibold mb-3">Product</h5>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Overview</Link></li>
              <li><Link href="#" className="hover:underline">Pricing</Link></li>
              <li><Link href="#" className="hover:underline">Customer stories</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h5 className="font-semibold mb-3">Resources</h5>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Blog</Link></li>
              <li><Link href="#" className="hover:underline">Guides & tutorials</Link></li>
              <li><Link href="#" className="hover:underline">Help center</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">About us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Media kit</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-bg-[#043873] pt-4">
        <p>&copy; 2021 Whitepace LLC.</p>
      </div>
    </footer>
  );
};

export default Footer;