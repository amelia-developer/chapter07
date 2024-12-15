import React from 'react'
import { useNavigate } from 'react-router-dom'

const BottomNav = ({onNaviMenu}) => {
  const navigate = useNavigate()

  const onBasket = () => {
    alert(`주문결제PG연결이 안되어\n장바구니 화면으로 이동합니다`)
    navigate(`/basket`)
  }

  const onSetHome = () => {
    navigate(`/`)
  }

  return (
    <>
        <div className="bottomNavbox">
            <ul>
                <li><a onClick={onSetHome}><span>홈</span></a></li>
                <li><a onClick={onNaviMenu}><span>리스트</span></a></li>
                <li><a href="#"><span>딜리버리</span></a></li>
                <li><a href="#" onClick={onBasket}><span>마이페이지</span></a></li>
            </ul>
        </div>
    </>
  )
}

export default BottomNav