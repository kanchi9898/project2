import React from 'react'
import Container from './Container'

const Section1 = () => {
  return (
    <div className="bg-[#F8F9FB]">
    <Container>
      <div className="h-[404px] flex flex-col items-center justify-center">
        <div className="w-full md:w-[640px] h-max flex flex-col items-center justify-center gap-5 md:gap-[28px]">
          <h2 className="text-blue text-[14px] font-semibold">1% OF THE INDUSTRY</h2>
          <h1 className="text-[9vw] md:text-[62px] text-center text-dblue font-bold md:leading-[60px]">Hype got you here.
            Stay for the support.</h1>
          <p className="text-center text-[#5F6D7E] text-[18px]">We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully.</p>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default Section1