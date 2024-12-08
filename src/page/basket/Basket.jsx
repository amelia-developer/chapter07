import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Top from './Top'
import OrderList from './OrderList'

const Basket = () => {
    const navigate = useNavigate()

    const [showBasket, setShowBasket] = useState(true)
    const onCloseBasket = (param) => {
        setShowBasket(param)
    }

    const goBack = () => {
        navigate(-1)
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