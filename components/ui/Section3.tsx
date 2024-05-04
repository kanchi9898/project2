import React from 'react'
import Container from './Container'
import { Button } from './button'
import { Check, MoveRight } from 'lucide-react'

const Section3 = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-5">
         <div className="w-full lg:w-[532px] flex gap-4 flex-col">
          <h1 className="text-dblue text-[25px] md:text-[32px] font-semibold">Demonstrate branding consequently think outside</h1>
          <p className="text-lgray hidden lg:block">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</p>
          <ul className="flex gap-2 flex-col">
            <li className="text-lgray flex items-center gap-2 leading-[24px]"><Check size={20} className="text-blue"/> Enterprise-grade security</li>
            <li className="text-lgray flex items-center gap-2 leading-[24px]"><Check size={20} className="text-blue"/> 99.9% guaranteed uptime SLA</li>
            <li className="text-lgray flex items-center gap-2 leading-[24px]"><Check size={20} className="text-blue"/> Designated customer success team</li>
          </ul>
          <Button className="w-max bg-blue hover:bg-blue text-fff font-medium gap-2">Start now <MoveRight size={20}/></Button>
         </div>
         <div className="relative h-[400px] sm:h-[560px] w-full lg:w-[560px] flex items-center justify-center">
         <img className="h-full w-full object-cover" src="https://s3-alpha-sig.figma.com/img/b842/7ca0/1e20d6b57efa617bac9104366369abf8?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zxg8Svbb6SKEEbb0negsmdBRyPUxTdNrSiJJ86LgbWUyqVrF6sTLXUxJUtwyhG-voL6hKUOnbZ~OA8DNcHgJDQ2lmJkfFW3ImMc7xtfwcJTeCmhzNwuo0c53ZIplKDCl7kFJZFnFaA-gBDHgiElYCFwbD0xncUNkKt32Qc1jFjUW4ataAdhMUJaFIs-wD26PfqXvwULBIGyKDQ48~w1ii9e-z7u1MlvFzu~cE2v3GINuH~QCqsaIWlELig7Y-R~Pqew7nForjrI2rixHSoUTCsz9CoNBUeqk6ikmMuEe2D3kzfZeqJ~~gk-J-ZDfNNfvIP0kRh561ID4vQ9oEhcHXg__" alt="img" />
          <img className="absolute bottom-0" src="https://s3-alpha-sig.figma.com/img/4af6/6805/6a5a1d8c700860da41579a1254d03258?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cbbPBaThQqgc1fnCyfdDDjRJ4EQmKZCGID0iaNxcuWwtIjd-FOXnt4AML7J2DQ9c07zEiNsxMtClYUd2DjsCXD01PgjS5ETSzkNYNFj~pulmCYZCyv4wcy56dOeIg3Zey2Fa6e2jkEDSubZYNa6rIttcHuhtbDkzVL9hl61CD~QZ7V22zY3-1zzvzN1483cIveHuc0cdhhcR1i-isgZRo20-AaLj3FSTMtQJkJ0kC0DjA6-o2fo6i4ZhRQ~33v60J7syW8F3CL1YldhiSXwLUVh5NBdWpAxLlIlHCLbLt2UFBP~nkWaq0SOQkVkrePpG4ZsY6g2oTA0MGEoxpP4Prw__" alt="img2" />
         </div>
      </div>
      </Container>
  )
}

export default Section3