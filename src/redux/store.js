import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer"

const store = configureStore({
    reducer: rootReducer,// configureStore의 옵션에 reducer가 있음, 그 옵션reducer에 rootReducer(리듀서계의 총책임자)를 넣어줌 ->
                         // 이걸 store라는 이름으로 만들어진 변수에 저장함
});

export default store