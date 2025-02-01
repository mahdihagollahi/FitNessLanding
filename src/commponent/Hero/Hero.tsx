import React, { Fragment } from 'react'
import Background from '@/assent/Image/Hero/Topographic 6.png'
import Navbar from './Navbar/Navbar'
import Image from 'next/image'
const Hero = () => {
  return (
    <Fragment>
     <div
        className="absolute w-full pb-[90%] bg-[#060B25] "
        style={{ backgroundImage: `url(${Background.src})`,
           backgroundPosition: "",
           backgroundSize: "300px" 
      }}
      >
      
      <Navbar/>
      </div>
    </Fragment>
  )
}

export default Hero