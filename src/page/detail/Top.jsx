import React from 'react'
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'

const mapStateToProps = state => {
    return {
        bestMenu: state.bestMenu,
        bestMenuSelectedId: state.bestMenuSelectedId
    }
}

const Top = ({bestMenu, bestMenuSelectedId}) => {
    const selectedProduct = bestMenu.find(item  => item.id === bestMenuSelectedId)
    
    const navigate = useNavigate()
    const onBack = () => {
        navigate(`/`)
    }

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

export default connect(mapStateToProps)(Top)