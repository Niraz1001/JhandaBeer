import React from 'react'
import { TestingIn } from '../types'

const TestingNotes = ({item}:{item:TestingIn}) => {
  return (
    <div className='p-5 md:w-[600px] bg-[#FFFFFF0D] mb-6 rounded-xl'>
        <div className='flex gap-3 items-center mb-3'>{item.icon} <p className='text-xl font-semibold'>{item.title}</p></div>
        <p>{item.desc}</p>
    </div>
  )
}

export default TestingNotes