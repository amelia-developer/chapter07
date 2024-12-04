import React from 'react'
import {connect} from 'react-redux'
import {fetchBasketInProduct, setSelectedBestMenuProductId} from '../../redux/action'

const mapStateToProps = state => {
  return {
    bestMenuSelectedId: state.bestMenuSelectedId,
    productDetailCount: state.productDetailCount,
    detailProdctTotal: state.detailProdctTotal,
    optionChoice: state.optionChoice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedBestMenuProductId:selectedProductId => dispatch(setSelectedBestMenuProductId(selectedProductId)),
    fetchBasketInProduct:(bestMenuSelectedId, productDetailCount, detailProdctTotal, optionChoice) => dispatch(fetchBasketInProduct(bestMenuSelectedId, productDetailCount, detailProdctTotal, optionChoice))
  }
}

const Button = ({bestMenuSelectedId, productDetailCount, detailProdctTotal, optionChoice, fetchBasketInProduct}) => {

  const onBasket = () => {
    fetchBasketInProduct(bestMenuSelectedId, productDetailCount, detailProdctTotal, optionChoice);
    alert(`상품이 장바구니에 담겼습니다`)
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

export default connect(mapStateToProps, mapDispatchToProps)(Button)