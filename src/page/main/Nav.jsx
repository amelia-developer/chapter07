import React from 'react'
import { useState } from 'react'

const Nav = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(null)
    const [isNaviMenu, setIsNaviMenu] = useState(false)
    const onNaviMenu = () => {        
        setIsNaviMenu(!isNaviMenu)
    }

    const onSubMenu = (menu) => {
        setIsActiveMenu(isActiveMenu === menu ? null : menu)
    }
    
    return (
        <>
            <div className="tab">
                <h1>KFC</h1>
                <a href="#" className="btn_menu" onClick={onNaviMenu}>
                    <span className="blind">메뉴</span>
                    <span className="menu"></span>
                </a>
            </div>
            <nav className={isNaviMenu === true ? 'on' : ''}>
                <a className="btn_close" onClick={onNaviMenu}><span></span></a>
                <ul>
                    <li>
                        <a href="#" className={isActiveMenu === 'DELIVERY' ? "btn_subMenu on" : "btn_subMenu"} onClick={()=>onSubMenu('DELIVERY')}>DELIVERY</a>
                        <ul className="subMenu">
                            <li><a href="#">추천메뉴</a></li>
                            <li><a href="#">치킨&세트</a></li>
                            <li><a href="#">버거&세트</a></li>
                            <li><a href="#">스낵&사이드</a></li>
                            <li><a href="#">음료</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className={isActiveMenu === 'STORE' ? "btn_subMenu on" : "btn_subMenu"} onClick={()=>onSubMenu('STORE')}>STORE</a>
                        <ul className="subMenu">
                            <li><a href="#">매장찾기</a></li>
                        </ul>
                    </li>
                    <li><a href="#">EVENT</a></li>
                    <li><a href="#">KFC SERVICE</a></li>
                    <li><a href="#">가맹 및 입점 문의</a></li>
                </ul>
            </nav>
        </>
        
    )
}

export default Nav
