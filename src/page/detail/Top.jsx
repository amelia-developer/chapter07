import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { setBackDefaultCount } from '../../redux/action'
import { fetchBasketInProduct } from '../../redux/setBasketAction'

// 메모이제이션된 셀렉터 정의
const selectBestMenuSelectedId = state => state.setMenu.bestMenuSelectedId
const selectProductDetailCount = state => state.other.productDetailCount
const selectOptionChoice = state => state.other.optionChoice
const selectDetailProdctTotal = state => state.other.detailProdctTotal
const selectProductTitle = state => state.setMenu.productTitle
const selectOptionName = state => state.other.optionChoiceName
const selectOriginPrice = state => state.other.originProductPrice

const Top = () => {
     // 상태구독
    const bestMenuSelectedId = useSelector(selectBestMenuSelectedId)
    const productDetailCount = useSelector(selectProductDetailCount)
    const optionChoice = useSelector(selectOptionChoice)
    const detailProdctTotal = useSelector(selectDetailProdctTotal)
    const productTitle = useSelector(selectProductTitle)
    const optionName = useSelector(selectOptionName)
    const originPrice = useSelector(selectOriginPrice)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const basketInProduct = {
        productID: bestMenuSelectedId,
        count:productDetailCount,
        price: detailProdctTotal,
        option: optionChoice,
        title: productTitle,
        optionName: optionName,
        originPrice: originPrice
    }

    const onBack = () => {
        navigate(`/`)        
        dispatch(setBackDefaultCount(1))
    }
    
    const onBasket = () => {
        dispatch(fetchBasketInProduct(basketInProduct));
        alert(`상품이 장바구니에 담겼습니다`)
        navigate(`/basket`)
    }
    return (
        <>
            <div className="topBox">
                <h2>{productTitle ? productTitle : '상품명없음'}</h2>
                <a href="#" className="btn_back" onClick={onBack}><span className="blind">뒤로가기</span></a>
                <a href="#" className="btn_basket" onClick={onBasket}><span className="blind">장바구니</span></a>
            </div>
        </>
    )
}

export default Top