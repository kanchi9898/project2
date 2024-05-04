"use client"
import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation'


const Contact_page = () => {
  const route=useRouter()
  return (
    <div className='w-full h-max py-10 md:py-0 md:h-[100vh] flex flex-col items-center justify-center bg-[#151B28] text-fff gap-10'>
      <span onClick={()=>route.push("/")} className='absolute top-4 left-4 cursor-pointer'><MoveLeft size={30}/></span>
      <div className='flex flex-col items-center justify-center w-[95%] md:w-[90%] lg:w-[60%] gap-[8px]'>
        <span className='font-bold md:text-[2.2vw] lg:text-[1.5vw]'>Get In Touch With Us</span>
        <p className='text-lgray text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, </p>
      </div>

      <div className='bg-[#252D3C] w-[95%] md:w-[90%] lg:w-[60%] p-5 md:p-10 rounded-md flex flex-col gap-2'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

        <div className='flex flex-col gap-2'>
          <Label htmlFor="name">First Name</Label>
          <Input type="name" placeholder="Input" className='bg-[#2C3444] outline-none border-none'/>
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor="email">Email address</Label>
          <Input type="email" placeholder="Input" className='bg-[#2C3444] outline-none border-none'/>
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="phone" placeholder="+000" className='bg-[#2C3444] outline-none border-none'/>
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor="drop" className='text-fff '>Get In Touch With Us</Label>
          <Select>
            <SelectTrigger className="w-full">
            <SelectValue placeholder="Dropdown"/>
            </SelectTrigger>
            <SelectContent >
            <SelectGroup>
            <SelectLabel>Dropdown</SelectLabel>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        </div>

        <div className='mt-5 flex flex-col gap-2'>
        <Label htmlFor="message" className='text-fff'>Message</Label>
        <Textarea placeholder="Type your message here."  className='bg-[#2C3444] outline-none border-none'/>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <input type="checkbox" className='cursor-pointer'/>
            <span>I agree with Lookscout Privacy Policy</span>
          </div>
          <Button className='bg-blue text-fff hover:bg-blue w-full sm:w-max'>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Contact_page