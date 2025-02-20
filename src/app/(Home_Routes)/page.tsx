'use client'
import Card from '@/src/components/Card'
import Image from 'next/image'
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import { CardIn } from '@/src/types'
import Gallery from '@/src/components/gallery'
import { GalleryData } from '../constant'
// import AgeConfirmationBox from '@/src/components/AgeConfirmationBox'


const Home = () => {

  const { t } = useTranslation();
  const cards = t('cards', { returnObjects: true }); // Fetch cards data from translations
  const cardsArray = Array.isArray(cards) ? cards : Object.values(cards);



  return (
    <div className='mt-20'>
      {/* Hero section */}
      <div className='relative w-full overflow-hidden h-[300px] md:h-[335px] lg:h-[700px]'>
        <Image src={"/img/hero1.png"} alt='HeroImg' fill className='object-cover w-auto h-full object-center ' />
      </div>

      {/* Section 1 */}
      <div className='bg-[url(/img/background1.png)] overflow-hidden pt-12 pb-12 md:pt-44 md:pb-36 bg-cover bg-no-repeat bg-center'>

        <div className='globalContainer  mx-0 md:mx-40 '>

          <div className='w-[220px] md:w-[320px]'>
            <p className='text-sm md:text-base lg:text-lg  text-white font-medium pr-10 md:pr-20'>
              {t('section1.tagline')}
            </p>
            <h4 className='text-2xl md:text-[40px] lg:text-[55px] text-white mt-0 md:mt-8 font-semibold leading-[60px]'>
              {t('section1.title')}
            </h4>
            <p className='text-sm md:text-base lg:text-lg text-white mt-0 md:mt-10 font-medium pr-10 md:pr-0'>
              {t('section1.description')}
            </p>
            <button className='bg-[#2E358C] py-1 px-5 md:py-3 md:px-12 text-white rounded-3xl mt-4 md:mt-8 '>
              {t('section1.button')}
            </button>
          </div>

        </div>
      </div>


      {/* Section 2 */}
      <div className='py-10 md:pt-16 md:pb-[96px]'>
        <div>
          <h4 className='text-[30px] md:text-[48px] mt-0 md:mt-5 font-semibold text-center text-white '>
            {t('section2.title')}
          </h4>
          <div className='mt-[30px] md:mt-[75px]'>
            {cardsArray.map((item: CardIn, idx) => (
              <Card key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>




      {/* Section 3 */}
      <div className='relative bg-[url(/img/background2.png)] bg-cover bg-no-repeat bg-center overflow-hidden'>
        <div className='absolute w-full h-full bg-black opacity-75 inset-0'></div>
        <div className='py-5 px-5 md:px-0 md:py-32 flex items-center justify-center gap-0 md:gap-20'>

          <div className='hidden sm:block absolute w-full h-auto top-[-300px] left-[-150px] rotate-[8deg]'>
            <Image src={"/img/beer2.png"} alt='BeerImg' width={1031} height={1289} />
          </div>

          <div className='hidden sm:block basis-[45%]'> {/* Empty div */} </div>

          <div className='relative mt-5 md:mt-10 lg:mt-32 text-center md:text-left text-white pr-0 md:pr-36  md:basis-[55%]'>
            <h4 className='text-[40px] md:text-[50px] lg:text-[60px] font-bold'>{t('section3.title')}</h4>
            <p className='text-xs mt-3 '>{t('section3.subtitle')}</p>
            <hr className='my-3 md:my-5 lg:my-8' />
            {/* Rating */}
            <div className=' flex items-center gap-3 mb-5 lg:mb-12 justify-around md:justify-start'>
              <div className='flex gap-1 text-[#FACC15] text-base'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
              <p>({t('section3.rating')})</p>
            </div>

            <p className='text-[14px] md:text-[16px]'>{t('section3.description')}</p>

          </div>

        </div>
      </div>

      {/* Gallery Section */}

      <div className='globalContainer py-5 md:py-20'>
        <h4 className='text-[40px] md:text-[48px] mb-0 md:mb-5 font-semibold text-center text-white'>
          {t('Section4.title')}
        </h4>
        <div className=' grid grid-cols-3 gap-1 md:gap-4 p-4'>
          {
            GalleryData.map((item, idx) => (
              <div key={idx} className={`${idx === 0 && "row-span-2"}`}>
                <Gallery item={item} idx={idx} />
              </div>
            ))
          }
        </div>
      </div>


   



    </div >
  )
}

export default Home