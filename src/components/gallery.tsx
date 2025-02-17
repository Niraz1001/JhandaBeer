import Image from 'next/image'
import React from 'react'
import { GalleryIn } from '../types'

const Gallery = ({ item, idx }: { item: GalleryIn , idx:number}) => {
    return (
        <div>
                <Image className={`${idx===0 && "w-full h-[605px] object-cover"} w-full `} src={item.img} alt={item.img} width={1000} height={1000} />
        </div>
    )
}

export default Gallery