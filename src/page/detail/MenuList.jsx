import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import icon1 from '../../img/dv_mn_new.png'
import icon2 from '../../img/dv_mn_set_chicken.png'
import icon3 from '../../img/dv_mn_set_burger.png'
import icon4 from '../../img/dv_mn_side_menu.png'
import icon5 from '../../img/dv_mn_drink.png'
import icon6 from '../../img/db_mn_address.png'

const MenuList = () => {
    return (
        <>
            <div className="menuLisBox">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2.5}
                    style={{width:'100%', height:'100%'}}
                >
                    <SwiperSlide><a href="#"><span className="img_cover"><img src={icon1} alt="추천메뉴"/></span><span>추천메뉴</span></a></SwiperSlide>
                    <SwiperSlide><a href="#"><span className="img_cover"><img src={icon2} alt="치킨세트"/></span><span>치킨&세트</span></a></SwiperSlide>
                    <SwiperSlide><a href="#"><span className="img_cover"><img src={icon3} alt="버거세트"/></span><span>버거&세트</span></a></SwiperSlide>
                    <SwiperSlide><a href="#"><span className="img_cover"><img src={icon4} alt="스낵사이드"/></span><span>스낵&사이드</span></a></SwiperSlide>
                    <SwiperSlide><a href="#"><span className="img_cover"><img src={icon5} alt="음료"/></span><span>음료</span></a></SwiperSlide>
                    <SwiperSlide><a href="#"><span className="img_cover"><img src={icon6} alt="주소등록"/></span><span>주소등록</span></a></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default MenuList
