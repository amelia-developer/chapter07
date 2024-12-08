import React, { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setSearchAddress} from '../../redux/action'
// import DaumPostcode from 'react-daum-postcode'
import { address } from "../../api/address";

const LayerInfo3 = ({isLayerOpen, isLayerClose}) => {
    const dispatch = useDispatch() // 클래스형컴포넌트에서 사용하던 'mapDispatchToProps'
    const searchAddress = useSelector(state => state.searchAddress) // 클래스형컴포넌트에서 사용하던 'mapStateToProps'
    const [isDaumOpen, setIsDaumOpen] = useState(false) // 주소검색레이어열기 유무
    const [addressList, setAddressList] = useState([]) // 주소검색결과리스트들
    const [isSearchKeyWord, setIsSearchKeyWord] = useState('') // 주소검색을위해 입력한 키워드

    useEffect(() => {
        if(isLayerOpen) {
            document.body.style.overflowY = 'hidden'
        }
    }, [isLayerOpen])

    if(!isLayerOpen) {
        return null // false일때 컴포넌트 렌더링 하지 않기 위한 조건_이LayerInfo3.jsx를 불러오기위한 부모컴포넌트
                    // DeliveryAddress컴포넌트에서 if조건에 ' : null'을 줬기때문에 if부정연산자 조건의 결과에 return null을 해주는거임
    }

    // 카카오주소검색 API호출
    const onKeywordAddressSearch = async() => {
        if(!isSearchKeyWord.trim()) {
            alert(`검색어를 입력해주세요`)
            return
        }

        const result = await address(isSearchKeyWord)
        setAddressList(result)
    }

    // 검색주소결과 선택 시
    const handleAddressSelect = (selectAddress) => {
        dispatch(setSearchAddress(selectAddress))
        setAddressList([])
    }

    // 카카오주소api사용하기 위해 카카오에서 제공하는 js파일 불러오는방법
    // useEffect(() => {
    //     const script = document.createElement('script')
    //     script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
    //     script.async = true
    //     document.body.appendChild(script)
        
    //     return() => {
    //         document.body.removeChild(script)
    //     }
    // },[])

    // 카카오로 주소검색이 완료되었을때 호출하는 함수
    // const handleAddressResult = (data) => {
    //     let fullAddress = data.address;
    //     let extraAddress = '';
    
    //     if (data.addressType === 'R') {
    //         if (data.bname !== '') {
    //         extraAddress += data.bname;
    //         }
    //         if (data.buildingName !== '') {
    //         extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    //         }
    //         fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    //     }
    
    //     console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    //     dispatch(setSearchAddress(fullAddress))
    //     setIsDaumOpen(false)
    // }

    const onSearchAddress = (e) => {
        setIsSearchKeyWord(e.target.value)
    }

    if(!isLayerOpen) {
        return null // false일때 컴포넌트 렌더링 하지 않기 위한 조건_이LayerInfo3.jsx를 불러오기위한 부모컴포넌트
                    // DeliveryAddress컴포넌트에서 if조건에 ' : null'을 줬기때문에 if부정연산자 조건의 결과에 return null을 해주는거임
    }

    return (
        <>
             <div className="layoutBox">
                <div className="inner">
                    <div className="panel">
                        <button onClick={isLayerClose}>닫기</button>
                        <div className="cover">
                            <div className="post">
                                <h2>배달받을 주소</h2>
                                <div className="search">
                                    <input type="text" placeholder="예)판교역로 330, 분당주공" 
                                    onChange={(e) => setIsSearchKeyWord(e.target.value)} value={isSearchKeyWord}/>
                                    <a className="btn_search" onClick={onKeywordAddressSearch}>검색</a>
                                </div>
                                {
                                    console.log(`addressList = ${JSON.stringify(addressList)}`)
                                    
                                }
                                <div className="list-wrapper">
                                    <div className="info">
                                        <p>하단과 같은 조합으로 검색을 하시면 정확하게 결과를 검색할 수 있습니다</p>
                                        <dl>
                                            <dt>도로명 + 건물번호</dt>
                                            <dd>예) 판교역로<i className="nanum">330</i>+ 제주 첨단로<i className="nanum">230</i></dd>
                                            <dt>지역명(동/리) + 번지</dt>
                                            <dd>예) 삼평동 670,<i className="nanum">670</i>+ 제주 영평동<i className="nanum">2210</i></dd>
                                            <dt>지역명(동) + 건물명(아파트명)</dt>
                                            <dd>예) 분당 주공, 연수동 주공<i className="nanum">4</i>차</dd>
                                            <dt>도로명 + 건물번호</dt>
                                            <dd>예) 분당 우체국사서함 <i className="nanum">1-120</i></dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="detail">
                                    <input type="text" placeholder="상세주소를 입력하세요"/>
                                </div>
                                <p className="btn-cover">
                                    <a className="btn">닫기</a>
                                    <a className="btn">다음</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/**onComplete는 실행이 완료되면, isDaumOpen은 조건부렌더링 */}
            {/* {
                isDaumOpen && ( 
                    <DaumPostcode onComplete={handleAddressResult}/> 
                )
            } */}
        </>
    )
}

export default LayerInfo3;