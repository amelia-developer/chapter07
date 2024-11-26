const initialState = { // state의 초기값을 정의하는 객체
    bestMenu: [], // 처음에 빈배열로 세팅을 해줌(이게 정답은 아니고)
    loading: false
}

const rootReducer  = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BEST_MENU":
            return {...state, bestMenu: action.payload} // type은 액션의종류, payload는 액션과같이 전달되어야할 데이터   
        case "SET_LOADING":
            return {...state, loading: true}
        default:
            return state
    }
}

export default rootReducer