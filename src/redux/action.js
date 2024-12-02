import axios from 'axios'

// 베스트메뉴의 상태액션
export const setBestMenu = bestMenu => ({   // setBestMenu는 bestMenu(인자=매개변수)라는 새로 변경해줄 데이터를 받아서 reducer에 전달해주는 action이다.
                                            // setBestMenu는 액션의 생성자 함수
    type: "SET_BEST_MENU",
    payload: bestMenu
})

// 베스트메뉴의 비동기액션
export const fetchBestMenu = () => {
    return dispatch => {
        axios.get(`http://localhost:3000/bestMenu`)
            .then(response => {
                // console.log(`response = ${JSON.stringify(response.data)}`);
                dispatch(setBestMenu(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

// 치킨세트의 상태액션
export const setChichenSet = chichenSet => ({
    type:"SET_CHICKEN",
    payload: chichenSet
})

// 치킨세트의 비동기액션
export const fetchChicken = () => {
    return dispatch => {
        axios.get(`http://localhost:3000/chickenSet`)
            .then(response => {
                dispatch(setChichenSet(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

// 로딩액션
export const setLoading = () => ({
    type: "SET_LOADING"
})

// sns의 상태액션
export const setSNSList = snsList => ({
    type: "SET_SNS",
    payload: snsList
})

// sns의 비동기액션
export const fetchSNSList = () => {
    return dispatch => {
        axios.get(`http://localhost:3000/sns`)
            .then(response => {
                // console.log(`response.data = ${JSON.stringify(response.data)}`);      
                dispatch(setSNSList(response.data))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

// 선택한 베스트메뉴의 상태액션
export const setSelectedBestMenuProductId = bestMenuSelectedId => ({
    type:"SET_SELECTED_BESTMENU",
    payload: bestMenuSelectedId
})

// 선택한 베스트메뉴의 비동기액션
export const fetchSelectedBestMenuProductId = bestMenuSelectedId => {
    return dispatch => {
        axios.get(`http://localhost:3000/bestMenu?id=${bestMenuSelectedId}`)
            .then(response => {
                dispatch(setBestMenu(response.data))
            })
            .catch(error => {
                console.error(error);
            })
    }
}

// 상품페이지에서의 카운트증가액션
export const setProductCountPlus = (productPlusCount) => ({
    type: "SET_PRODUCT_COUNT_PLUS",
    payload: productPlusCount
})

// 상품페이지에서의 카운트감소액션
export const setProductCountMinus = (productMinusCount) => ({
    type: "SET_PRODUCT_COUNT_MINUS",
    payload: productMinusCount
})

// 상품페이지에서의 옵션선택액션
export const setOptionChoice = (optionChoice) => ({
    type: "SET_OPTION_CHOICE",
    payload: optionChoice
})
