const initialState = {
    inBasketProductId: [],
    callProductInfo:[], // 장바구니에 있는 상품부르려고
    productCountPrice: 0,
    originProductPrice: 0,
    eachProductMinus: 0,
    eachProductPlus: 0
}

const setBasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "IN_BASKET_PRODUCT":
            return {...state, inBasketProductId:[...state.inBasketProductId, action.payload]}            
        case "CALL_PRODUCT":
            return {...state, callProductInfo: action.payload}
        case "SET_PRODUCT_COUNT_PRICE":
            return {...state, productCountPrice: action.payload}
        case "SET_ORIGIN_PRODUCT_PRICE": // 상품의 원래가격
            return {...state, originProductPrice: action.payload}
        case "EACH_PRODUCT_MINUS":
            return {...state, eachProductMinus: action.payload}
        case "EACH_PRODUCT_PLUS":
            return {...state, eachProductPlus: action.payload}
        case "OUT_BASKET_PRODUCT":
            return  {...state, 
                        callProductInfo: state.callProductInfo.filter(
                            removeProduct => removeProduct.id !== action.payload
                    )}
        default:
            return state
    }
}

export default setBasketReducer