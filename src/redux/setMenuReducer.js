const initialState = {
    bestMenuSelectedId: null, // 선택한 베스트상품의id
    selectedBestMenuProduct: null, // 선택한 베스트상품
    chickenSelectedId: null, // 선택한 치킨상품의id
    selectedChickenMenuProduct: null, // 선택한 치킨상품
    burgerSelectedId: null, // 선택한 버거상품의id
    selectedBurgerProduct: null, // 선택한 버거상품
    snackSideSelectedId: null, // 선택한 스낵사이드상품의id
    selectedSnackSideProduct: null, // 선택한 스낵사이드상품
    drinkSelectedId: null, // 선택한 음료상품의 id
    selectedDrinkProduct: null, // 선택한 음료상품
    productTitle: "" // 세트상품을 포함하여, 상품상세 상단에 나오는 상품타이틀
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
        case "SET_SELECTED_SNACKSIDEPRODUCT": // 선택한 스낵사이드상품
            return {...state, selectedSnackSideProduct:action.payload}
        case "SET_SELECTED_DRINKID": // 선택한 음료의id
            return {...state, drinkSelectedId:action.payload}
        case "SET_SELECTED_DRINK": // 선택한 음료상품
            return {...state, selectedDrinkProduct:action.payload}
        case "IN_BASKET_PRODUCT_TITLE": // 세트상품을 포함하여, 상품상세 상단에 나오는 상품타이틀
            return {...state, productTitle:action.payload}
        case "RESET_PRODUCT_TITLE": // 상품명이 있는 상태에서 카테고리명을 클릭하면, 계속 상품명이 보여져서 이를 강제초기화하려고
            return {...state, productTitle: ''}
        default:
            return state
    }
}

export default setMenuReducer