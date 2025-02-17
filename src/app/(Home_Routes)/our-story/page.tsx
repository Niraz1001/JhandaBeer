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
      <div className='overflow-hidden pr-32 pt-16 flex justify-between items-center gap-20 text-white '>
        <div className='relative w-full h-full basis-[50%]'>
          <Image alt='BeerPng' src={"/img/beer3.png"} width={1000} height={1000} className='object-cover w-auto h-full' />
        </div>
        <div className='basis-[50%]'>
          <h4 className='text-[36px] font-semibold mb-8'>The First Pour</h4>
          <p>It all began in 1975, when our founder set out to create a beer that would capture the spirit of Nepal.</p>
          <div className='bg-[#FFFFFF0D] p-6 rounded-xl mt-8'>
            <p>We wanted to create something more than just a beer - we wanted to bottle the essence of our beautiful nation.</p><br />
            <p>- Ram Prasad, Founder</p>
          </div>
        </div>
      </div>

      {/*firs pour Section*/}
      <div className='overflow-hidden globalContainer py-16 grid grid-cols-2  gap-10 text-white'>
        <div className='flex flex-col justify-center'>
          <h4 className='text-[36px] font-bold mb-7'>A Beer with a Flag</h4>
          <p>Inspired by Nepals distinctive flag, our name and identity were born. Jhanda - meaning flag - became a symbol of national pride.</p>
        </div>
        <div className='relative w-[434px] h-full left-20'>
          <Image src={"/img/logo.png"} alt='log' width={1000} height={1000} className='object-cover w-full h-full' />
        </div>
      </div>


      {/*Brewing*/}
      <div className='globalContainer pt-16 pb-32 text-white'>
        <h4 className='text-center text-[48px] font-bold mb-14'>The Art of Brewing</h4>
        <div className='flex gap-5'>
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