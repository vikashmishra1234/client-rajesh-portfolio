"use server"
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import Image from 'next/image';
import  TypeName  from './utils/TypeName';
import Link from 'next/link';
const iconStyle = 'md:p-4 p-3 bg-white rounded-full border-2 border-gray-300';
const Home = () => {

  return (
    <section className='bg-blue-100 pt-[5rem] pb-[5rem] gap-4 flex items-center  justify-start  flex-col'>
        <div className=''>
        <Image
          className='h-36 w-36 sm:h-36 rounded-[50%] border-4 border-white'
          src="/chouhan.jpg"
          alt="Profile"
          width={148}
          height={138}
        />
        </div>
        <div className='text-[28px] sm:text-[40px] md:text-[45px] font-semibold'>
        <TypeName/>
        </div>
        <p style={{fontFamily:'math'}} className='capitalize text-[19px]  w-[80%] sm:text-[23px] sm:w-[75%] md:text-[25px] md:w-[65%] text-center'>
            current: assistant proffessor(pharmacy) at bsa college of eng. and technology mathura
        </p>
        <div className='flex items-center gap-4'>
            <div className={iconStyle}>

           <a href={'mailto:Chauhanrajesh198@gmail.com'}><MdOutlineMail size={'30px'}/></a>
            </div>
            <div className={iconStyle}>
                <a target='_blank' href={'https://www.linkedin.com/in/drx-rajesh-singh-chauhan-3551b5146'}><FaLinkedin color='blue' size={'30px'}/></a>
            
            </div>
            <div className={iconStyle}>
        <a href={'https://www.facebook.com/share/87RLmodHCqM5KXgN/?mibextid=qi2Omg'} target='_blank' ><FaFacebookSquare color='blue' size={'30px'}/></a>
            
            </div>
            <div className={iconStyle}>
        <a href='https://x.com/RajeshS21629839?s=08'><FaXTwitter size={'30px'}/></a>
            
            </div>
        </div>
        
    </section>
  )
}

export default Home