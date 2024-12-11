const initialState = {
    bestMenuSelectedId: null, // 선택한 베스트상품의id
    selectedBestMenuProduct: null, // 선택한 베스트상품
    chickenSelectedId: null, // 선택한 치킨상품의id
    selectedChickenMenuProduct: null, // 선택한 치킨상품
    burgerSelectedId: null, // 선택한 버거상품의id
    selectedBurgerProduct: null, // 선택한 버거상품
    snackSideSelectedId: null, // 선택한 스낵사이드상품의id
    selectedSnackSideProduct: null // 선택한 스낵사이드상품
}

const setMenuReducer  = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SELECTED_BESTMENUID": // 선택한 베스트상품의id
            return {...state, bestMenuSelectedId: action.payload}
        case "SET_SELECTED_BESTMENUPRODUCT": // 선택한 베스트상품
            return {...state, selectedBestMenuProduct:action.payload}
        case "SET_SELECTED_CHICKENMENUID": // 선택한 치킨상품의id
                return {...state, chickenSelectedId:action.payload}
        case "SET_SELECTED_CHICKENMENUPRODUCT": // 선택한 치킨상품
            return {...state, selectedChickenMenuProduct:action.payload}
        case "SET_SELECTED_BURGERMENUID": // 선택한 버거상품의id
            return {...state, burgerSelectedId:action.payload}
        case "SET_SELECTED_BURGERPRODUCT": // 선택한 버거상품
            return {...state, selectedBurgerProduct:action.payload}
        case "SET_SELECTED_SNACKSIDEID": // 선택한 스낵사이드의id
            return {...state, snackSideSelectedId:action.payload}
        case "SET_SELECTED_SNACKSIDEPRODUCT":
            return {...state, selectedSnackSideProduct:action.payload}
        default:
            return state
    }
}

export default setMenuReducer