import axios from 'axios'

// 액션타입정의
export const SET_SELECTED_BESTMENUID = "SET_SELECTED_BESTMENUID"
export const SET_SELECTED_BESTMENUPRODUCT = "SET_SELECTED_BESTMENUPRODUCT"
export const SET_SELECTED_CHICKENMENUID = "SET_SELECTED_CHICKENMENUID"
export const SET_SELECTED_CHICKENMENUPRODUCT = "SET_SELECTED_CHICKENMENUPRODUCT"
export const SET_SELECTED_BURGERMENUID = "SET_SELECTED_BURGERMENUID"
export const SET_SELECTED_BURGERPRODUCT = "SET_SELECTED_BURGERPRODUCT"
export const IN_BASKET_PRODUCT_TITLE = "IN_BASKET_PRODUCT_TITLE"
export const SET_SELECTED_SNACKSIDEID = "SET_SELECTED_SNACKSIDEID"
export const SET_SELECTED_SNACKSIDEPRODUCT = "SET_SELECTED_SNACKSIDEPRODUCT"
export const SET_SELECTED_DRINKID = "SET_SELECTED_DRINKID"
export const SET_SELECTED_DRINK = "SET_SELECTED_DRINK"

// 액션생성자들
export const setSelectedBestMenuProductId = bestMenuSelectedId => ({ // 선택한 베스트상품의id
    type: SET_SELECTED_BESTMENUID,
    payload: bestMenuSelectedId
})

export const setSelectedBestMenuProduct = selectedBestMenuProduct => ({ // 선택한 베스트상품
    type: SET_SELECTED_BESTMENUPRODUCT,
    payload: selectedBestMenuProduct
})

export const setSelectedChickenProductId = chickenSelectedId => ({ // 선택한 치킨상품의id
    type: SET_SELECTED_CHICKENMENUID,
    payload: chickenSelectedId
})

export const setSelectedChickenProduct = selectedChickenMenuProduct => ({ // 선택한 치킨상품
    type: SET_SELECTED_CHICKENMENUPRODUCT,
    payload: selectedChickenMenuProduct
})

export const setSelectedBurgerProductId = burgerSelectedId => ({ // 선택한 버거상품의id
    type: SET_SELECTED_BURGERMENUID,
    payload: burgerSelectedId
})

export const setSelectedBurgerProduct = selectedBurgerProduct => ({ // 선택한 버거상품
    type: SET_SELECTED_BURGERPRODUCT,
    payload: selectedBurgerProduct
})

export const setSelectedSnackSideProductId = snackSideSelectedId => ({ // 선택한 스낵사이드의id
    type: SET_SELECTED_SNACKSIDEID,
    payload: snackSideSelectedId
})

export const setSelectedSnackSideProduct = selectedSnackSideProduct => ({ // 선택한 스낵사이드상품
    type: SET_SELECTED_SNACKSIDEPRODUCT,
    payload: selectedSnackSideProduct
})

export const setSelectedDrinkProductId = drinkSelectedId => ({ // 선택한 음료의id
    type:SET_SELECTED_DRINKID,
    payload: drinkSelectedId
})

export const setSelectedDrinkProduct = selectedDrinkProduct => ({ // 선택한 음료
    type:SET_SELECTED_DRINK,
    payload: selectedDrinkProduct
})

export const setBasketInProductTitle = productTitle => ({ // 장바구니에 상품명넣는 상태액션
    type: IN_BASKET_PRODUCT_TITLE,
    payload:productTitle
})

// 선택한 베스트메뉴ID의 비동기액션
export const fetchSelectedBestMenuProductId = bestMenuSelectedId => {
    return dispatch => {
        axios.get(`http://localhost:3000/bestMenu?id=${bestMenuSelectedId}`)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    const resultData = response.data[0]
                    const resultID = resultData.id
                    if(resultData) {
                        dispatch(setSelectedChickenProduct(null)) // 베스트메뉴가 아닌 치킨메뉴는null
                        dispatch(setSelectedBurgerProduct(null)) // 베스트메뉴가 아닌 버거메뉴는null
                        dispatch(setSelectedSnackSideProduct(null)) // 베스트메뉴가 아닌 스낵사이드메뉴는null
                        dispatch(setSelectedDrinkProduct(null)) // 스낵사이드메뉴가 아닌 음료메뉴는null
                        dispatch(setSelectedBestMenuProduct(resultData))
                        dispatch(setSelectedBestMenuProductId(resultID))
                        dispatch(setBasketInProductTitle(resultData.title))
                    }
                }
            })
            .catch(error => {
                console.error(error);
            })
    }
}

// 선택한 치킨세트ID의 비동기액션
export const fetchSelectedChickenProductId = chickenSelectedId => {
    return dispatch => {
        axios.get(`http://localhost:3000/chickenSet?id=${chickenSelectedId}`)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    const resultData = response.data[0]
                    const resultID = resultData.id
                    if(resultData) {
                        dispatch(setSelectedBestMenuProduct(null)) // 치킨메뉴가 아닌 베스트메뉴는null
                        dispatch(setSelectedBurgerProduct(null)) // 치킨메뉴가 아닌 버거메뉴는 null
                        dispatch(setSelectedSnackSideProduct(null)) // 치킨메뉴가 아닌 스낵사이드메뉴는null
                        dispatch(setSelectedDrinkProduct(null)) // 스낵사이드메뉴가 아닌 음료메뉴는null
                        dispatch(setSelectedChickenProduct(resultData))
                        dispatch(setSelectedChickenProductId(resultID))
                        dispatch(setBasketInProductTitle(resultData.title))
                    }
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
}

// 선택한 버거세트ID의 비동기액션
export const fetchSelectedBurgerProductId = burgerSelectedId => {
    return dispatch => {
        axios.get(`http://localhost:3000/burgerSet?id=${burgerSelectedId}`)
            .then(response => {
                if(response.data && response.data.length > 0) {
                    const resultData = response.data[0]
                    const resultID = resultData.id
                    if(resultData) {
                        dispatch(setSelectedBestMenuProduct(null)) // 버거메뉴가 아닌 베스트메뉴는null
                        dispatch(setSelectedChickenProduct(null)) // 버거메뉴가 아닌 치킨메뉴는null
                        dispatch(setSelectedSnackSideProduct(null)) // 버거메뉴가 아닌 스낵사이드메뉴는null
                        dispatch(setSelectedDrinkProduct(null)) // 스낵사이드메뉴가 아닌 음료메뉴는null
                        dispatch(setSelectedBurgerProduct(resultData))
                        dispatch(setSelectedBurgerProductId(resultID))
                        dispatch(setBasketInProductTitle(resultData.title))
                    }
                }
            })
            .catch(error => 
                console.error(error)
            )
    }
}

// 선택한 스낵사이드세트ID의 비동기액션
export const fetchSelectedSnackSideProductId = snackSideSelectedId => {
    return dispatch => {
        axios.get(`http://localhost:3000/snackSideSet?id=${snackSideSelectedId}`)
            .then(response => {
                if(response.data && response.data.length > 0) {
                    const resultData = response.data[0]
                    const resultID = resultData.id
                    if(resultData) {
                        dispatch(setSelectedBestMenuProduct(null)) // 스낵사이드메뉴가 아닌 베스트메뉴는null
                        dispatch(setSelectedChickenProduct(null)) // 스낵사이드메뉴가 아닌 치킨메뉴는null
                        dispatch(setSelectedBurgerProduct(null)) // 스낵사이드메뉴가 아닌 버거메뉴는null
                        dispatch(setSelectedDrinkProduct(null)) // 스낵사이드메뉴가 아닌 음료메뉴는null
                        dispatch(setSelectedSnackSideProduct(resultData))
                        dispatch(setSelectedSnackSideProductId(resultID))
                        dispatch(setBasketInProductTitle(resultData.title))
                    }
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
}

//  선택한 드링크ID의 비동기액션
export const fetchSelectedDrinkProductId = drinkSelectedId => {
    return dispatch => {
        axios.get(`http://localhost:3000/drink?id=${drinkSelectedId}`)
            .then(response => {
                if(response.data && response.data.length > 0) {
                    const resultData = response.data[0]
                    const resultID = resultData.id
                    if(resultData) {
                        dispatch(setSelectedBestMenuProduct(null)) // 음료메뉴가 아닌 베스트메뉴는null
                        dispatch(setSelectedChickenProduct(null)) // 음료메뉴가 아닌 치킨메뉴는null
                        dispatch(setSelectedBurgerProduct(null)) // 음료메뉴가 아닌 버거메뉴는null
                        dispatch(setSelectedSnackSideProduct(null)) // 음료메뉴가 아닌 스낵사이드메뉴는null
                        dispatch(setSelectedDrinkProduct(resultData))
                        dispatch(setSelectedDrinkProductId(resultID))
                        dispatch(setBasketInProductTitle(resultData.title))
                    }
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
}