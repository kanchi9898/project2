import React from 'react'
import Container from './Container'
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
    <div className="h-max hidden md:block">
    <div className="h-max grid md:grid-cols-3 lg:grid-cols-5 justify-between my-20 gap-10 lg:gap-20">
      <div className="flex flex-col gap-2">
        <img src="/logo/Lookscout.png" alt="logo" className="w-[160px] h-[30px] mb-3" />
        <p className="text-lgray">Generate outside the box thinking with the possibility to targtet the low.</p>
        <div className="gap-4 hidden lg:flex">
          <FaFacebook size={30} />
          <FaGoogle size={30} />
          <FaApple size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className="lg:hidden"></div>

      <div className=" flex flex-col gap-5">
        <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Products</h1>

        <ul className="text-lgray flex flex-col gap-2 font-medium">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Solutions</li>
          <li className="cursor-pointer">Integrations</li>
          <li className="cursor-pointer">Enterprise</li>
        </ul>
      </div>

      <div className=" flex flex-col gap-5">
        <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Resources</h1>

        <ul className="text-lgray flex flex-col gap-2 font-medium">
          <li className="cursor-pointer">Partners</li>
          <li className="cursor-pointer">Community</li>
          <li className="cursor-pointer">Developers</li>
          <li className="cursor-pointer">App</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
      </div>

      <div className=" flex flex-col gap-5">
        <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Why Choose Us?</h1>

        <ul className="text-lgray flex flex-col gap-2 font-medium">
          <li className="cursor-pointer">Channels</li>
          <li className="cursor-pointer">Scale</li>
          <li className="cursor-pointer">Watch the Demo</li>
          <li className="cursor-pointer">Our Competition</li>
        </ul>
      </div>

      <div className=" flex flex-col gap-5">
        <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Company</h1>

        <ul className="text-lgray flex flex-col gap-2 font-medium">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">News</li>
          <li className="cursor-pointer">Leadership</li>
          <li className="cursor-pointer">Media Kit</li>
        </ul>
      </div>
    </div>

     <div className="w-full items-center flex flex-col justify-center mb-20 gap-5">
      <span className="bg-zinc-100 rounded-[50%] p-2">
      <img src="/logo/Icon.png" alt="icon" />
      </span>
      <div className="flex items-center justify-between lg:justify-center w-full">
      <p className="text-lgray">© 2023 Lookscout. All Rights Reserved.</p>
      <div className="gap-4 flex lg:hidden">
          <FaFacebook size={30} />
          <FaGoogle size={30} />
          <FaApple size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
     </div>
    </div>

    <div className="md:hidden py-5">
    <div className="flex flex-col gap-3">
        <img src="/logo/Lookscout.png" alt="logo" className="w-[160px] h-[30px] mb-3" />
        <p className="text-lgray">Generate outside the box thinking with the possibility to targtet the low.</p>
        <div className="flex items-center justify-around">
          <FaFacebook size={30} />
          <FaGoogle size={30} />
          <FaApple size={30} />
          <FaInstagram size={30} />
        </div>
      </div>

      <div className="h-max grid grid-cols-2 justify-between my-10 gap-5">
      

      <div className=" flex flex-col gap-5">
        <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Products</h1>

        <ul className="text-lgray flex flex-col gap-2 font-medium">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Solutions</li>
          <li className="cursor-pointer">Integrations</li>
          <li className="cursor-pointer">Enterprise</li>
        </ul>
      </div>

      <div className=" flex flex-col gap-5">
        <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Resources</h1>

        <ul className="text-lgray flex flex-col gap-2 font-medium">
          <li className="cursor-pointer">Partners</li>
          <li className="cursor-pointer">Community</li>
          <li className="cursor-pointer">Developers</li>
          <li className="cursor-pointer">App</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
      </div>

      <div className=" flex flex-col gap-5">
        <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Why Choose Us?</h1>

        <ul className="text-lgray flex flex-col gap-2 font-medium">
          <li className="cursor-pointer">Channels</li>
          <li className="cursor-pointer">Scale</li>
          <li className="cursor-pointer">Watch the Demo</li>
          <li className="cursor-pointer">Our Competition</li>
        </ul>
      </div>

      <div className=" flex flex-col gap-5">
        <h1 className="text-dblue font-semibold w-full lg:text-[1.2vw]">Company</h1>

        <ul className="text-lgray flex flex-col gap-2 font-medium">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">News</li>
          <li className="cursor-pointer">Leadership</li>
          <li className="cursor-pointer">Media Kit</li>
        </ul>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center w-full">
    <span className="bg-zinc-100 rounded-[50%] p-2">
      <img src="/logo/Icon.png" alt="icon" />
      </span>
      <p className="text-lgray text-center">© 2023 Lookscout. All Rights Reserved.</p>
      </div>
    </div>

  </Container>
  )
}

export default Footer