import { buildCreateSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {v4 as uuid4} from 'uuid'

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
export const setChichenSet = chickenSet => ({
    type:"SET_CHICKEN",
    payload: chickenSet
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

// 버거세트의 상태액션
export const setBurgerSet = burgerSet => ({
    type: "SET_BURGER",
    payload: burgerSet
})

// 버거세트의 비동기액션
export const fetchBurger = () => {
    return dispatch => {
        axios.get(`http://localhost:3000/burgerSet`)
            .then(response => {
                dispatch(setBurgerSet(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

// 스낵사이드의 상태액션
export const setSnackSideSet = snackSideSet => ({
    type:"SET_SNACK_SIDE",
    payload: snackSideSet
})

// 스낵사이드의 비동기액션
export const fetchSnackSide = () => {
    return dispatch => {
        axios.get(`http://localhost:3000/snackSideSet`)
            .then(response => {
                dispatch(setSnackSideSet(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

// 음료의 상태액션
export const setDrink = drink => ({
    type:"SET_DRINK",
    payload: drink
})

// 음료의 비동기액션
export const fetchDrink = () => {
    return dispatch => {
        axios.get(`http://localhost:3000/drink`)
            .then(response => {
                dispatch(setDrink(response.data))
            })
            .catch(error => {
                console.log(error);
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

/**베스트메뉴[s] */
// 선택한 베스트메뉴정보 액션 -> 비동기액션은 '선택한 베스트메뉴ID의 비동기액션'에서 함께 dispatch됨
export const setSelectedBestMenuProduct = selectedBestMenuProduct => ({
    type:"SET_SELECTED_BESTMENUPRODUCT",
    payload: selectedBestMenuProduct
})

// 선택한 베스트메뉴ID의 액션
export const setSelectedBestMenuProductId = bestMenuSelectedId => ({
    type:"SET_SELECTED_BESTMENUID",
    payload: bestMenuSelectedId
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
/**베스트메뉴[e] */

/**치킨세트메뉴[s] */
// 선택한 치킨세트메뉴정보 액션 -> 비동기액션은 '선택한 치킨세트ID의 비동기액션'에서 함께 dispatch됨
export const setSelectedChickenProduct = selectedChickenMenuProduct => ({
    type: "SET_SELECTED_CHICKENMENUPRODUCT",
    payload: selectedChickenMenuProduct
})

// 선택한 치킨세트ID의 액션
export const setSelectedChickenProductId = chickenSelectedId => ({
    type:"SET_SELECTED_CHICKENMENUID",
    payload: chickenSelectedId
})

// 선택한 치킨세트ID의 비동기액션
export const fetchSelectedChickenProductId = chickenSelectedId => {
    return dispatch => {
        axios.get(`http://localhost:3000/chickenSet?id=${chickenSelectedId}`)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    const resultData = response.data[0]
                    const resultID = resultData.id
                    if(resultData) {
                        dispatch(setSelectedBestMenuProduct(null)) // 치킨세트가 아닌 베스트메뉴는null
                        dispatch(setSelectedChickenProduct(resultData))
                        dispatch(setSelectedChickenProductId(resultID))
                        // dispatch(setBasketInProductTitle(resultData.title)) // TODO:해야함_이게꼭필요한건지다시확인
                    }
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
}
/**치킨세트메뉴[e] */

/**버거세트메뉴[s] */
// 선택한 버거세트메뉴정보 액션 -> 비동기액션은 '선택한 버거세트ID의 비동기액션'에서 함께 dispatch됨


/**버거세트메뉴[e] */

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

// 상품페이지에서의 선택한상품 하위에 있는 옵션의가격액션
export const setOptionChoice = (optionChoice) => ({
    type: "SET_OPTION_CHOICE",
    payload: optionChoice
})

// 상품페이지에서의 선택한상품 하위에 있는 옵션의이름액션
export const setOptionChoiceName = (optionChoiceName) => ({
    type: "SET_OPTION_CHOICE_NAME",
    payload: optionChoiceName
})

// 뒤로가기 버튼 클릭시 카운트옵션1로초기화액션
export const setBackDefaultCount = (productDetailCount) => ({
    type:"SET_DEFAULT_COUNT",
    payload: productDetailCount
})

// 상품페이지에서 상품의합계
export const setDetailProductTotal = (detailProdctTotal) => ({
    type:"SET_PRODUCT_DETAIL_TOTAL",
    payload:detailProdctTotal
})

// 장바구니에 상품명넣는 상태액션
export const setBasketInProductTitle = productTitle => ({
    type:"IN_BASKET_PRODUCT_TITLE",
    payload:productTitle
})

// 장바구니에 상품의원가 넣는 상태액션
export const setBasketInOriginProductPrice = originProductPrice => ({
    type:"SET_ORIGIN_PRODUCT_PRICE",
    payload: originProductPrice
})

// 장바구니에 상품넣는 상태액션
export const setBasketInProduct = inBasketProductId => ({
    type:"IN_BASKET_PRODUCT",
    payload:inBasketProductId
})

// 장바구니에 상품넣는 비동기액션
// export const fetchBasketInProduct = (inBasketProductId, productDetailCount, detailProdctTotal, optionChoice, productTitle) => {
export const fetchBasketInProduct = (basketInProduct) => {
    return dispatch => {
        const {productID, count, price, originPrice, option, title, optionName} = basketInProduct // export const fetchBasketInProduct구조분해
        const id = uuid4()
        axios.post(`http://localhost:3000/basket/`, {
            id,
            productID,
            count,
            originPrice,
            price,
            option,
            title,
            optionName
        })
        .then(response => {
            dispatch(setBasketInProduct(response.data))
        })
        .catch(error => {
            console.error(error)
        })
    }
}

// 검색한 주소의 상태액션
export const setSearchAddress = (searchAddress) => ({ // 여기서는, 데이터를 상태에 저장하기위해서 파라미터searchAddress가 필요한거임
    type:"SET_SEARCH_ADDRESS",
    payload: searchAddress
})

// 장바구니에 상품부르는 액션
export const setBasketCallProduct = callProduct => ({
    type:"CALL_PRODUCT",
    payload: callProduct
})

// 장바구니에 상품부르는 비동기액션
export const fetchBasketCallProduct = () => {
    return dispatch => {
        axios.get(`http://localhost:3000/basket`)
            .then(response => {
                dispatch(setBasketCallProduct(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

// 장바구니에 있는 상품의 카운트감소액션
export const setEachProductMinus = eachProductMinus => ({
    type:"EACH_PRODUCT_MINUS",
    payload: eachProductMinus
})

// 장바구니에 있는 상품의 카운트감소 비동기액션
export const fetchEachProductMinus = (id, updateProductData) => {
    return dispatch => {
        axios.put(`http://localhost:3000/basket/${id}`, updateProductData)
            .then(response => {
                dispatch(setEachProductMinus(response.data))                
            })
            .catch(error => {
                console.error(error)
            })
    }
}

// 장바구니에 있는 상품의 카운트증가액션
export const setEachProductPlus = eachProductPlus => ({
    type:"EACH_PRODUCT_PLUS",
    payload: eachProductPlus
})

// 장바구니에 있는 상품의 카운트증가 비동기액션
export const fetchEachProductPlus = (id, updateProductData) => {
    return dispatch => {
        axios.put(`http://localhost:3000/basket/${id}`, updateProductData)
            .then(response => {
                dispatch(setEachProductPlus(response.data))
            })
            .catch(error => {
                console.error(error)
            })
    }
}

// 장바구니에 있는 상품카운트옵션에 따른 금액상태
export const setProductCountPrice = productCountPrice => ({
    type:"SET_PRODUCT_COUNT_PRICE",
    payload: productCountPrice
})

// 장바구니에 있는 상품카운트옵션 비동기액션
export const fetchProductCountPrice = (id, updateProductPrice) => {
    return dispatch => {
        axios.put(`http://localhost:3000/basket/${id}`, updateProductPrice)
            .then(response => {
                dispatch(setProductCountPrice(response.data))
            })
            .catch(error => {
                console.error(error)
            })
    }
}

// 장바구니에서 '닫기'버튼 클릭시 상품의정보(옵션, 카운트갯수)초기화 액션
export const resetProductDetail = () => ({
    type:"RESET_PRODUCT_DETAIL"
})