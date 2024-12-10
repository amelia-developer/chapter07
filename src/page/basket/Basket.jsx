import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Top from './Top'
import OrderList from './OrderList'
import { useDispatch } from 'react-redux'
import {resetProductDetail} from '../../redux/action'

const Basket = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [showBasket, setShowBasket] = useState(true)
    const onCloseBasket = (param) => {
        setShowBasket(param)
    }

    const goBack = () => {
        navigate(-1)
        // 상품에 대한 카운트정보와 옵션정보 초기화
        dispatch(resetProductDetail())     
    }
    return (
        <>
            {
                showBasket === true ?
                <>
                    <Top onHandlerBasket={onCloseBasket}></Top>
                    <OrderList></OrderList>
                </>
                : goBack()
            }
        </>
    )
}

export default Basket