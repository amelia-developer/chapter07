import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import swiper1Img from '../img/MKWcUpuGySOr.png'
import swiper2Img from '../img/RgPJjfVGyaps.png'
import swiper3Img from '../img/aimIqX97EM7r.png'

const TopRolling = () => {
    return (
        <div style={{width: 'auto', height: 'auto'}}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                modules={[Autoplay]}
                style={{width: '100%', height: '100%'}}
            >
                <SwiperSlide><img src={swiper1Img} alt="오리지널 치킨, 버거로 재탄생 커넬 오리지널"/></SwiperSlide>
                <SwiperSlide><img src={swiper2Img} alt="죽여주는 닭껍질튀김"/></SwiperSlide>
                <SwiperSlide><img src={swiper3Img} alt="매일밤9시에서 10시 치킨나이트"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopRolling;
