import React, { useState } from 'react'
import Top from './Top'
import DeliveryAddress from './DeliveryAddress'
import Banner from './Banner'
import MenuList from './MenuList'
import Info from './Info'
import Footer from '../main/Footer'
import BottomNav from '../main/BottomNav'
import Button from './Button'

const Detail = () => {
    const [showInfo, setShowInfo] = useState(true) // Info 컴포넌트 표시 여부 상태
    const [showCategoryList, setShowCategoryList] = useState(true) // 카테고리 리스트 표시 여부 상태

     // 카테고리 메뉴클릭시
    const handleRecommendClick = () => {
        setShowInfo(false) // 메뉴 클릭 시 Info 컴포넌트 숨기기
        setShowCategoryList(true) // 카테고리 리스트 표시
    }

    // 카테고리안에 있는 상품클릭시
    const handleProductClick = () => {
        setShowInfo(true) // 상품 클릭 시 Info 컴포넌트 표시
        setShowCategoryList(false) // 카테고리 리스트 숨기기
    }

    return (
        <>
            <Top></Top>
            <DeliveryAddress></DeliveryAddress>
            <Banner></Banner>
            <MenuList onShowCategoryMenu={handleRecommendClick} onProductClick={handleProductClick} showCategoryList={showCategoryList}></MenuList>
            {showInfo && <Info></Info>} {/* showInfo 상태에 따라 Info 컴포넌트 표시 */}
            <Button></Button>
            <Footer></Footer>
            <BottomNav></BottomNav>
        </>
    )
}

export default Detail
