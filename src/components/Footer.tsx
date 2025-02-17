import Image from 'next/image'
import React from 'react'
import { ContactData, legalData, QuickLinkData } from '../app/constant'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='globalContainer pt-9 pb-2'>
        {/* Logo Section */}
        <div className=' flex items-center  gap-5 md:gap-5 lg:gap-40 ml-10 md:ml-0'>
          <div className='w-14 md:w-20 lg:w-32'><Image src={"/img/logo.png"} height={118} width={132} alt='logo' className='object-cover'/></div>
          <p className='text-base md:text-2xl lg:text-4xl'>Crafting premium beer since 1995</p>
        </div>

        <div className='mt-5 py-11 px-16 border-black border-y-[1px] hidden:flex md:flex md:justify-around lg:flex lg:justify-between'>

          <div>
            <h4 className='font-semibold pb-5'>Quick Links</h4>
            {
              QuickLinkData.map((item, idx)=>(
                <Link key={idx} href={item.href} className='text-[13px] text-[#6C6464] '>
                  <p className='mb-3'>{item.name}</p>
                </Link>
              ))
            }
          </div>

          <div>
            <h4 className='font-semibold pb-5'>Contact Info</h4>
            {
              ContactData.map((item, idx)=>(
                <div key={idx} className='text-[13px] text-[#6C6464] flex gap-1'>
                  <p className='text-black'>{item.name}</p>
                  <p className='mb-3'>{item.des}</p>
                </div>
              ))
            }
          </div>

          <div>
            <h4 className='font-semibold pb-5 sm'>Legal</h4>
            {
              legalData.map((item, idx)=>(
                <Link key={idx} href={item.href} className='text-[13px] text-[#6C6464] '>
                  <p className='mb-3'>{item.name}</p>
                </Link>
              ))
            }
          </div>

          <div>
            <h4 className='font-semibold pb-5'>Follow Us</h4>
            <div className='flex gap-3'>
            <FaInstagram size={20}/> <FaFacebook size={20}/>
            </div>
          </div>

        </div>

        <p className='text-center mt-8'>© 2025 Jhanda Beer. All rights reserved.</p>

      </div>
    </footer>
  )
}

export default Footer