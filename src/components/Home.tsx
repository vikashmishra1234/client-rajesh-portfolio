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
    <section className='bg-blue-100 pt-[7rem] gap-4 flex items-center h-[calc(100vh)] justify-start  flex-col'>
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
        <p style={{fontFamily:'cursive'}} className='capitalize text-[19px]  w-[80%] sm:text-[23px] sm:w-[75%] md:text-[25px] md:w-[65%] text-center'>
            current: assistant proffessor(pharmacy) at bsa college of eng. and technology mathura
        </p>
        <div className='flex items-center gap-4'>
            <div className={iconStyle}>

           <MdOutlineMail size={'30px'}/>
            </div>
            <div className={iconStyle}>
                <Link href={'/'}><FaLinkedin color='blue' size={'30px'}/></Link>
            
            </div>
            <div className={iconStyle}>
        <Link href={'/'}><FaFacebookSquare color='blue' size={'30px'}/></Link>
            
            </div>
            <div className={iconStyle}>
<Link href='/'><FaXTwitter size={'30px'}/></Link>
            
            </div>
        </div>
        
    </section>
  )
}

export default Home