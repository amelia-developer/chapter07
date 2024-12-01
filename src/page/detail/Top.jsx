import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchSelectedBestMenuProductId } from '../../redux/action'

const mapStateToProps = state => {
    return {
        bestMenu: state.bestMenu,
        // bestMenuSelectedId: state.bestMenuSelectedId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSelectedBestMenuProductId: selectId => dispatch(fetchSelectedBestMenuProductId(selectId)),
    }
}
const Top = ({bestMenu, fetchSelectedBestMenuProductId}) => {
    const navigate = useNavigate()
    const onBack = () => {
        navigate(`/`)
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