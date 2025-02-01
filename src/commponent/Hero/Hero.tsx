import React, { Fragment } from 'react'
import Background from '@/assent/Image/Hero/Topographic 6.svg'
import Navbar from './Navbar/Navbar'
const Hero = () => {
  return (
    <Fragment>
     <div
        className="absolute w-full bg-[#423D90] "
        style={{ backgroundImage: `url(${Background.src})`,
      backgroundRepeat:'no-repeat'
      }}
      >
      <Navbar/>
      </div>
    </Fragment>
  )
}

export default Hero