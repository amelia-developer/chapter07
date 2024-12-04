import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { fetchSelectedBestMenuProductId, setBackDefaultCount } from '../../redux/action'

const mapStateToProps = state => {
    return {
        bestMenuSelectedId: state.bestMenuSelectedId,
        selectedBestMenuProduct: state.selectedBestMenuProduct,
        productDetailCount: state.productDetailCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSelectedBestMenuProductId: selectId => dispatch(fetchSelectedBestMenuProductId(selectId)),
        setBackDefaultCount: defaultCount => dispatch(setBackDefaultCount(defaultCount))
    }
}
const Top = ({bestMenuSelectedId, selectedBestMenuProduct, fetchSelectedBestMenuProductId, setBackDefaultCount}) => {
    const navigate = useNavigate()
    const onBack = () => {
        navigate(`/`)        
        setBackDefaultCount(1)
    }

    useEffect(() => {
        if(bestMenuSelectedId){
            fetchSelectedBestMenuProductId(bestMenuSelectedId)
        }
    },[bestMenuSelectedId, fetchSelectedBestMenuProductId])

    return (
        <>
            <div className="topBox">
                <h2>{selectedBestMenuProduct ? selectedBestMenuProduct.title : '상품명없음'}</h2>
                <a href="#" className="btn_back" onClick={onBack}><span className="blind">뒤로가기</span></a>
                <a href="#" className="btn_basket"><span className="blind">장바구니</span></a>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)