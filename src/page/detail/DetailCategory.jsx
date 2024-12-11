import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setSelectedBestMenuProductId, setSelectedChickenProductId, setSelectedBurgerProductId, setSelectedSnackSideProductId, setSelectedDrinkProductId} from '../../redux/setMenuAction'

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
                                            <a className="btn_basket"><span className="blind">장바구니</span></a>
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
