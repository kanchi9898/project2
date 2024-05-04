"use client"
import React from 'react'
import Container from './Container'
import { ChevronDown } from 'lucide-react';
import { Button } from './button';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from './label';

const Navbar = () => {
  const route = useRouter()
  return (
    <div className='bg-[#F8F9FB]'>
      <Container>
        <div className='flex items-center justify-between py-3 md:py-4 '>
          <div className='flex gap-[64px]'>
            <div className='font-bold md:text-[3vw] lg:text-[1.5vw] text-[#2E343F]'>
              <img src="/logo/Logo.png" alt="logo" />
            </div>
            <ul className=' items-center gap-[32px] hidden lg:flex font-semibold'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Our Products</li>
              <li className='flex items-center gap-2 cursor-pointer'>Resources <ChevronDown size={20} /></li>
              <li onClick={() => route.push("/contact")} className='cursor-pointer'>Contacts</li>
            </ul>
          </div>
          <div className='hidden lg:flex gap-[24px]'>
            <Button className='bg-transparent text-blue hover:bg-white font-semibold'>Sign Up</Button>
            <Button className='bg-blue text-fff hover:bg-blue font-semibold'>Log In</Button>
          </div>
          <div className='lg:hidden cursor-pointer'>

            <Sheet>
              <SheetTrigger asChild>
                <Menu size={30} className='cursor-pointer'/>
              </SheetTrigger>
              <SheetContent className='text-black'>
              <ul className='gap-5 flex flex-col font-semibold lg:hidden'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Our Products</li>
              <li className='flex items-center gap-2 cursor-pointer'>Resources <ChevronDown size={20} /></li>
              <li onClick={() => route.push("/contact")} className='cursor-pointer'>Contacts</li>
            </ul>
            <div className='flex gap-[24px] mt-5'>
            <Button className='bg-transparent text-blue hover:bg-white font-semibold bg-slate-200'>Sign Up</Button>
            <Button className='bg-blue text-fff hover:bg-blue font-semibold'>Log In</Button>
          </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar