import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBestMenu, fetchChicken, fetchBurger, fetchSnackSide, fetchDrink } from '../../redux/action';
import DetailCategory from './DetailCategory';


const DetailCategoryPage = ({onProductClick}) => {
    const { indexNumber } = useParams();
    const dispatch = useDispatch()

    // 상태구독
    const bestMenu = useSelector(state => state.other.bestMenu)
    const chickenSet = useSelector(state => state.other.chickenSet)
    const burgerSet = useSelector(state => state.other.burgerSet)
    const snackSideSet = useSelector(state => state.other.snackSideSet)
    const drinkSet = useSelector(state => state.other.drink)
    
    useEffect(() => {    
        if(indexNumber !== undefined) {    
            switch(indexNumber) {
                case '0':
                    dispatch(fetchBestMenu())
                    break;
                case '1':
                    dispatch(fetchChicken())
                    break;
                case '2':
                    dispatch(fetchBurger())
                    break;
                case '3':
                    dispatch(fetchSnackSide())
                    break;
                case '4':
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
            />
        </>
    );
}

export default DetailCategoryPage;
