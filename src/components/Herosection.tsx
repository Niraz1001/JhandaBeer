import Image from 'next/image'
import React from 'react'

const HeroSection = ({Background,title,desc}: {Background:string, title:string, desc?:string}) => {
    return (
        <div className="mt-20 relative overflow-hidden w-full h-[710px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Background})` }}>
            <div className="pl-20 flex items-center justify-around w-full h-full">
                {/* Left Content */}
                <div className="text-white basis-[53%]">
                    <h1 className="text-7xl font-bold leading-[72px]">{title}</h1>
                    <p className="mt-4 text-lg">{desc}</p>
                </div>

                {/* Right Image (Beer Can) */}
                <div className="relative w-full h-[900px] top-[-70px] basis-[48%]">
                    <Image
                        src="/img/beer2.png"
                        alt="Jhanda Beer Can"
                        width={1000}
                        height={1000}
                        className="object-cover w-auto h-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection