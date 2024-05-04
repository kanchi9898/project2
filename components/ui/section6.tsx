import React from 'react'
import Container from './Container'
import { Button } from './button'
import { CgTwilio } from 'react-icons/cg'
import { FaMailchimp, FaPinterest, FaSlack } from 'react-icons/fa'

const Section6 = () => {
  return (
    <div className="bg-[#2B63D9]">
    <Container>
      <div className="h-[300px] md:h-[404px] flex flex-col items-center justify-center">
        <div className="w-full md:w-[640px] h-max flex flex-col items-center justify-center gap-5 md:gap-[28px]">
          <h2 className="text-fff text-[14px] font-semibold">1% OF THE INDUSTRY</h2>
          <h1 className="text-[5vw] md:text-[33px] text-fff text-center font-semibold">Welcome to your new digital reality that
which will rock your world truly at all.</h1>
<div className='flex gap-4 flex-col md:flex-row w-full items-center justify-center'>
    <Button className="bg-fff text-blue hover:bg-fff font-semibold text-[18px] w-full md:w-max">Sign up</Button>
    <Button className="bg-blue text-fff hover:bg-fff font-semibold text-[18px] w-full md:w-max">Log in</Button>
</div>
        </div>
      </div>
      <div className='text-fff grid grid-cols-1 md:flex items-center gap-[30px] md:gap-[64px] justify-center pb-10 flex-wrap'>
        <div className='flex items-center font-bold text-[22px] justify-center  '>
        <CgTwilio />
        <p>twilio</p>
        </div>
        <div className='flex items-center font-bold text-[22px] justify-center  '>
        <FaSlack />
        <p>Slack</p>
        </div>
        <div className='flex items-center font-bold text-[22px] justify-center  '>
        <p>Google</p>
        </div>
        <div className='flex items-center font-bold text-[22px] justify-center  '>
        <p>PayPal</p>
        </div>
        <div className='flex items-center font-bold text-[22px] justify-center  '>
        <FaPinterest />
        <p>Pinterest</p>
        </div>
        <div className='flex items-center font-bold text-[22px] justify-center  '>
        <FaMailchimp />
        <p>mailchimp</p>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default Section6