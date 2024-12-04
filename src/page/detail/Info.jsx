import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { fetchSelectedBestMenuProductId, setProductCountMinus, setProductCountPlus, setOptionChoice, setDetailProductTotal } from '../../redux/action'
import LayerInfo1 from '../layer/LayerInfo1';
import LayerInfo2 from '../layer/LayerInfo2';
import { useLocation } from "react-router-dom";

const mapStateToProps = state => {
    return {
        bestMenuSelectedId: state.bestMenuSelectedId,
        selectedBestMenuProduct: state.selectedBestMenuProduct,
        productDetailCount: state.productDetailCount,
        optionChoice: state.optionChoice,
        detailProdctTotal: state.detailProdctTotal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSelectedBestMenuProductId: selectId => dispatch(fetchSelectedBestMenuProductId(selectId)),
        setProductCountMinus: countMinus => dispatch((setProductCountMinus(countMinus))),
        setProductCountPlus: countPlus => dispatch(setProductCountPlus(countPlus)),
        setOptionChoice: optionEach => dispatch((setOptionChoice(optionEach))),
        setDetailProductTotal: detailTotalPrice => dispatch((setDetailProductTotal(detailTotalPrice)))
    }
}

const Info = ({bestMenuSelectedId, selectedBestMenuProduct, fetchSelectedBestMenuProductId, 
    productDetailCount, 
    setProductCountMinus, setProductCountPlus, 
    optionChoice, setOptionChoice, 
    detailProdctTotal, setDetailProductTotal}) => {

    // const navigate = useNavigate() // 최상위 레벨에서 호출되도록(리엑트 훅들은 최상위 레벨에서만 호출되도록, useEffect/useState/useNavigage모두 동일)
    const [isLayerOpen, setIsLayerOpen] = useState(false)
    const [activeLayer, setActiveLayer] = useState(null)

    const location = useLocation();
    const queryStr = new URLSearchParams(location.search);
    const productNumber = queryStr.get('id');

    useEffect(() => { // 화면새로고침시 state유지_새로고침하면 컴포넌트가 마운트되면서 리덕스상태 초기화
        if(bestMenuSelectedId === null) {
            fetchSelectedBestMenuProductId(productNumber); // 초기화 되서, id는 url 파라미터로 가져와서 해당id를 넣어줌
        } else {
            fetchSelectedBestMenuProductId(bestMenuSelectedId); 
        }
    }, [bestMenuSelectedId, fetchSelectedBestMenuProductId]);    
    
    useEffect(() => {
        if(selectedBestMenuProduct) { // 비동기로 state값들을 불러올때 체크해야하는 3가지(undefined, null, 빈값) 中 나는 빈값체크(=length)
            const calculatePrice = ((parseInt(optionChoice) + selectedBestMenuProduct.price) * productDetailCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            setDetailProductTotal(calculatePrice)    
        }
    }, [productDetailCount, optionChoice, detailProdctTotal, selectedBestMenuProduct])

    if(!selectedBestMenuProduct) { {/**TODO:해야함*/}
        return <div>loading...</div>
    }

    const onCountMinus = () => {
        if(productDetailCount <= 1){
            productDetailCount = 1
        } else {
            setProductCountMinus(productDetailCount-1)
        }
    }

    const onCountPlus = () => {
        setProductCountPlus(productDetailCount+1)
    }

    const onSelectedOption = (e) => {
        setOptionChoice(e.target.value)
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
    return (
        <>
            <div className="infoBox">
                <img src={`/images/${selectedBestMenuProduct.id}.png`} alt={selectedBestMenuProduct.title}/>
                <div className="title">{selectedBestMenuProduct.title}</div>
                <div className="itemInner">
                    <span className="title">구성</span>
                    <div className="optionBox">
                        <ul>
                            {
                                selectedBestMenuProduct.option && selectedBestMenuProduct.option.length > 0 ? (
                                    selectedBestMenuProduct.option.map((element, idx) => { // li를 갖고오기위해
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
                        <span className="price">{detailProdctTotal}</span>
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
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)