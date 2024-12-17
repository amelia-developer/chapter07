import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './page/main/Main'
import Detail from './page/detail/Detail'
import Nav from './page/main/Nav'
import Basket from './page/basket/Basket'
import "./scss/chapter07.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryTitle } from './redux/action'

const App = () => {
    const [isNaviMenu, setIsNaviMenu] = useState(false)
    const dispatch = useDispatch()
    const cateName = useSelector(state => state.categoryTitle)
    const toggleNaviMenu = () => {
        setIsNaviMenu(!isNaviMenu)
        dispatch(setCategoryTitle(cateName))
    }

    const [topTitle, setTopTitle] = useState("") // 상단 타이틀상태

    return (
      <>
        <Nav className={isNaviMenu ? 'on' : ''} onNaviMenu={toggleNaviMenu} setTopTitle={setTopTitle}/>
        <Routes>
            <Route path="/" element={<Main isNaviMenu={isNaviMenu} onNaviMenu={toggleNaviMenu} />} />
            <Route path="/detail/*" element={<Detail isNaviMenu={isNaviMenu} onNaviMenu={toggleNaviMenu} topTitle={topTitle} setTopTitle={setTopTitle}/>} />
            <Route path="/basket" element={<Basket />}/>
        </Routes>
      </>
    );
};

export default App;
