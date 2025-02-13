'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { NavItemData } from '../app/constant'
import Link from 'next/link'
import { CiGlobe } from 'react-icons/ci'
import { FaChevronDown } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'

const Navbar = () => {

  const [IsOpen, setIsOpen] = useState(false)
  const Pathname = usePathname()

  return (
    <nav className="relative bg-white shadow-sm">
      <div className='globalContainer py-3 flex justify-between items-center'>


        {/* Logo Section */}
        <Image src={"/img/logo.png"} height={65} width={67} alt='logo' />


        {/* Desktop Nav Section */}
        <div className='hidden lg:flex justify-center items-center gap-44'>
          {
            NavItemData.map((item, idx) => (
              <div key={idx} className={`relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-[#EC2028] hover:after:w-full after:transition-all after:duration-300 hover:text-[#2E358C] ${Pathname === item.href && "text-[#2E358C] after:w-full"}`}>
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))
          }
        </div>

        {/* HamBurger for mobile view */}

        <div className='lg:hidden'>
          {
            !IsOpen &&  <div onClick={()=>(setIsOpen(!IsOpen))}><GiHamburgerMenu size={30} /></div> 
          }
        </div>


        {/* Choose Country Section */}
        <div className='hidden lg:flex justify-center items-center gap-2'>
          <CiGlobe size={20} />
          <Image src={"/img/nepal-flag-icon.webp"} width={17} height={20} alt='nepal-flag' />
          <p>NP</p>
          <FaChevronDown size={12} />
        </div>


        {/*Mobile view Nav section*/}
         
        {
          IsOpen && 
          <div className={`globalContainer py-7 pl-20 bg-[#2E358C] absolute left-0 top-0 w-full h-screen z-10 text-white flex justify-between`}>
            <div className='mt-10'>
            {
            NavItemData.map((item, idx) => (
              <div key={idx} className={`mb-5 ${Pathname === item.href && "text-[#EC2028]"}`}>
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))
          }
            </div>
            <div onClick={()=>(setIsOpen(!IsOpen))}><IoCloseSharp size={30}/></div>
          </div>
        }


      </div>
    </nav>
  )
}

export default Navbar