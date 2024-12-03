import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchSelectedBestMenuProductId, setBackDefaultCount } from '../../redux/action'

const mapStateToProps = state => {
    return {
        bestMenu: state.bestMenu,
        productDetailCount: state.productDetailCount
        // bestMenuSelectedId: state.bestMenuSelectedId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSelectedBestMenuProductId: selectId => dispatch(fetchSelectedBestMenuProductId(selectId)),
        setBackDefaultCount: defaultCount => dispatch(setBackDefaultCount(defaultCount))
    }
}
const Top = ({bestMenu, fetchSelectedBestMenuProductId, setBackDefaultCount}) => {
    const navigate = useNavigate()
    const onBack = () => {
        navigate(`/`)        
        setBackDefaultCount(1)
    }

    const location = useLocation()
    const queryStr = new URLSearchParams(location.search)
    const productNumber = queryStr.get('id')

    useEffect(() => {
        fetchSelectedBestMenuProductId(productNumber)
    },[productNumber, fetchSelectedBestMenuProductId])

    const selectedProduct = bestMenu[0]

    return (
        <>
            <div className="topBox">
                <h2>{selectedProduct ? selectedProduct.title : '상품명없음'}</h2>
                <a href="#" className="btn_back" onClick={onBack}><span className="blind">뒤로가기</span></a>
                <a href="#" className="btn_basket"><span className="blind">장바구니</span></a>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)