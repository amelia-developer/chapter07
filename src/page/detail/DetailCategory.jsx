import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setSelectedBestMenuProductId, setSelectedChickenProductId, setSelectedBurgerProductId,
setSelectedSnackSideProductId, setSelectedDrinkProductId} from '../../redux/setMenuAction'
import { fetchBasketInProduct } from '../../redux/setBasketAction'

const DetailCategory = ({bestMenu, chickenSet, burgerSet, snackSideSet, drinkSet, activeIndex, onProductClick}) => {
    const [resultCategory, setResultCateGory] = useState([])
    const pageNavigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        let cateGubun = [
            {
                idx: 0,
                setName: bestMenu
            },
            {
                idx:1,
                setName: chickenSet
            },
            {
                idx:2,
                setName: burgerSet
            },
            {
                idx:3,
                setName: snackSideSet
            },
            {
                idx:4,
                setName: drinkSet
            }
        ] 
        let selectCategory = cateGubun.find((value) => value.idx === activeIndex)
       
        if(selectCategory && selectCategory.setName) {
            setResultCateGory(selectCategory.setName)
        }
    }, [bestMenu, chickenSet, burgerSet, snackSideSet, drinkSet, activeIndex])
    
    const actionMap  = {
        0: setSelectedBestMenuProductId,
        1: setSelectedChickenProductId,
        2: setSelectedBurgerProductId,
        3: setSelectedSnackSideProductId,
        4: setSelectedDrinkProductId
    }

    const onDetailProduct = async(param) => {
        const action = actionMap[activeIndex]
        if(action) {
            await dispatch(action(param))
        }
        // if(activeIndex === 0) {
        //     await dispatch(setSelectedBestMenuProductId(param))
        // } else if(activeIndex === 1) {
        //     await dispatch(setSelectedChickenProductId(param))
        // } else if(activeIndex === 2) {
        //     await dispatch(setSelectedBurgerProductId(param))
        // } else if(activeIndex === 3) {
        //     await dispatch(setSelectedSnackSideProductId(param))
        // } else if(activeIndex === 4) {
        //     await dispatch(setSelectedDrinkProductId(param)) 
        // }
        // navigate
        pageNavigate(`/detail?id=${param}`)
        onProductClick()
    }

    const onBasket = (productInfo) => {
// console.log(`productInfo = ${JSON.stringify(productInfo)}`);

        const basketInProduct = {
            productID: productInfo.id, // 베스트메뉴id or 치킨상품id or 버거상품id or 스넥사이드상품id or 음료id
            count: 1,
            price: productInfo.price,
            option: '',
            title: productInfo.title,
            optionName: '',
            originPrice: productInfo.price
        }

        dispatch(fetchBasketInProduct(basketInProduct));
        alert(`상품이 장바구니에 담겼습니다`)
// console.log(`basketInProduct = ${JSON.stringify(basketInProduct)}`);
        pageNavigate(`/basket`)
    }

    return (
        <>
            <div className="detailCategoryBox">
                <ul>
                    {
                        resultCategory.map((value, idx)=> {
                            const formatPrice = (value.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')                       
                            return  <li key={idx}>
                                        <a onClick={() => onDetailProduct(value.id)}>
                                            <img src={`/images/${value.id}.png`} alt={value.title}/>
                                            <span className="title">{value.title}</span>
                                            <span className="subtext">{value.subText}</span>
                                        </a>
                                        <div className="order">
                                            <a className="btn_basket" onClick={() => onBasket(value)}><span className="blind">장바구니</span></a>
                                            <a className="btn_order"><span>바로주문</span></a>
                                        </div>
                                        <p className="price"><span>{formatPrice}</span></p>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default DetailCategory 
