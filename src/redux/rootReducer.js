const initialState = { // state의 초기값을 정의하는 객체
    bestMenu: [], // 처음에 빈배열로 세팅을 해줌(이게 정답은 아니고)
    loading: false,
    snsList: [],
    bestMenuSelectedId: null, // 선택한 베스트상품의id
    selectedBestMenuProduct: null, // 선택한 베스트상품 
    productDetailCount:1,
    optionChoice:0,
    chickenSet: [],
    burgerSet: [],
    snackSideSet: [],
    drink: [],
    inBasketProductId: [],
    detailProdctTotal: 0,
    searchAddress:[],
    productTitle:"",
    callProductInfo:[],
    optionChoiceName: "",
    eachProductMinus: 0,
    eachProductPlus: 0,
    productCountPrice: 0,
    originProductPrice: 0,
    chickenSelectedId: null, // 선택한 치킨상품의id
    selectedChickenMenuProduct: null // 선택한 치킨상품
}

const rootReducer  = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BEST_MENU":
            return {...state, bestMenu: action.payload} // type은 액션의종류, payload는 액션과같이 전달되어야할 데이터   
        case "SET_LOADING":
            return {...state, loading: true}
        case "SET_SNS":
            return {...state, snsList: action.payload}
        case "SET_SELECTED_BESTMENUID": // 선택한 베스트상품의id
            return {...state, bestMenuSelectedId: action.payload}
        case "SET_SELECTED_BESTMENUPRODUCT": // 선택한 베스트상품
            return {...state, selectedBestMenuProduct:action.payload}
        case "SET_PRODUCT_COUNT_PLUS":
            return {...state, productDetailCount: action.payload}
        case "SET_PRODUCT_COUNT_MINUS":
            return {...state, productDetailCount: action.payload}
        case "SET_OPTION_CHOICE": // 선택한상품의 하위에 있는 옵션의값
            return {...state, optionChoice:action.payload}
        case "SET_OPTION_CHOICE_NAME": // 선택한상품의 하위에 있는 옵션의이름
            return {...state, optionChoiceName:action.payload}
        case "SET_CHICKEN":
            return {...state, chickenSet: action.payload}
        case "SET_BURGER":
            return {...state, burgerSet: action.payload}
        case "SET_SNACK_SIDE":
            return {...state, snackSideSet: action.payload}
        case "SET_DRINK":
            return {...state, drink: action.payload}
        case "SET_DEFAULT_COUNT":
            return {...state, productDetailCount: action.payload}
        case "IN_BASKET_PRODUCT":
            return {...state, inBasketProductId:[...state.inBasketProductId, action.payload]}
        case "SET_PRODUCT_DETAIL_TOTAL":
            return {...state, detailProdctTotal:action.payload}
        case "SET_ORIGIN_PRODUCT_PRICE": // 상품의 원래가격
            return {...state, originProductPrice: action.payload}
        case "SET_SEARCH_ADDRESS":
            return {...state, searchAddress:action.payload}
        case "IN_BASKET_PRODUCT_TITLE":
            return {...state, productTitle:action.payload}
        case "CALL_PRODUCT":
            return {...state, callProductInfo: action.payload}
        case "EACH_PRODUCT_MINUS":
            return {...state, eachProductMinus: action.payload}
        case "EACH_PRODUCT_PLUS":
            return {...state, eachProductPlus: action.payload}
        case "SET_PRODUCT_COUNT_PRICE":
            return {...state, productCountPrice: action.payload}
        case "RESET_PRODUCT_DETAIL": // 초기화
            return {...state,
                productDetailCount: 1,
                optionChoice: 0
            }
        case "SET_SELECTED_CHICKENMENUID":
            return {...state, chickenSelectedId:action.payload}
        case "SET_SELECTED_CHICKENMENUPRODUCT":
            return {...state, selectedChickenMenuProduct:action.payload}
        default:
            return state
    }
}

export default rootReducer