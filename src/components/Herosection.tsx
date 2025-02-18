import Image from 'next/image'
import React from 'react'

const HeroSection = ({Background,title,desc}: {Background:string, title:string, desc?:string}) => {
    return (
        <div className="mt-20 relative overflow-hidden w-full h-[300px] md:h-[710px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Background})` }}>
            <div className="md:pl-20 px-5 md:px-0 flex items-center justify-around w-full h-full">
                {/* Left Content */}
                <div className="text-white md:basis-[53%] text-center md:text-left">
                    <h1 className="text-3xl md:text-7xl font-bold md:leading-[72px]">{title}</h1>
                    <p className="mt-4 text-sm px-5 md:px-0 md:text-lg">{desc}</p>
                </div>

                {/* Right Image (Beer Can) */}
                <div className="hidden sm:block relative w-full h-[900px] top-[-70px] basis-[48%]">
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