import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBestMenu, fetchChicken, fetchBurger, fetchSnackSide, fetchDrink, setCategoryTitle } from '../../redux/action';
import DetailCategory from './DetailCategory';

const DetailCategoryBind = ({onProductClick}) => {
    const { indexNumber } = useParams();
    const dispatch = useDispatch()

    // 상태구독
    const bestMenu = useSelector(state => state.other.bestMenu)
    const chickenSet = useSelector(state => state.other.chickenSet)
    const burgerSet = useSelector(state => state.other.burgerSet)
    const snackSideSet = useSelector(state => state.other.snackSideSet)
    const drinkSet = useSelector(state => state.other.drink)
    
    useEffect(() => {  
        if(!indexNumber) return // indexNumber이 없을때 무시  
        if(indexNumber !== undefined) {    
            switch(indexNumber) {
                case 0:
                    dispatch(setCategoryTitle('추천메뉴'))
                    dispatch(fetchBestMenu())
                    break;
                case 1:
                    dispatch(setCategoryTitle('치킨세트'))
                    dispatch(fetchChicken())
                    break;
                case 2:
                    dispatch(setCategoryTitle('버거세트'))
                    dispatch(fetchBurger())
                    break;
                case 3:
                    dispatch(setCategoryTitle('스낵사이드'))
                    dispatch(fetchSnackSide())
                    break;
                case 4:
                    dispatch(setCategoryTitle('음료'))
                    dispatch(fetchDrink())
                    break;
                default:
                    break;
            }
        }
    }, [indexNumber, dispatch])

    return (
        <>
            <DetailCategory
                bestMenu={bestMenu}
                chickenSet={chickenSet}
                burgerSet={burgerSet}
                snackSideSet={snackSideSet}
                drinkSet={drinkSet}
                activeIndex={parseInt(indexNumber)}
                onProductClick={onProductClick}
            ></DetailCategory>
        </>
    );
}

export default DetailCategoryBind;
