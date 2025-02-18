import BrewingCard from '@/src/components/BrewingCard'
import HeroSection from '@/src/components/Herosection'
import Image from 'next/image'
import React from 'react'
import { Brewing } from '../../constant'

const OurStory = () => {
  return (
    <div>
      <HeroSection
        Background={"/img/background4.png"}
        title={"A Legacy Brewed with Passion"}
        desc={"Crafting Nepal's finest beer since 1985, bringing the spirit of the Himalayas to every glass."}
      />


      {/*firs pour Section*/}
      <div className='overflow-hidden md:pr-32 pt-16 flex flex-col md:flex-row justify-between items-center gap-20 text-white '>
        <div className='relative w-full h-full md:basis-[50%]'>
          <Image alt='BeerPng' src={"/img/beer3.png"} width={1000} height={1000} className='object-cover w-auto h-full' />
        </div>
        <div className='md:basis-[50%] px-5 md:px-0'>
          <h4 className='text-[30px] md:text-[36px] font-semibold mb-8 -mt-10 md:mt-0'>The First Pour</h4>
          <p>It all began in 1975, when our founder set out to create a beer that would capture the spirit of Nepal.</p>
          <div className='bg-[#FFFFFF0D] p-6 rounded-xl mt-8'>
            <p>We wanted to create something more than just a beer - we wanted to bottle the essence of our beautiful nation.</p><br />
            <p>- Ram Prasad, Founder</p>
          </div>
        </div>
      </div>

      {/*firs pour Section*/}
      <div className='overflow-hidden globalContainer py-16 grid grid-cols-1 md:grid-cols-2  gap-10 text-white'>
        <div className='flex flex-col justify-center'>
          <h4 className='text-[30px] md:text-[36px] font-bold mb-7'>A Beer with a Flag</h4>
          <p>Inspired by Nepals distinctive flag, our name and identity were born. Jhanda - meaning flag - became a symbol of national pride.</p>
        </div>
        <div className='relative md:w-[434px] h-full md:left-20'>
          <Image src={"/img/logo.png"} alt='log' width={1000} height={1000} className='object-cover w-full h-full' />
        </div>
      </div>


      {/*Brewing*/}
      <div className='globalContainer overflow-hidden pt-16 pb-10 md:pb-32 text-white'>
        <h4 className='text-center text-[30px] md:text-[48px] font-bold mb-14'>The Art of Brewing</h4>
        <div className='flex flex-col md:flex-row gap-5'>
          {
            Brewing.map((Item, idx) => (
              <div key={idx}>
                <BrewingCard item={Item} />
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default OurStory