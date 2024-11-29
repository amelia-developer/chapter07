import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { setBestMenu, setSelectedBestMenuProductId } from '../../redux/action'
import axios from 'axios'
import { useLocation } from "react-router-dom";

const mapStateToProps = state => {
    return {
        bestMenu: state.bestMenu,
        bestMenuSelectedId: state.bestMenuSelectedId 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBestMenu: Menus => dispatch(setBestMenu(Menus)),
        setSelectedBestMenuProductId: selectId => dispatch(setSelectedBestMenuProductId(selectId))
    }
}

const Info = ({bestMenu, setBestMenu, bestMenuSelectedId, setSelectedBestMenuProductId}) => {
    const location = useLocation();
    const queryStr = new URLSearchParams(location.search);
    const productNumber = queryStr.get('id');

    useEffect(() => { // 화면새로고침시 state유지
        setSelectedBestMenuProductId(productNumber); 
    }, [productNumber, setSelectedBestMenuProductId]);

    useEffect(() => {
        axios.get(`http://localhost:3000/bestMenu?id=${bestMenuSelectedId}`)
            .then(response => {
                // console.log(`response.data = ${JSON.stringify(response.data)}`);
                setBestMenu(response.data)
            })
            .catch(error => {
                console.error(error);
            })
    }, [bestMenuSelectedId])

    const selectedProduct = bestMenu[0]
    if(!selectedProduct) { {/**TODO:하는중_ */}
        return <div>loading...</div>
    }
    return (
        <>
            <div className="infoBox">
                <img src={`/images/${selectedProduct.id}.png`} alt={selectedProduct.title}/>
                <div className="title">{selectedProduct.title}</div>
                <div className="itemInner">
                    <span className="title">구성</span>
                    <div className="optionBox">
                        <ul>
                            {
                                selectedProduct.option.map((element, idx) => { // li를 갖고오기위해
                                    // console.log(`element = ${JSON.stringify(element)}`);                            
                                    return  <li key={idx}>
                                                <select key={idx}>
                                                {                                                    
                                                    element.values.map((optionValue, idx)=> { // option을 갖고오기위해
                                                        // console.log(`optionValue.label = ${optionValue.label}`);                                                        
                                                        // // console.log(`optionValue.value = ${JSON.stringify(optionValue.value)}`);
                                                        return <option key={idx} value={optionValue.value}>{optionValue.label}</option>                                                            
                                                    })
                                                }
                                                </select>
                                            </li>
                                })
                            }
                            {/* <li>
                                <select>
                                    <option>콜라 추가 없음</option>
                                    <option>콜라 M추가</option>
                                </select>
                            </li>
                            <li>
                                <select>
                                    <option>소스 3번 변경없음</option>
                                </select>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)