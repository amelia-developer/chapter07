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
    const [isDimed, setIsDimed] = useState(false)
    const dispatch = useDispatch()
    const cateName = useSelector(state => state.other.categoryTitle)

    const toggleNaviMenu = () => {        
        setIsNaviMenu(!isNaviMenu)
        dispatch(setCategoryTitle(cateName))
    }

    return (
      <>
        <Nav className={isNaviMenu && !isDimed ? 'on' : ''} onNaviMenu={toggleNaviMenu} setIsDimed={setIsDimed} setIsNaviMenu={setIsNaviMenu}/>
        <Routes>
            <Route path="/" element={<Main onNaviMenu={toggleNaviMenu}/>} />
            <Route path="/detail/*" element={<Detail onNaviMenu={toggleNaviMenu} cateName={cateName}/>} />
            <Route path="/basket" element={<Basket />}/>
        </Routes>
      </>
    );
};

export default App;
