import React, { useEffect } from 'react'
import recycle from '../../img/ico_recycle.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBasketCallProduct, fetchEachProductMinus, fetchEachProductPlus  } from '../../redux/setBasketAction'

// 메모이제이션 셀렉터 정의
const selectCallProductInfo = state => state.setBasket.callProductInfo
const selectEachProductMinus = state => state.setBasket.eachProductMinus
const selectEachProductPlus = state => state.setBasket.eachProductPlus

const OrderList = () => {
    // 상태구독
    const callProductInfo = useSelector(selectCallProductInfo)
    const eachProductMinus = useSelector(selectEachProductMinus)
    const eachProductPlus = useSelector(selectEachProductPlus)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBasketCallProduct())
    }, [dispatch, eachProductMinus, eachProductPlus]) // 단순히 비동기액션만 호출할때는 의존성배열에 dispatch를 넣어도됨

    const countTotal = callProductInfo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.count
    }, 0)

    const priceTotal = callProductInfo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
    }, 0)
    const priceTotalCommaDigit = priceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    const onMinusCount = (product) => {
        if(product.count > 1 && product.id) {
            const newCount = product.count - 1
            const calculatePrice = product.price - product.originPrice
            const updateProductData = {
                ...product,
                count: newCount,
                price: calculatePrice
            }
            dispatch(fetchEachProductMinus(product.id, updateProductData, calculatePrice))
        }
    }

    const onPlusCount = (product) => {
        if(product.id) {
            const newCount = product.count + 1
            const calculatePrice = product.price + product.originPrice
            const updateProductData = {
                ...product,
                count: newCount,
                price: calculatePrice
            }
            dispatch(fetchEachProductPlus(product.id, updateProductData, calculatePrice))
        }
    }
    return (
        <>
            <div className="orderListBox">
                <ul className="raw">
                    {
                        callProductInfo.map((value, idx) => {
                            const formatPrice = (value.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            return  <li key={idx}>
                                        <div className="info">
                                            <div className="imgbox">
                                                <img src={`/images/${value.productID}.png`} alt=""/>
                                            </div>
                                            <div className="textbox">
                                                <h3>{value.title}</h3>
                                                <p>{value.optionName}</p>
                                                <a className="btn_delete"></a>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <p className="ico_price">{formatPrice}</p>
                                            <div className="amount">
                                                <span>
                                                    <button className="minus" onClick={() => onMinusCount(value)}>-</button>
                                                    <input type="text" readOnly="readyOnly" value={value.count}/>
                                                    <button className="plus" onClick={() => onPlusCount(value)}>+</button>
                                                </span>
                                            </div>
                                        </div>                                        
                                    </li>
                        })
                    }
                    <div className="bottom">
                        <div className="total">
                            <div className="values">
                                <dl className="amount">
                                    <dt>담긴 상품</dt>
                                    <dd>       
                                        <span className="nanum">{countTotal}개</span>                              
                                        <a><img src={recycle} alt="지우기"/></a>
                                    </dd>
                                </dl>
                                <dl className="price">
                                    <dt>담긴 상품</dt>
                                    <dd><span className="ico_price black">{priceTotalCommaDigit}</span></dd>
                                </dl>
                            </div>
                            <a className="btn_order">주문하기</a>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default OrderList