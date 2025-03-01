import Image from 'next/image';
import React from 'react';
import { CardIn } from '../types';


const Card = ({ item, idx }: { item: CardIn, idx: number }) => {
  return (
    <>
      {/* Destop View */}
      <div className={`hidden text-white sm:flex flex-col md:flex-row items-center gap-3 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className='relative w-full h-[495px] basis-[58%]'>
          <Image src={item.img} alt='cardImg' fill className='object-cover w-auto h-auto' />
        </div>
        <div className='p-10 basis-[42%]'>
          <h4 className='mb-5 text-[20px] md:text-[56px]'>{item.name}</h4>
          <p className='text-[16px] md:text-[24px]'>{item.des}</p>
        </div>
      </div>


      {/* Mobile View */}
      <div className={` md:hidden globalContainer`}
      >
        <div className='bg-white shadow-md mt-8 rounded-xl overflow-hidden '>
          <div className='relative w-full h-[250px] basis-[58%]'>
            <Image src={item.img} alt='cardImg' fill className='object-cover w-auto h-auto' />
          </div>
          <div className='p-10 basis-[42%]'>
            <h4 className='mb-5 text-[20px]'>{item.name}</h4>
            <p className='text-[16px] '>{item.des}</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Card;