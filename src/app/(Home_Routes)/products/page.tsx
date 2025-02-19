'use client'
import HeroSection from '@/src/components/Herosection';
import TestingNotes from '@/src/components/TestingNotes';
import { TestingIn } from '@/src/types';
import Image from 'next/image';
import React from 'react'
import { CiDroplet } from 'react-icons/ci';
import { FaPercentage, FaTemperatureLow, FaWineGlass, FaWineGlassAlt, } from 'react-icons/fa';
import { PiWaves } from 'react-icons/pi';

const Product = () => {

  const Testing: TestingIn[] = [
    {
      icon: <PiWaves size={20} className='rotate-[-80deg]'/>,
      title: "Aroma",
      desc: "Rich malty sweetness with subtle hop fragrance",
    },
    {
      icon: <CiDroplet size={20} />,
      title: "Taste",
      desc: "Balanced malt character with crisp hop finish",
    },
    {
      icon: <FaWineGlassAlt size={20} />,
      title: "Appearance",
      desc: "Clean, refreshing with subtle malt sweetness",
    }
  ]

  return (
    <div>

      <HeroSection
        Background={"/img/background3.jpg"}
        title={"Crafted for the True Nepalese Spirit"}
        desc={"Experience the perfect blend of tradition and excellence in every sip"} />

      {/*Premium Section*/}
      <div className='overflow-hidden md:pr-32 pt-16 md:flex justify-between items-center gap-20 text-white '>
        <div className='relative w-full h-full  basis-[50%]'>
          <Image alt='BeerPng' src={"/img/beer3.png"} width={1000} height={1000} className='object-cover w-auto h-full' />
        </div>
        <div className='p-5 md:p-0 md:basis-[50%]'>
          <h4 className='text-[30px] md:text-[36px] text-center md:text-left font-semibold mb-8'>Premium Craftsmanship</h4>
          <div className='relative p-6 bg-[#FFFFFF0D] rounded-xl mb-8'>
            <p className='text-xl font-bold'>Flavor Profile</p>

            <div className='flex justify-between items-center my-4'>
              <p>Bitterness</p>
              <div className="w-[192px] bg-[#FFFFFF33] rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-[70%]"></div>
              </div>
            </div>

            <div className='flex justify-between items-center mb-4'>
              <p>Maltiness</p>
              <div className="w-[192px] bg-[#FFFFFF33] rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-[75%]"></div>
              </div>
            </div>

            <div className='flex justify-between items-center m5-4'>
              <p>Smoothness</p>
              <div className="w-[192px] bg-[#FFFFFF33] rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>

          <div className='flex justify-start items-center gap-2 md:gap-5'>
            <div className='py-4 w-48 bg-[#FFFFFF0D] rounded-xl flex flex-col items-center'>
              <FaPercentage className='h-6' />
              <p className='text-xs md:text-base'>Alcohol Content</p>
              <p className='text-sm md:text-xl font-bold'>4.8%</p>
            </div>

            <div className='py-4 w-48 bg-[#FFFFFF0D] rounded-xl flex flex-col items-center'>
              <FaTemperatureLow className='h-6' />
              <p className='text-xs md:text-base'>Serving Temp</p>
              <p className='text-sm md:text-xl font-bold'>4°C</p>
            </div>

            <div className='py-4 w-48 bg-[#FFFFFF0D] rounded-xl flex flex-col items-center'>
              <FaWineGlass className='h-6' />
              <p className='text-xs md:text-base'>Best Served</p>
              <p className='text-sm md:text-xl font-bold'>Chilled</p>
            </div>
          </div>

        </div>
      </div>


      {/*Testing Notes Section*/}
      <div className='overflow-hidden px-5 md:px-0 md:pl-32 pt-16 flex justify-between items-start gap-20 w-full text-white'>

        <div className='md:basis-[50%]'>
          <h4 className='text-[30px] md:text-[36px] font-semibold mb-4 text-center md:text-left'>Tasting Notes</h4>
          {
            Testing.map((item, idx) => (
              <TestingNotes key={idx} item={item} />
            ))
          }
        </div>
        <div className='hidden sm:block relative w-full h-full md:basis-[50%] top-5'>
          <Image alt='BeerPng' src={"/img/beer3.png"} width={1000} height={1000} className='object-cover w-auto h-full' />
        </div>
      </div>

    </div>
  );
}

export default Product;
