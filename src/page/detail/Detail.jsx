import React, { useEffect, useState } from 'react'
import Top from './Top'
import DeliveryAddress from './DeliveryAddress'
import Banner from './Banner'
import MenuList from './MenuList'
import Info from './Info'
import Footer from '../main/Footer'
import BottomNav from '../main/BottomNav'
import Button from './Button'
import DetailCategoryBind from './DetailCategoryBind'
import { useLocation } from 'react-router-dom'

const Detail = () => {
    const [showInfo, setShowInfo] = useState(true) // Info 컴포넌트 표시 여부 상태
    const [showCategoryList, setShowCategoryList] = useState(true) // 카테고리 리스트 표시 여부 상태
    const location = useLocation()

    // url변경감지
    useEffect(() => {
        if(location.pathname.startsWith(`/detail/category/`)) { // 현재화면주소가 어떤 문자열로 시작하는지(=detail.category의 문자열로 시작하는지)
            setShowInfo(false) // 메뉴 클릭 시 Info 컴포넌트 숨기기
            setShowCategoryList(true) // 카테고리 리스트 표시
        } else {
            setShowInfo(true) // 상품 클릭 시 Info 컴포넌트 표시
            setShowCategoryList(false) // 카테고리 리스트 숨기기
        }
    }, [location])

    return (
        <>
            <Top></Top>
            <DeliveryAddress></DeliveryAddress>
            <Banner></Banner>
            <MenuList 
                onShowCategoryMenu={() => { setShowInfo(false); setShowCategoryList(true); }} /**콜백함수를 props로 넘길때, 이렇게 하는 방식도 있다는거 기억*/
                onProductClick={() => { setShowInfo(true); setShowCategoryList(false); }}
                showCategoryList={showCategoryList}
            ></MenuList>
            {showInfo && <Info></Info>} {/* showInfo 상태에 따라 Info 컴포넌트 표시 */}
            <Button></Button>
            <Footer></Footer>
            <BottomNav></BottomNav>
        </>
    )
}

export default Detail
