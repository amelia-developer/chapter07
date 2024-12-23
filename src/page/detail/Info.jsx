import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductCountMinus, setProductCountPlus, setOptionChoice, setDetailProductTotal, setOptionChoiceName} from '../../redux/action'
import { fetchSelectedBestMenuProductId, fetchSelectedChickenProductId, fetchSelectedBurgerProductId, fetchSelectedSnackSideProductId, fetchSelectedDrinkProductId } from '../../redux/setMenuAction'
import { setBasketInOriginProductPrice } from '../../redux/setBasketAction'
import LayerInfo1 from '../layer/LayerInfo1';
import LayerInfo2 from '../layer/LayerInfo2';
import { useLocation } from "react-router-dom";

const Info = () => {
    // 상태구독
    const bestMenuSelectedId = useSelector(state => state.setMenu.bestMenuSelectedId)
    const selectedBestMenuProduct = useSelector(state => state.setMenu.selectedBestMenuProduct)
    const productDetailCount = useSelector(state => state.other.productDetailCount)
    const optionChoice = useSelector(state => state.other.optionChoice)
    const chickenMenuSelectedId = useSelector(state => state.setMenu.chickenSelectedId)
    const chickenMenuProduct = useSelector(state => state.setMenu.selectedChickenMenuProduct)
    const burgerMenuSelectedId = useSelector(state => state.setMenu.burgerSelectedId)
    const burgerMenuProduct = useSelector(state => state.setMenu.selectedBurgerProduct)
    const snackSideSelectedId = useSelector(state => state.setMenu.snackSideSelectedId)
    const snackSideProduct = useSelector(state => state.setMenu.selectedSnackSideProduct)
    const drinkSelectedId = useSelector(state => state.setMenu.drinkSelectedId)
    const drinkProduct = useSelector(state => state.setMenu.selectedDrinkProduct)

    const dispatch = useDispatch()

    // const navigate = useNavigate() // 최상위 레벨에서 호출되도록(리엑트 훅들은 최상위 레벨에서만 호출되도록, useEffect/useState/useNavigage모두 동일)
    const [isLayerOpen, setIsLayerOpen] = useState(false)
    const [activeLayer, setActiveLayer] = useState(null)

    const location = useLocation();
    const queryStr = new URLSearchParams(location.search);
    const productNumber = queryStr.get('id');

    // ★이게 핵심임, 리덕스초기화하는 useEffect(동기적성격) 에서 핵심은 1. url매개변수기반 초기화 2. 리덕스기반 초기화
    useEffect(() => { // 화면새로고침시 state유지_새로고침하면 컴포넌트가 마운트되면서 리덕스상태 초기화
        const initializeState = async() => { // async를 쓴이유는 비동기작업dispatch의 완료를 기다리려고
            const selectedId = bestMenuSelectedId || chickenMenuSelectedId || burgerMenuSelectedId || snackSideSelectedId || drinkSelectedId;

            if(!selectedId) {
                // url기반 초기화상태
                await dispatch(fetchSelectedBestMenuProductId(productNumber)) // 이거하는중
                await dispatch(fetchSelectedChickenProductId(productNumber))
                await dispatch(fetchSelectedBurgerProductId(productNumber))
                await dispatch(fetchSelectedSnackSideProductId(productNumber))
                await dispatch(fetchSelectedDrinkProductId(productNumber))
            } else {
                // 리덕스기반 초기화상태
                if(bestMenuSelectedId) {
                    await dispatch(fetchSelectedBestMenuProductId(productNumber))                    
                }
                if(chickenMenuSelectedId) {
                    await dispatch(fetchSelectedChickenProductId(productNumber))
                }
                if(burgerMenuSelectedId) {
                    await dispatch(fetchSelectedBurgerProductId(productNumber))
                }
                if(snackSideSelectedId) {
                    await dispatch(fetchSelectedSnackSideProductId(productNumber))
                }
                if(drinkSelectedId) {
                    await dispatch(fetchSelectedDrinkProductId(productNumber))
                }
            }
        }
        initializeState()
    }, [bestMenuSelectedId, chickenMenuSelectedId, burgerMenuSelectedId, snackSideSelectedId, drinkSelectedId, productNumber, dispatch]); 

    const [typeOfTotalPrice, setTypeOfTotalPrice] = useState('')
    // 베스트메뉴
    useEffect(() => {
        if(selectedBestMenuProduct) { // 비동기로 state값들을 불러올때 체크해야하는 3가지(undefined, null, 빈값) 中 나는 빈값체크(=length)
            const calculatePrice = ((optionChoice + selectedBestMenuProduct.price) * productDetailCount)
            const calculatePriceCommaDigit = calculatePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

            setTypeOfTotalPrice(calculatePriceCommaDigit)
            
            dispatch(setBasketInOriginProductPrice(selectedBestMenuProduct.price)) // 상품의 원가
            dispatch(setDetailProductTotal(calculatePrice))
        }
    }, [productDetailCount, optionChoice, selectedBestMenuProduct, dispatch])

    // 치킨메뉴
    useEffect(() => {
        if(chickenMenuProduct) {
            const calculatePrice = ((optionChoice + chickenMenuProduct.price) * productDetailCount)
            const calculatePriceCommaDigit = calculatePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

            setTypeOfTotalPrice(calculatePriceCommaDigit)

            dispatch(setBasketInOriginProductPrice(chickenMenuProduct.price))
            dispatch(setDetailProductTotal(calculatePrice))
        }
    }, [productDetailCount, optionChoice, chickenMenuProduct, dispatch])

    // 버거메뉴
    useEffect(() => {
        if(burgerMenuProduct) {
            const calculatePrice = ((optionChoice + burgerMenuProduct.price) * productDetailCount)
            const calculatePriceCommaDigit = calculatePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

            setTypeOfTotalPrice(calculatePriceCommaDigit)

            dispatch(setBasketInOriginProductPrice(burgerMenuProduct.price))
            dispatch(setDetailProductTotal(calculatePrice))
        }
    }, [productDetailCount, optionChoice, burgerMenuProduct, dispatch])

    // 스낵사이드메뉴
    useEffect(() => {
        if(snackSideProduct) {
            const calculatePrice = ((optionChoice + snackSideProduct.price) * productDetailCount)
            const calculatePriceCommaDigit = calculatePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

            setTypeOfTotalPrice(calculatePriceCommaDigit)

            dispatch(setBasketInOriginProductPrice(snackSideProduct.price))
            dispatch(setDetailProductTotal(calculatePrice))
        }
    }, [productDetailCount, optionChoice, snackSideProduct, dispatch])

    // 음료메뉴
    useEffect(() => {
        if(drinkProduct) {
            const calculatePrice = ((optionChoice + drinkProduct.price) * productDetailCount)
            const calculatePriceCommaDigit = calculatePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

            setTypeOfTotalPrice(calculatePriceCommaDigit)

            dispatch(setBasketInOriginProductPrice(drinkProduct.price))
            dispatch(setDetailProductTotal(calculatePrice))
        }
    }, [productDetailCount, optionChoice, drinkProduct, dispatch])

    const onCountMinus = () => {
        if(productDetailCount <= 1){
            productDetailCount = 1
        } else {
            dispatch(setProductCountMinus(productDetailCount-1))
        }
    }

    const onCountPlus = () => {
        dispatch(setProductCountPlus(productDetailCount+1))
    }

    const onSelectedOption = (e) => {
        dispatch(setOptionChoice(Number(e.target.value)))
        const selectOptionName = e.target.options[e.target.selectedIndex].text
        dispatch(setOptionChoiceName(selectOptionName))
    }

    // 딤드레이어열기
    const onLayerInfo1 = () => {
        setIsLayerOpen(true)
        setActiveLayer('LayerInfo1')
    }

    const onLayerInfo2 = () => {
        setIsLayerOpen(true)        
        setActiveLayer('LayerInfo2')
    }

    // 딤드레이어닫기(자식안에서 닫기행동하지말고, 부모에서 행동하면 부모컴포넌트에 한번만 기입해주면되니까)
    const onLayerClose = () => {
        setIsLayerOpen(false)
        document.body.style.overflowY = 'auto'
    }
    
    const renderProductDetail = (product) => (
        <div className="infoBox">
            <img src={`/images/${product.id}.png`} alt={product.title}/>
            <div className="title">{product.title}</div>
            <div className="itemInner">
                <span className="title">구성</span>
                <div className="optionBox">
                    <ul>
                        {
                            product.option && product.option.length > 0 ? (
                                product.option.map((element, idx) => { // li를 갖고오기위해
                                    // console.log(`element = ${JSON.stringify(element)}`);                            
                                    return  <li key={idx}>
                                                {element.values.length > 0 ? (
                                                    <select key={idx} onChange={onSelectedOption}>
                                                    {                                                    
                                                        element.values.map((optionValue, idx)=> { // option을 갖고오기위해
                                                            // console.log(`optionValue.label = ${optionValue.label}`);                                                        
                                                            // // console.log(`optionValue.value = ${JSON.stringify(optionValue.value)}`);
                                                            return <option key={idx} value={optionValue.price}>{optionValue.label}</option>
                                                        })
                                                    }
                                                    </select>) : (<span>옵션이 없습니다</span>)
                                                }
                                            </li>
                                })
                            ) : (<li>옵션이 없습니다</li>)
                        }
                    </ul>
                    <p className="text_notice">*하단의 알레르기 유발물질 정보를 참고해주세요</p>
                </div>
                <div className="totalBox">
                    <span className="title">합계</span>
                    <span className="price">{typeOfTotalPrice}</span>
                    <div className="countBox">
                        <button type="button" className="btn_minus" onClick={onCountMinus}></button>
                        <span className="num_count">{productDetailCount}</span>
                        <button type="button" className="btn_plus" onClick={onCountPlus}></button>                            
                    </div>
                </div>
            </div>
            <div className="infoTextBox">
                <ul>
                    
                    <li><a onClick={onLayerInfo1}><span>영양정보표 및 원산지 정보</span></a></li>
                    <li><a onClick={onLayerInfo2}><span>알레르기 유발물질 정보</span></a></li>
                    {
                        isLayerOpen === true && activeLayer === 'LayerInfo1' ? <LayerInfo1 isLayerOpen={onLayerInfo1} isLayerClose={onLayerClose}></LayerInfo1> : null
                    }
                    {
                        isLayerOpen === true && activeLayer === 'LayerInfo2' ? <LayerInfo2 isLayerOpen={onLayerInfo2} isLayerClose={onLayerClose}></LayerInfo2> : null
                    }    
                </ul>
            </div>
        </div>
    )
    return (
        <>
            {
                    selectedBestMenuProduct 
                    ? renderProductDetail(selectedBestMenuProduct)
                    : chickenMenuProduct 
                    ? renderProductDetail(chickenMenuProduct)
                    : burgerMenuProduct
                    ? renderProductDetail(burgerMenuProduct)
                    : snackSideProduct
                    ? renderProductDetail(snackSideProduct)
                    : drinkProduct
                    ? renderProductDetail(drinkProduct)
                    :<div>Loading...</div>
            }
        </>
    )
    
}

export default Info