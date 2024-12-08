import React, { useEffect } from 'react'
import recycle from '../../img/ico_recycle.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBasketCallProduct, setEachProductMinus } from '../../redux/action'

// 메모이제이션 셀렉터 정의
const selectCallProductInfo = state => state.callProductInfo

const OrderList = () => {
    // 상태구독
    const callProductInfo = useSelector(selectCallProductInfo)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBasketCallProduct())
    }, [dispatch]) // 단순히 비동기액션만 호출할때는 의존성배열에 dispatch를 넣어도됨

    const countTotal = callProductInfo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.count
    }, 0)

    const priceTotal = callProductInfo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
    }, 0)
    const priceTotalCommaDigit = priceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    const onMinusCount = (param) => {
        // 하는중하는중...........리듀서에쓰던거 재활용...? 
        // dispatch(fetchEachProductMinus(param-1))
        // console.log(`callProductInfo = ${JSON.stringify(param)}`);
        dispatch(setEachProductMinus(param-1))
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
                                                <img src={`/images/${value.id}.png`} alt=""/>
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
                                                    <button className="minus" onClick={() => onMinusCount(value.count)}>-</button>
                                                    <input type="text" readOnly="readyOnly" value={value.count}/>
                                                    <button className="plus">+</button>
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