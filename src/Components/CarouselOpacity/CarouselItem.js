import React from 'react'

export default function CarouselItem({src, opacity}) {
  return (
    <img src={src} className={`pa to1 ofcvr ${opacity}`} alt='' />
  )
}
