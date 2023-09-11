import Image from 'next/image'
import React from 'react'

const HomeBanner = () => {
  return (
    <div className='relative bg-gradient-to-r from-sky-500 to-sky-800'>
      <div className='mx-auto p-4 md:px-8 md:py-12 flex flex-col gap-4 md:flex-row items-center justify-evenly'>
        {/* text */}
        <div className='flex flex-col gap-2 items-center text-center'>
            <h1 className='text-3xl md:text-5xl font-bold text-white'>Summer Sale!</h1>
            <p className='font-semibold text-white'>Enjoy discount on selected items</p>
            <h3 className='text-2xl md:text-3xl font-bold text-yellow-300'>Get 50% off</h3>
        </div>
        {/* img */}
        <div className='relative w-3/4 md:w-1/3 aspect-video'>
            <Image src="/banner1.jpg" alt='image' fill className='object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
