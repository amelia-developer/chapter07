export const setBestMenu = bestMenu => ({   // setBestMenu는 bestMenu(인자=매개변수)라는 새로 변경해줄 데이터를 받아서 reducer에 전달해주는 action이다.
                                            // setBestMenu는 액션의 생성자 함수
    type: "SET_BEST_MENU",
    payload: bestMenu
})

export const setLoading = () => ({
    type: "SET_LOADING"
})

export const setSNSList = snsList => ({
    type: "SET_SNS",
    payload: snsList
})

export const setSelectedBestMenuProductId = bestMenuSelectedId => ({
    type: "SET_SELECTED_BESTMENU",
    payload: bestMenuSelectedId
})