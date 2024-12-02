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
    const [showInfo, setShowInfo] = useState(false)

    const handleRecommendClick = () => {
        setShowInfo(true)
    }

    return (
        <>
            <Top></Top>
            <DeliveryAddress></DeliveryAddress>
            <Banner></Banner>
            <MenuList onShowDetailCategory={handleRecommendClick}></MenuList>
            {showInfo !== true ? <Info></Info> : null}
            <Button></Button>
            <Footer></Footer>
            <BottomNav></BottomNav>
        </>
    )
}

export default Detail
