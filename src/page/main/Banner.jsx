import React from 'react'
import banner1 from '../../img/banner_storesearch.png'
import banner2 from '../../img/banner_delivery.png'

const Banner = () => {
  return (
    <>
      <ul className="bannerBox">
        <li><a href="#"><img src={banner1} alt=""/></a></li>
        <li><a href="#"><img src={banner2} alt=""/></a></li>
      </ul>
    </>
  )
}

export default Banner
