const initialState = { // state의 초기값을 정의하는 객체
    bestMenu: [], // 처음에 빈배열로 세팅을 해줌(이게 정답은 아니고)
    loading: false,
    snsList: [],
    bestMenuSelectedId: null, // 새로운상태추가
    productDetailCount:1,
    optionChoice:0,
    chickenSet: [],
    burgerSet: [],
    snackSideSet: [],
    drink: []
}

const rootReducer  = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BEST_MENU":
            return {...state, bestMenu: action.payload} // type은 액션의종류, payload는 액션과같이 전달되어야할 데이터   
        case "SET_LOADING":
            return {...state, loading: true}
        case "SET_SNS":
            return {...state, snsList: action.payload}
        case "SET_SELECTED_BESTMENU":
            return {...state, bestMenuSelectedId: action.payload}
        case "SET_PRODUCT_COUNT_PLUS":
            return {...state, productDetailCount: action.payload}
        case "SET_PRODUCT_COUNT_MINUS":
            return {...state, productDetailCount: action.payload}
        case "SET_OPTION_CHOICE":
            return {...state, optionChoice:action.payload}
        case "SET_CHICKEN":
            return {...state, chickenSet: action.payload}
        case "SET_BURGER":
            return {...state, burgerSet: action.payload}
        case "SET_SNACK_SIDE":
            return {...state, snackSideSet: action.payload}
        case "SET_DRINK":
            return {...state, drink: action.payload}
        default:
            return state
    }
}

export default rootReducer