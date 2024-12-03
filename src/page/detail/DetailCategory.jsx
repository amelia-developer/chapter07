import React, { useEffect, useState } from 'react'

const DetailCategory = ({bestMenu, chickenSet, burgerSet, snackSideSet, drinkSet, activeIndex}) => {
    const [resultCategory, setResultCateGory] = useState([])

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
    return (
        <>
            <div className="detailCategoryBox">
                <ul>
                    {
                        resultCategory.map((value, idx)=> {                            
                            return  <li key={idx}>
                                        <a>
                                            <img src={`/images/${value.id}.png`} alt={value.title}/>
                                            <span className="title">{value.title}</span>
                                            <span className="subtext">{value.subText}</span>
                                        </a>
                                        <div className="order">
                                            <a className="btn_basket"><span className="blind">장바구니</span></a>
                                            <a className="btn_order"><span>바로주문</span></a>
                                        </div>
                                        <p className="price"><span>{value.price}</span></p>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default DetailCategory 
