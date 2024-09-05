import Link from 'next/link';
import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { FaTwitter, FaDribbble, FaGithub } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="relative bg-[#e4f7fd] pt-8 pb-6">
      <div className="container max-w-[100%]  px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full  px-4">
            <h4 className="text-3xl sm:text-5xl font-semibold text-blueGray-700">Let's connect with developer!</h4>
            <h5 className="sm:text-[24px]  mb-2 mt-3 text-blueGray-600">
              Find us on any of these platforms, we respond within 1-2 business days.
            </h5>
            <div className="mt-6 flex gap-4 text-[28px] sm:text-[35px] lg:mb-0 mb-6">
              <a target='_blank' href='tel:+918979481819' className="bg-white text-lightBlue-400 shadow-lg font-normal h-10  w-10 sm:h-14 sm:w-14 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaPhone size={'26px'} color='#5b5bfa' />
              </a>
              <a target='_blank' href='mailto:vikashmishra8371@gmail.com' className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 sm:h-14 sm:w-14   flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <MdOutlineMail />
              </a>
              <a target='_blank' href='https://www.linkedin.com/in/vikash-mishra-099478277' className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 sm:h-14 sm:w-14  flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaLinkedin color='blue' />
              </a>
              <a target='_blank' href='https://github.com/vikashmishra1234' className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 sm:h-14 sm:w-14  flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaGithub />
              </a>
            </div>
          </div>
         
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-[19px] text-blueGray-500 sm:text-[25px] sm:w-[50vw] sm:text-start font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span> 
               <span> Made  by</span>
              <Link href="https://vikash-six.vercel.app" className="text-blueGray-500 hover:text-blueGray-800"> vikash mishra</Link>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
