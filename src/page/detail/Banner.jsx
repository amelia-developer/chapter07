import React from 'react'
import kfcGrandFather from '../../img/banner_delivery_bike.png'

const Banner = () => {
    return (
        <>
            <div className="deliveryBannerBox">
                <div className="bannerContetns">
                    <div className="bannerDesc">
                        <p>KFC 다양한 메뉴를 배달로 만나세요!</p>
                        <h3>DELIVERY<br/>MENU</h3>
                    </div>
                    <img src={kfcGrandFather} alt="kfc할아버지이미지"/>
                </div> 
            </div>            
        </>
    )
}

export default Banner