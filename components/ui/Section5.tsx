import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import Container from './Container'

const Section5 = () => {
  return (
    <Container>
  <div className="w-full flex items-center justify-center flex-col">
  <div className="flex flex-col gap-3 items-center justify-center p-0 sm:p-5 h-full w-full md:w-[70%]">
          <h1 className="text-dblue text-[21px] md:text-[32px] font-bold md:font-semibold">Frequently asked questions</h1>
          <p className="text-lgray text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
        </div>
        <div className="w-full rounded-[5px] border-r-[1px] border-l-[1px] border-t-[1px] my-10">

          <section className="flex items-center justify-between p-6 border-b-[1px]">
            <div className="flex gap-2 flex-col">
              <h1 className="font-medium">Authentification Issues</h1>
              <p>Porttitor nec est nisi, id nunc.</p>
            </div>
            <Button className="bg-zinc-100 text-blue hover:bg-zinc-200 font-semibold"> New</Button>
          </section>

          <section className="flex items-center justify-between p-6 border-b-[1px]">
              <h1 className="font-medium">Lorem ipsum dolor sit amet.</h1>
            <div className="bg-fff text-lgray hover:bg-fff font-medium gap-5 hidden lg:flex">Updated today <ChevronDown /></div>
          </section>

          <section className="flex items-center justify-between p-6 border-b-[1px]">
              <h1 className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
            <div className="bg-fff text-lgray hover:bg-fff font-medium gap-5 hidden lg:flex">Updated 2 days ago <ChevronDown /></div>
          </section>
          <section className="flex items-center justify-between p-6 border-b-[1px]">
              <h1 className="font-medium">Lorem, ipsum dolor.</h1>
            <div className="bg-fff text-lgray hover:bg-fff font-medium gap-5 hidden lg:flex">Updated 5 days agp <ChevronDown /></div>
          </section>
          <section className="flex items-center justify-between p-6 border-b-[1px]">
              <h1 className="font-medium">Lorem ipsum dolor sit.</h1>
            <div className="bg-fff text-lgray hover:bg-fff font-medium gap-5 hidden lg:flex">Updated 6 days ago <ChevronDown /></div>
          </section>
          <section className="flex items-center justify-between p-6 border-b-[1px]">
              <h1 className="font-medium">Authentification Issues dolor sit.</h1>
            <div className="bg-fff text-lgray hover:bg-fff font-medium gap-5 hidden lg:flex">Updated Last Month <ChevronDown /></div>
          </section>
        </div>
  </div>
</Container>
  )
}

export default Section5