import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBasketInProduct } from '../../redux/setBasketAction'
import {useNavigate} from 'react-router-dom'

// 메모이제이션된 셀렉터 정의
const selectBestMenuSelectedId = state => state.setMenu.bestMenuSelectedId
const selectProductDetailCount = state => state.productDetailCount
const selectOptionChoice = state => state.optionChoice
const selectDetailProdctTotal = state => state.detailProdctTotal
const selectProductTitle = state => state.setMenu.productTitle
const selectOptionName = state => state.optionChoiceName
const selectOriginPrice = state => state.setBasket.originProductPrice

const Button = () => {
  // 상태구독
  const bestMenuSelectedId = useSelector(selectBestMenuSelectedId)
  const productDetailCount = useSelector(selectProductDetailCount)
  const optionChoice = useSelector(selectOptionChoice)
  const detailProdctTotal = useSelector(selectDetailProdctTotal)
  const productTitle = useSelector(selectProductTitle)
  const optionName = useSelector(selectOptionName)
  const originPrice = useSelector(selectOriginPrice)

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

  const navigate = useNavigate()

  const onBasket = () => {
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