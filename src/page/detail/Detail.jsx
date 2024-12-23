import React, { useEffect, useState } from 'react'
import Top from './Top'
import DeliveryAddress from './DeliveryAddress'
import Banner from './Banner'
import MenuList from './MenuList'
import Info from './Info'
import Footer from '../main/Footer'
import BottomNav from '../main/BottomNav'
import Button from './Button'
import { Route, Routes, useLocation } from 'react-router-dom'
import DetailCategoryBind from './DetailCategoryBind'

const Detail = ({onNaviMenu, cateName}) => {
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
            <Top cateName={cateName}></Top>
            <DeliveryAddress></DeliveryAddress>
            <Banner></Banner>
            <MenuList 
                /**onShowCategoryMenu함수를 props로 보내는거에 대한 해석: onShowCategoryMenu 함수 안에서 
                 * setShowInfo, setShowCategoryList, setTopTitle 함수를 실행한다 */
                onShowCategoryMenu={() => { /**함수를 props로 넘길때, 이렇게 하는 방식도 있다는거 기억*/
                    setShowInfo(false);
                    setShowCategoryList(true);
                    /*setTopTitle()*/
                }} 
                /**setTopTitle()여기서 파라미터를 넘기지 않는다면, 그 상태에서 setTopTitle 함수는 "아무것도 업데이트하지 않고 기본적으로 유지"하는 역할 */
                /**setTopTitle()은 파라미터가 없어도 기본 상태를 유지하거나, props로 전달된 그대로의 로직을 실행하기 때문에 동작하며, 이는 **전역 상태 관리(리듀서)**와는 별도로, 부모 상태 관리용 액션으로 설계 */
                onProductClick={() => { setShowInfo(true); setShowCategoryList(false); /*setTopTitle()*/}}
                showCategoryList={showCategoryList}
            ></MenuList>
            {showInfo && <Info></Info>} {/* showInfo 상태에 따라 Info 컴포넌트 표시 */}
            {showInfo && <Button></Button>}
            <Footer></Footer>
            <BottomNav onNaviMenu={onNaviMenu}></BottomNav>
            <Routes>
                <Route path="/detail/category/:indexNumber" element={<DetailCategoryBind onProductClick={() => {setShowInfo(true); setShowCategoryList(false);}}/>}></Route>
            </Routes>
        </>
    )
}

export default Detail
