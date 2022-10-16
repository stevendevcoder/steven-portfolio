import React from 'react'
import Imagen from '../public/assets/imagen.jpeg'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div>
          <Image src={Imagen} width="350px" height="350px" objectFit='cover' alt="" />
        </div>
        <div className='col-span-2'>
          <h2 className='text-4xl'>About Me</h2>
          <p className='py-4 px-2md:px-0 text-center text md:text-left  max-w-[600px]'>
            Hello! My name is Steven and i enjoy to creating things that live on the internet.
            My interest in web development started back in 2012 when i decided to try editing custom Tumblr themes
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eveniet error ipsum qui nemo amet quia iusto, assumenda odit reiciendis laudantium facilis quas atque laborum ducimus molestias labore? Veritatis, id.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe