import React, { useEffect } from 'react'
// import sprite from '../../img/logo.jpg'
import { useDispatch, useSelector } from "react-redux"
import { fetchBestMenu, setLoading, setActiveIndex, setUpdateCategory } from '../../redux/action'
import { setSelectedBestMenuProductId } from '../../redux/setMenuAction'
import { useNavigate } from 'react-router-dom'

const BestMenu = ({topTitle, setTopTitle}) => {
    const dispatch = useDispatch()
    const pageNavigate = useNavigate()

    const bestMenu = useSelector(state => state.other.bestMenu)
    const loading = useSelector(state => state.other.loading)

    useEffect(()=> {
        dispatch(setLoading())
        dispatch(fetchBestMenu(bestMenu))
    }, [bestMenu, dispatch])

    // if (loading) { {/**TODO:해야함*/}
    //     return <div>로딩중 로딩중 로딩중</div>
    // }

    const onDetailProduct = (param) => {
        dispatch(setActiveIndex(0));
        dispatch(setUpdateCategory(0));
        dispatch(setSelectedBestMenuProductId(param))
        // navigate
        pageNavigate(`/detail?id=${param}`)
    }

    const onGoBestMenu = () => {
        dispatch(setActiveIndex(0))
        dispatch(setUpdateCategory(0))
        if(topTitle === '' || topTitle === undefined || topTitle !== '추천메뉴') {
          setTopTitle("추천메뉴")
        }
        pageNavigate(`/detail/category/0`)
    }
    return (
        <>
            <div className="bestBox">
                <div className="title">
                    {/* <img src={sprite} alt=""/> */}
                    <h2>BEST MENU</h2>
                </div>
                <div className="items">
                    <ul>
                        {
                            bestMenu.map((value, idx) => {
                                // console.log(`value = ${JSON.stringify(value)}`);
                                return   <li key={idx}>
                                            <a onClick={() => onDetailProduct(value.id)}>
                                                <img src={`/images/${value.id}.png`} alt={value.title}/> 
                                        {/**src>img로 하면 빌드과정 필요 및 빌드과정에서 변환, 그리고 import도 필요함. 
                                         * 따라서 정적파일(폰트,이미지, 아이콘)등은 public으로 넣고, 이는 빌드과정에 포함되지 않음*/}
                                                <span className="title_menu">{value.title}</span>
                                                <span className="sub_text">{value.subText}</span>
                                                <span className="price">{value.price}</span>
                                            </a>
                                        </li>
                            })
                        }
                    </ul>
                </div>
                <div className="btnMoreMenu">
                    <a onClick={onGoBestMenu}>MORE MENU &gt;</a>
                </div>
            </div>
        </>
    )
}

export default BestMenu