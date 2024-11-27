import React from 'react'

const BannerOrder = () => {
    return (
        <>
            <div className="bannerOrder">
                <div className="inner">
                    <div className="top"><img src={`/images/banner_store_title.png`} alt=""/></div>
                    <a href="#">앱으로 주문하기</a>
                    <div className="bottom"><img src={`/images/banner_store_right.png`} alt=""/></div>
                </div>
            </div>   
        </>
    )
}

export default BannerOrder