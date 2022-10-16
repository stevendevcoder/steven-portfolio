import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRouter } from 'next/router';

const style = {
  container: 'flex md:fixed justify-center w-full h-[70px] shadow-md z-[100] transition.all duration-300 ease-in-out',
  navbar: 'flex justify-between items-center max-w-[1240px] w-full h-full px-6 2xl:px-12',
  title: 'flex items-center gap-3',
  link: 'text-[16px] w-fit hover:bg-blue-800 hover:text-[#fff] py-1 px-2 transition-all duration-300 ease-in-out border-none',
  activeLink: 'text-[16px] bg-[#000300] text-[#fff] py-1 px-2 border rounded-[10px] transition-all duration-300 ease-in-out',
  linkNavbar: 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-1',
  onScroll: ' flex fixed justify-center w-full h-[70px] bg-[#ecf0f3] shadow-xl z-[100] h-[60px] transition-all duration-600 ease-in-out'

}

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [activeLink, setActiveLink] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  console.log(router.route)

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll",onScroll)
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <div className={scrolled ? style.onScroll : style.container}>
      <div className={style.navbar}>
        <div className={style.title}>
          <FaCode size={40} />
          <h2 className='flex'>steven<p className='text-blue-800'>devcoder</p></h2>
        </div>
        <ul className='hidden md:flex justify-around'>
          <Link href='/'>
            <li className={activeLink=='inicio' ? style.activeLink : style.link}>Inicio</li>
          </Link>
          <Link href='/#sobremi'>
            <li className={activeLink=='sobremi' ? style.activeLink : style.link}>Sobre mi</li>
          </Link>
          <Link href='/#conocimientos'>
            <li className={activeLink=='conocimientos' ? style.activeLink : style.link}>Conocimientos</li>
          </Link>
          <Link href='/#proyectos'>
            <li className={activeLink=='proyectos' ? style.activeLink : style.link}>Proyectos</li>
          </Link>
          <Link href='/#contacto'>
            <li className={activeLink=='contacto' ? style.activeLink : style.link}>Contacto</li>
          </Link>
        </ul>
        <div className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={25} onClick={()=>setNavbar(true)}/>
        </div>
      </div>

      <div className={navbar ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50' : ''}>
          <div className={navbar ? 'fixed left-0 top-0 w-[80%] sm:w-[70%] md:w-[45%] h-screen bg-[#ecf0f3] p-[20px]' : 'fixed left-[-100%]'}>
            <div className='flex w-full items-center justify-between'>
              <FaCode size={30} />
              <h2 className='flex text-2xl'>steven<p className='text-blue-800'>devcoder</p></h2>
              <AiOutlineClose className='top-2 right-2 p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer' size={40} onClick={()=>setNavbar(false)}/>
            </div>
            <ul className='md:hidden flex flex-col gap-[40px] justify-between items-start py-6 uppercase'>
              <Link href='/'>
                <li className={activeLink=='inicio' ? style.activeLink : style.link}>Inicio</li>
              </Link>
              <Link href='/'>
                <li className={activeLink=='sobremi' ? style.activeLink : style.link}>Sobre mi</li>
              </Link>
              <Link href='/'>
                <li className={activeLink=='conocimientos' ? style.activeLink : style.link}>Conocimientos</li>
              </Link>
              <Link href='/'>
                <li className={activeLink=='proyectos' ? style.activeLink : style.link}>Proyectos</li>
              </Link>
              <Link href='/'>
                <li className={activeLink=='contacto' ? style.activeLink : style.link}>Contacto</li>
              </Link>
            </ul>
            <div className='pt-36 flex flex-col items-center'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Contactame!</p>
              <div className='flex mt-[10px] w-[80%] justify-around'>
                <div className={style.linkNavbar}>
                  <FaLinkedinIn size={30} />
                </div>
                <div className={style.linkNavbar}>
                  <AiOutlineMail size={30} />
                </div>
                <div className={style.linkNavbar}>
                  <AiOutlineGithub size={30} />
                </div>
                <div className={style.linkNavbar}>
                  <RiWhatsappFill size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar