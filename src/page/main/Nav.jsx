import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setUpdateCategory, setActiveIndex, setLayerState } from '../../redux/action'
import { useDispatch } from 'react-redux'
import LayerInfo3 from '../layer/LayerInfo3'

const Nav = ({className, onNaviMenu, setTopTitle, setIsDimed, setIsNaviMenu}) => {
    const [isActiveMenu, setIsActiveMenu] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const onSubMenu = (menu) => {
        setIsActiveMenu(isActiveMenu === menu ? null : menu)
    }

    const [isLayerOpen, setIsLayerOpen] = useState(false)
    const [activeLayer, setActiveLayer] = useState(null)

    const onMoveCategory = (categoryNumber, cateName) => {
        navigate(`/detail/category/${categoryNumber}`)
        dispatch(setUpdateCategory(categoryNumber))
        dispatch(setActiveIndex(categoryNumber))
        setTopTitle(cateName)
        if(categoryNumber === 5) { // 5번이면 '주소등록' 딤드레이어팝업을 보여줌
            setIsLayerOpen(true)
            setActiveLayer('LayerInfo3')
            setIsDimed(true)
            setIsNaviMenu(true)
        }
    }

    const onLayerClose = (index) => {
        setActiveIndex(index)
        setIsLayerOpen(false)
        setIsDimed(false)
        setIsNaviMenu(false)
        document.body.style.overflowY='auto'
    }

    const onMoveHome = () => {
        navigate(`/`)
        dispatch(setLayerState(false, null))
    }

    return (
        <>
            <div className="tab">
                <h1 onClick={onMoveHome}>BURGER</h1>
                <a className="btn_menu" onClick={onNaviMenu}>
                    <span className="blind">메뉴</span>
                    <span className="menu"></span>
                </a>
            </div>
            <nav className={className}>
                <a className="btn_close" onClick={onNaviMenu}><span></span></a>
                <ul>
                    <li>
                        <a href="#" className={isActiveMenu === 'DELIVERY' ? "btn_subMenu on" : "btn_subMenu"} onClick={()=>onSubMenu('DELIVERY')}>DELIVERY</a>
                        <ul className="subMenu">
                            <li><a onClick={() => onMoveCategory(0, '추천메뉴')}>추천메뉴</a></li>
                            <li><a onClick={() => onMoveCategory(1, '치킨&세트')}>치킨&세트</a></li>
                            <li><a onClick={() => onMoveCategory(2, '버거&세트')}>버거&세트</a></li>
                            <li><a onClick={() => onMoveCategory(3, '스낵&사이드')}>스낵&사이드</a></li>
                            <li><a onClick={() => onMoveCategory(4, '음료')}>음료</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className={isActiveMenu === 'STORE' ? "btn_subMenu on" : "btn_subMenu"} onClick={()=>onSubMenu('STORE')}>STORE</a>
                        <ul className="subMenu">
                            <li><a onClick={() => onMoveCategory(5, '주소등록')}>주소등록</a></li>
                        </ul>
                    </li>
                    <li><a href="#">EVENT</a></li>
                    <li><a href="#">KFC SERVICE</a></li>
                    <li><a href="#">가맹 및 입점 문의</a></li>
                </ul>
                
            </nav>
            {
                isLayerOpen === true && activeLayer === 'LayerInfo3' ? <LayerInfo3 isLayerOpen={onMoveCategory} isLayerClose={onLayerClose}></LayerInfo3> : null
            }
        </>
        
    )
}

export default Nav
