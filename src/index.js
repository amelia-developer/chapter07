import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import { BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
      <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/detail" element={<Detail />}> */}
                  {/**detail페이지에서 카테고리 메뉴를 클릭했을때 navigate로 주소도 바뀌어야하면 이렇게 라우트 설정 쌉가능 */}
                  {/* <Route path="/detail/category/:indexNumber" element={<DetailCategoryBind/>}></Route>
                </Route>
                <Route path="/basket" element={<Basket />}></Route>
            </Routes> */}
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
