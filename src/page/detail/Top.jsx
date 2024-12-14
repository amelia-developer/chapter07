import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { setBackDefaultCount } from '../../redux/action'
import { fetchBasketInProduct } from '../../redux/setBasketAction'
import { setResetProductTitle } from '../../redux/setMenuAction'

const Top = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // 상태구독
    const bestMenuSelectedId = useSelector(state => state.setMenu.bestMenuSelectedId)
    const burgerMenuSelectedId = useSelector(state => state.setMenu.burgerSelectedId)
    const chickenMenuSelectedId = useSelector(state => state.setMenu.chickenSelectedId)
    const drinkSelectedId = useSelector(state => state.setMenu.drinkSelectedId)
    const snackSideSelectedId = useSelector(state => state.setMenu.snackSideSelectedId)
    const productDetailCount = useSelector(state => state.other.productDetailCount)
    const optionChoice = useSelector(state => state.other.optionChoice)
    const detailProdctTotal = useSelector(state => state.other.detailProdctTotal)
    const productTitle = useSelector(state => state.setMenu.productTitle)
    const optionName = useSelector(state => state.other.optionChoiceName)
    const originPrice = useSelector(state => state.setBasket.originProductPrice)
    const categoryTitle = useSelector(state => state.other.categoryTitle)
    const activeIndex = useSelector(state => state.other.activeIndex)

    const [productsId, setProductId] = useState(null)
    useEffect(() => {
        setProductId (
            bestMenuSelectedId ||
            burgerMenuSelectedId ||
            chickenMenuSelectedId ||
            drinkSelectedId ||
            snackSideSelectedId
        )
    }, [bestMenuSelectedId, burgerMenuSelectedId, chickenMenuSelectedId, drinkSelectedId, snackSideSelectedId])

    const onBack = () => {
        navigate(-1)        
        dispatch(setBackDefaultCount(1))
        dispatch(setResetProductTitle(activeIndex))
    }
    
    const onBasket = () => {
        const basketInProduct = {
            productID: productsId,
            count:productDetailCount,
            price: detailProdctTotal,
            option: optionChoice,
            title: productTitle,
            optionName: optionName,
            originPrice: originPrice
        }
    
        dispatch(fetchBasketInProduct(basketInProduct));
        alert(`상품이 장바구니에 담겼습니다`)
        navigate(`/basket`)
    }

    const displayTitle = productTitle !== '' ? productTitle : categoryTitle
    return (
        <>
            <div className="topBox">
                <h2>{displayTitle}</h2>
                <a href="#" className="btn_back" onClick={onBack}><span className="blind">뒤로가기</span></a>
                <a href="#" className="btn_basket" onClick={onBasket}><span className="blind">장바구니</span></a>
            </div>
        </>
    )
}

export default Top