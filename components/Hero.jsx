import Image from 'next/image'
import Ilustracion from './lol.svg'
import React from 'react'
import Link from 'next/link'
import { BsArrowRightCircle } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRouter } from 'next/router';

const style = {
  links: 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-1'
}

const Hero = () => {
  return (
    <div className='w-full h-screen text-center '>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-around items-center flex-wrap '>
        <div className='flex flex-col justify-center items-center md:justify-center md:items-start text-left'>
          <h1 className='py-2'>Hi, I'm <span className='text-blue-800'>Steven</span></h1>
          <h1 className='font-medium text-center md:text-left'>A Front-End Web Developer</h1>
          <p className='py-4 px-2md:px-0 text-center text md:text-left  max-w-[600px]'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
          <p className='py-3 px-4 border-gray-700 border-[1px] text-white w-fit bg-gradient-to-r from-sky-500 to-indigo-500 uppercase text-sm tracking-widest'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <Link href="#">
            <a href="" className='text-black font-bold flex gap-[10px] items-center mt-[20px]'>
              Let's connect
              <BsArrowRightCircle size={20} />
            </a>
          </Link>
          <div className='flex mt-[10px] w-[80%] justify-around md:justify-start md:gap-[20px]'>
                <div className={style.links}>
                  <FaLinkedinIn size={30} />
                </div>
                <div className={style.links}>
                  <AiOutlineMail size={30} />
                </div>
                <div className={style.links}>
                  <AiOutlineGithub size={30} />
                </div>
                <div className={style.links}>
                  <RiWhatsappFill size={30} />
                </div>
          </div>
        </div>
        <div className='flex justify-start items-start md:items-center'>
          <Image src={Ilustracion} width={320} height={320} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero