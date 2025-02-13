import Image from 'next/image'
import React from 'react'
import { CardIn } from '../types'

interface CardDataProps {
    item : CardIn
}

const Card = ({item}: CardDataProps) => {
    return (
        <div className='bg-[#F8F3E9] shadow-xl rounded-2xl overflow-hidden'>
            <div className='relative w-full h-[400px]'>
                <Image src={item.img} alt='cardImg' fill className='object-cover w-auto h-auto' />
            </div>
            <div className='p-10 h-52'>
                <h4 className='mb-5 text-[20px] md:text-[30px] font-bold'>{item.name}</h4>
                <p className='text-[16px] md:text-[18px]'>{item.des}</p>
            </div>
        </div>
    )
}

export default Card