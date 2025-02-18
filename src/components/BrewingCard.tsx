import React from 'react'
import { CardIn } from '../types'

const BrewingCard = ({item}:{item:CardIn}) => {
    return (
        <div className='relative overflow-hidden rounded-xl p-10 md:w-[284px] h-[284px] bg-center bg-cover pt-48 bg-no-repeat' style={{ backgroundImage: `url(${item.img})` }}>
            <div className='absolute bg-black opacity-50 inset-0  rounded-xl'></div>
            <div className=' relative z-10'>
                <h4 className='text-2xl font-bold mb-2'>{item.name}</h4>
                <p className='font-light leading-4'>{item.des}</p>
            </div>
        </div>
    )
}

export default BrewingCard