import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import icon1 from '../../img/dv_mn_new.png'
import icon2 from '../../img/dv_mn_set_chicken.png'
import icon3 from '../../img/dv_mn_set_burger.png'
import icon4 from '../../img/dv_mn_side_menu.png'
import icon5 from '../../img/dv_mn_drink.png'
import icon6 from '../../img/db_mn_address.png'
import { connect } from 'react-redux'
import {fetchBestMenu, fetchChicken, fetchBurger, fetchSnackSide, fetchDrink} from '../../redux/action'
import DetailCategory from './DetailCategory'

const mapStateToProps = state => {
    return {
        bestMenu: state.other.bestMenu,
        chickenSet: state.other.chickenSet,
        burgerSet: state.other.burgerSet,
        snackSideSet: state.other.snackSideSet,
        drinkSet2: state.other.drink
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBestMenu: () => dispatch(fetchBestMenu()),
        fetchChicken: () => dispatch(fetchChicken()),
        fetchBurger: () => dispatch(fetchBurger()),
        fetchSnackSide: () => dispatch(fetchSnackSide()),
        fetchDrink: () => dispatch(fetchDrink())
    }
}


const MenuList = ({bestMenu, fetchBestMenu, chickenSet, fetchChicken, burgerSet, fetchBurger,
    snackSideSet, fetchSnackSide, drinkSet2, fetchDrink, onShowCategoryMenu, onProductClick, showCategoryList}) => {

    const [activeIndex, setActiveIndex] = useState()

    useEffect(()=> {
        if(activeIndex === 0) {
            fetchBestMenu()
        } else if(activeIndex === 1) {
            fetchChicken()
        } else if(activeIndex === 2) {
            fetchBurger()
        } else if(activeIndex === 3) {
            fetchSnackSide()
        } else if(activeIndex === 4) {
            fetchDrink()
        }
    }, [activeIndex, fetchBestMenu, fetchChicken, fetchBurger, fetchSnackSide, fetchDrink])

    const onSelectDetailMenu = (indexNumber) => {
        setActiveIndex(indexNumber)
        onShowCategoryMenu() // 메뉴클릭시 호출
    }

    return (
        <>
            <div className="menuLisBox">
                {
                    /** 
                     * 각각의 swiperSlide컴포넌트는 고유한 인덱스를 갖고있다
                     * 반복적인 형태를 뭔가로 만들어서 뽑아낼때만 인덱스를 갖고있는것이 아니라, 날것 그대로의 리스트 배열이라
                     * 하여도, 이 각 리스트들은 고유한 인덱스를 갖고있다 ex) ul안에 li가 3개면 각 li는 0번째인덱스, 1번째인덱스 를 갖고있다
                     */
                }
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2.5}
                    style={{width:'100%', height:'100%'}}
                >
                    <SwiperSlide><a onClick={() => onSelectDetailMenu(0)} className={activeIndex === 0 ? 'active': ''}><span className="img_cover"><img src={icon1} alt="추천메뉴"/></span><span>추천메뉴</span></a></SwiperSlide>
                    <SwiperSlide><a onClick={() => onSelectDetailMenu(1)} className={activeIndex === 1 ? 'active': ''}><span className="img_cover"><img src={icon2} alt="치킨세트"/></span><span>치킨&세트</span></a></SwiperSlide>
                    <SwiperSlide><a onClick={() => onSelectDetailMenu(2)} className={activeIndex === 2 ? 'active': ''}><span className="img_cover"><img src={icon3} alt="버거세트"/></span><span>버거&세트</span></a></SwiperSlide>
                    <SwiperSlide><a onClick={() => onSelectDetailMenu(3)} className={activeIndex === 3 ? 'active': ''}><span className="img_cover"><img src={icon4} alt="스낵사이드"/></span><span>스낵&사이드</span></a></SwiperSlide>
                    <SwiperSlide><a onClick={() => onSelectDetailMenu(4)} className={activeIndex === 4 ? 'active': ''}><span className="img_cover"><img src={icon5} alt="음료"/></span><span>음료</span></a></SwiperSlide>
                    <SwiperSlide><a onClick={() => onSelectDetailMenu(5)} className={activeIndex === 5 ? 'active': ''}><span className="img_cover"><img src={icon6} alt="주소등록"/></span><span>주소등록</span></a></SwiperSlide>
                </Swiper>
                {
                    showCategoryList && 
                    <div className="categoryListBox">
                        {                        
                            activeIndex === 0 || activeIndex === 1 || activeIndex === 2 || 
                            activeIndex === 3 || activeIndex === 4
                            ? <DetailCategory bestMenu={bestMenu} chickenSet={chickenSet} burgerSet={burgerSet} 
                            snackSideSet={snackSideSet} drinkSet={drinkSet2} activeIndex={activeIndex} onProductClick={onProductClick}></DetailCategory> : null
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)
