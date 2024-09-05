"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeName = () => {
  return (
    <TypeAnimation
    sequence={[
      'Rajesh Singh Chauhan', 
      2000, 
      'Bussiness Expert', 
      2000, 
      'Pharmacy Expert', 
      2000, 
      
    ]}
    wrapper="p"
    cursor={true}
    repeat={Infinity}
    className='text-[28px] md:text-[45px]'
  />
  )
}

export default TypeName