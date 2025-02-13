import Card from '@/src/components/Card'
import Image from 'next/image'
import React from 'react'
import { CardData } from '../constant'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Home = () => {
  return (
    <div>

      {/* Hero section */}
      <div className='relative w-screen h-[150px] md:h-[335px] lg:h-[535px]'>
        <Image src={"/img/hero.jfif"} alt='HeroImg' fill className='object-cover w-auto h-auto object-top' />
      </div>



      {/* Section 1 */}
      <div className='globalContainer my-10 md:my-16'>

        <div className='flex items-center py-5 gap-4'>
          <div className='basis-[60%]'>
            <p className='text-sm md:text-lg text-[#2E358C] font-medium'> राम्रो चीजको मूल्य बुझ्नेहरूका लागि तयार गरिएको</p>
            <h4 className='text-2xl md:text-[55px] mt-4 md:mt-8 font-semibold'> प्रिमियम क्राफ्ट बियर</h4>
            <p className='text-sm md:text-lg mt-2 md:mt-10 font-medium'>परम्परा र नवीनताको उत्तम सन्तुलन प्रत्येक बोटलमा अनुभव गर्नुहोस्।</p>
            <button className='bg-[#2E358C] py-1 px-5 md:py-3 md:px-12 text-white rounded-3xl mt-4 md:mt-8'>अझै जान्नुहोस्</button>
          </div>

          <div className='basis-[40%] md:basis-[25%]'>
            <Image src={"/img/beer.png"} alt='BeerImg' width={250} height={200} />
          </div>

          <div className='hidden sm:block basis-[15%]'>

          </div>
        </div>

      </div>


      {/* Section 2 */}
      <div className='border-[#CED4DA] border-t-2 bg-gradient-to-r from-[#2E358C] to-[#DC1E25] py-10 md:pt-16 md:pb-[96px]'>
        <div className='globalContainer '>
          <h4 className='text-[40px] md:text-[48px] mt-5 font-semibold text-center text-white'>पूर्णतासँग सिर्जना गरिएको</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-[30px] md:mt-[75px]'>
            {
              CardData.map((item, idx) => (
                <div key={idx}>
                  <Card item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>



      {/* Section 2 */}
      <div className='border-[#CED4DA] border-t-[3px]  bg-gradient-to-t from-[#F3F4F6] to-[#F9FAFB]'>
        <div className='globalContainer py-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20'>

          <div className='relative  bg-[#CBF3FF] bg-opacity-20 rounded-full w-[300px] h-[300px] md:h-[400px] lg:h-[600px] md:w-[400px] lg:w-[600px] flex items-center justify-center mx-auto'>
            <Image src={"/img/beer.png"} alt='BeerImg' width={120} height={70} className='md:h-[240px] md:w-[150px] lg:h-[420px] lg:w-[250px]' />
            <button className='absolute right-[-10px] top-5 md:top-3 lg:top-7 bg-[#EF4444] py-3 px-4 md:py-3 md:px-5 lg:py-5 lg:px-8 text-xs md:text-base text-white rounded-full mt-8'>Special Offer</button>
          </div>

          <div className='mt-5 md:mt-10 lg:mt-32 text-center md:text-left'>
            <h4 className='text-[40px] md:text-[50px] lg:text-[60px] font-bold'>झण्डा बियर</h4>
            <p className='text-xs mt-3 '>रामाणिक जापानी स्वाद</p>
            <hr className='my-3 md:my-5 lg:my-8' />
            {/* Rating */}
            <div className=' flex items-center gap-3 mb-5 lg:mb-12 justify-around md:justify-start'>
              <div className='flex gap-1 text-[#FACC15] text-base'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
              <p>(४.५/५ - २,३८९ समीक्षाहरूबाट)</p>
            </div>

            <p className='text-[14px] md:text-[16px]'>झण्डा बियरसँग परम्परा र नवीनताको उत्कृष्ट संयोजनको अनुभव लिनुहोस्। उत्कृष्ट सामग्रीहरू र सम्मानित जापानी बियर उत्पादन प्रविधिहरूको प्रयोग गरेर बनाइएको, प्रत्येक क्यानले ताजा, शीतल स्वाद दिन्छ, जुन गुणस्तरमा अद्वितीय छ।</p>

          </div>

        </div>
      </div>


    </div >
  )
}

export default Home