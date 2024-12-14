import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setSelectedBestMenuProductId, setSelectedChickenProductId, setSelectedBurgerProductId,
setSelectedSnackSideProductId, setSelectedDrinkProductId} from '../../redux/setMenuAction'
import { fetchBasketInProduct } from '../../redux/setBasketAction'

const DetailCategory = ({bestMenu, chickenSet, burgerSet, snackSideSet, drinkSet, activeIndex, onProductClick}) => {
    const [resultCategory, setResultCateGory] = useState([])
    const pageNavigate = useNavigate()
    const dispatch = useDispatch()

    // 상태구독
    const bestMenuSelectedId = useSelector(state => state.setMenu.bestMenuSelectedId)
    const burgerMenuSelectedId = useSelector(state => state.setMenu.burgerSelectedIdctBurgerMenuSelectedId)
    const chickenMenuSelectedId = useSelector(state => state.setMenu.chickenSelectedId)
    const drinkSelectedId = useSelector(state => state.setMenu.drinkSelectedId)
    const snackSideSelectedId = useSelector(state => state.setMenu.snackSideSelectedId)
    const productDetailCount = useSelector(state => state.other.productDetailCount)
    const optionChoice = useSelector(state => state.other.optionChoice)
    const detailProdctTotal = useSelector(state => state.other.detailProdctTotal)
    const productTitle = useSelector(state => state.setMenu.productTitle)
    const optionName = useSelector(state => state.other.optionChoiceName)
    const originPrice = useSelector(state => state.setBasket.originProductPrice)

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
    
    const onDetailProduct = async(param) => {
        if(activeIndex === 0) {
            await dispatch(setSelectedBestMenuProductId(param))
            await dispatch(setSelectedChickenProductId(null))
            await dispatch(setSelectedBurgerProductId(null))
            await dispatch(setSelectedSnackSideProductId(null))
            await dispatch(setSelectedDrinkProductId(null)) 
        } else if(activeIndex === 1) {
            await dispatch(setSelectedChickenProductId(param))
            await dispatch(setSelectedBestMenuProductId(null))
            await dispatch(setSelectedBurgerProductId(null))
            await dispatch(setSelectedSnackSideProductId(null)) 
            await dispatch(setSelectedDrinkProductId(null)) 
        } else if(activeIndex === 2) {
            await dispatch(setSelectedBurgerProductId(param))
            await dispatch(setSelectedChickenProductId(null))
            await dispatch(setSelectedBestMenuProductId(null))
            await dispatch(setSelectedSnackSideProductId(null))
            await dispatch(setSelectedDrinkProductId(null)) 
        } else if(activeIndex === 3) {
            await dispatch(setSelectedSnackSideProductId(param))
            await dispatch(setSelectedChickenProductId(null))
            await dispatch(setSelectedBestMenuProductId(null))
            await dispatch(setSelectedBurgerProductId(null))
            await dispatch(setSelectedDrinkProductId(null))  
        } else if(activeIndex === 4) {
            await dispatch(setSelectedDrinkProductId(param)) 
            await dispatch(setSelectedChickenProductId(null))
            await dispatch(setSelectedBestMenuProductId(null))
            await dispatch(setSelectedBurgerProductId(null))
            await dispatch(setSelectedSnackSideProductId(null))  
        }
        // navigate
        pageNavigate(`/detail?id=${param}`)
        onProductClick()
    }

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

        // dispatch(fetchBasketInProduct(basketInProduct)); // 이거하는중(카테고리에서 장바구니아이콘 클릭했을때 올바르게 담기지 않아서 임시주석)
        alert(`상품이 장바구니에 담겼습니다`)
console.log(`basketInProduct = ${JSON.stringify(basketInProduct)}`);
        // pageNavigate(`/basket`) // 이거하는중(카테고리에서 장바구니아이콘 클릭했을때 올바르게 담기지 않아서 임시주석)
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
                                            <a className="btn_basket" onClick={onBasket}><span className="blind">장바구니</span></a>
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
