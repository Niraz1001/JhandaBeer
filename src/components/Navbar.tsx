'use client'; // ✅ Add this at the top

import Image from 'next/image';
import React, { useState } from 'react';
import { NavItemData } from '../app/constant';
import Link from 'next/link';
import { CiGlobe } from 'react-icons/ci';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import i18n from 'i18next';

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const Pathname = usePathname();

  const changelan = (lang: string) => {
    i18n.changeLanguage(lang); // ✅ Ensure `changeLanguage` is correctly used
  };

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="globalContainer py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Image src="/img/logo.png" width={65} height={67} alt="logo" />

        {/* Desktop Nav Section */}
        <div className="hidden lg:flex justify-center items-center gap-44">
          {NavItemData.map((item, idx) => (
            <div key={idx} className={`relative hover:text-[#2E358C] ${Pathname === item.href && "text-[#2E358C]"}`}>
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>

        {/* Hamburger for Mobile View */}
        <div className="lg:hidden">
          {!IsOpen && <div onClick={() => setIsOpen(!IsOpen)}><GiHamburgerMenu size={30} /></div>}
        </div>

        {/* Language Selector */}
        <div className="hidden lg:flex justify-center items-center gap-2">
          <CiGlobe size={20} />
          {i18n.language === "np" ? (
            <Image src="/img/nepal-flag-icon.webp" width={17} height={20} alt="nepal-flag" />
          ) : (
            <Image src="/img/Flag_of_the_United_Kingdom.png" width={30} height={30} alt="uk-flag" />
          )}
          <select onChange={(e) => changelan(e.target.value)}>
            <option value="np">NP</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
