import HeroSection from '@/src/components/Herosection'
import React from 'react'

const OurStory = () => {
  return (
    <div>
      <HeroSection
        Background={"/img/background4.png"}
        title={"A Legacy Brewed with Passion"}
        desc={"Crafting Nepal's finest beer since 1985, bringing the spirit of the Himalayas to every glass."}
      />
    </div>
  )
}

export default OurStory