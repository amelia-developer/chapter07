import React, { useEffect, useState } from 'react'

const DetailCategory = ({bestMenu, chichenSet, activeIndex}) => {
    const [resultCategory, setResultCateGory] = useState([])

    useEffect(() => {
        let cateGubun = [
            {
                idx: 0,
                setName: bestMenu
            },
            {
                idx:1,
                setName: chichenSet
            }
        ] 
        let selectCategory = cateGubun.find((value) => value.idx === activeIndex)
        
        if(selectCategory) {
            setResultCateGory(selectCategory.setName)
        }        
    }, [bestMenu, chichenSet, activeIndex])
{/**TODO:해야함_치킨이미지넣는거부터 */}
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
                                        <p className="price">{value.price}</p>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default DetailCategory 
