import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBasketInProduct } from '../../redux/setBasketAction'
import {useNavigate} from 'react-router-dom'

// 메모이제이션된 셀렉터 정의
const selectBestMenuSelectedId = state => state.setMenu.bestMenuSelectedId
const selectBurgerMenuSelectedId = state => state.setMenu.burgerSelectedId
const selectChickenMenuSelectedId = state => state.setMenu.chickenSelectedId
const selectDrinkSelectedId = state => state.setMenu.drinkSelectedId
const selectSnackSideSelectedId = state => state.setMenu.snackSideSelectedId
const selectProductDetailCount = state => state.other.productDetailCount
const selectOptionChoice = state => state.other.optionChoice
const selectDetailProdctTotal = state => state.other.detailProdctTotal
const selectProductTitle = state => state.setMenu.productTitle
const selectOptionName = state => state.other.optionChoiceName
const selectOriginPrice = state => state.setBasket.originProductPrice

const Button = () => {
  // 상태구독
  const bestMenuSelectedId = useSelector(selectBestMenuSelectedId)
  const burgerMenuSelectedId = useSelector(selectBurgerMenuSelectedId)
  const chickenMenuSelectedId = useSelector(selectChickenMenuSelectedId)
  const drinkSelectedId = useSelector(selectDrinkSelectedId)
  const snackSideSelectedId = useSelector(selectSnackSideSelectedId)
  const productDetailCount = useSelector(selectProductDetailCount)
  const optionChoice = useSelector(selectOptionChoice)
  const detailProdctTotal = useSelector(selectDetailProdctTotal)
  const productTitle = useSelector(selectProductTitle)
  const optionName = useSelector(selectOptionName)
  const originPrice = useSelector(selectOriginPrice)

  const dispatch = useDispatch()

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

  const navigate = useNavigate()

  const onBasket = () => {
    const basketInProduct = {
      productID: productsId, // 베스트메뉴id or 치킨상품id or 버거상품id or 스넥사이드상품id or 음료id
      count: productDetailCount,
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

  return (
    <>
      <div className="btnBox">
        <a className="btn_basket" onClick={onBasket}>장바구니</a>
        <a className="btn_order">바로주문</a>
      </div>
    </> 
  )
}

export default Button