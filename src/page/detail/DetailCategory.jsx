import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setSelectedBestMenuProductId, setSelectedChickenProductId} from '../../redux/action'

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
       
        if(selectCategory) {
            setResultCateGory(selectCategory.setName)
        }        
    }, [bestMenu, chickenSet, burgerSet, snackSideSet, drinkSet, activeIndex])

    const onDetailProduct = (param) => {
        if(activeIndex === 0) {
            dispatch(setSelectedBestMenuProductId(param))
            dispatch(setSelectedChickenProductId(null))
        } else if(activeIndex === 1) {
            dispatch(setSelectedChickenProductId(param))
            dispatch(setSelectedBestMenuProductId(null))
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
