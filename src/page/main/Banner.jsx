import React from 'react'
import banner1 from '../../img/banner_storesearch.png'
import banner2 from '../../img/banner_Delivery_v2.png'
import banner3 from '../../img/banner_promotion_v2.png'

const Banner = () => {
  return (
    <>
      <ul className="bannerBox">
        <li><a href="#"><img src={banner1} alt="가까운 kfc매장을 찾아보세요"/></a></li>
        <li><a href="#"><img src={banner2} alt="딜리버리로 지금 바로 주문하세요"/></a></li>
        <li><a href="#"><img src={banner3} alt="kfc의 다양한 혜택을 경험해보세요"/></a></li>
      </ul>
    </>
  )
}

export default Banner
