import React, { useEffect } from 'react'
import kfcSprite from '../img/kfc_sprite.png'
import axios from 'axios'
import { connect } from "react-redux"
import { setBestMenu, setLoading } from '../redux/action'

const mapStateToProps = state => { // 상태를 읽어와서 화면에 표시해야하는 경우
    return {
        bestMenu: state.bestMenu,
        loading: state.loading
    }
}

const mapDispatchtoProps = dispatch => { // dispathch는 액션을 스토어로 보내는 함수, 액션을 디스패치해서 상태를 업데이트해야하는경우
    return {
        setBestMenu: Menus => dispatch(setBestMenu(Menus)),
        setLoading: () => dispatch(setLoading())
    }
}

const BestMenu = ({setBestMenu, bestMenu, setLoading, loading}) => {
// console.log(`bestMenu = ${JSON.stringify(bestMenu)}`);

    useEffect(()=> {
        axios.get(`http://localhost:3000/menu`)
            .then(response => {
                // console.log(`response = ${JSON.stringify(response.data)}`);
                setBestMenu(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [setBestMenu, setLoading])
    if (loading) { // TODO:게시판만들었던거참고해서 로딩만들기
        return <div>로딩중 로딩중 로딩중</div>
    }
    return (
        <>
            <div className="bestBox">
                <div className="title">
                    <img src={kfcSprite} alt="kfc스프라이트이미지"/>
                    <h2>BEST MENU</h2>
                </div>
                <div className="items">
                    <ul>
                        {
                            bestMenu.map((value, idx) => {
                                // console.log(`value = ${JSON.stringify(value)}`);
                               return   <li key={idx}>
                                            <a href="#">
                                                <img src={`/images/${value.id}.png`} alt={value.title}/> 
                                        {/**src>img로 하면 빌드과정 필요 및 빌드과정에서 변환, 그리고 import도 필요함. 
                                         * 따라서 정적파일(폰트,이미지, 아이콘)등은 public으로 넣고, 이는 빌드과정에 포함되지 않음*/}
                                                <span className="title_menu">{value.title}</span>
                                                <span className="sub_text">{value.subText}</span>
                                                <span className="price">{value.price}</span>
                                            </a>
                                        </li>
                            })
                        }
                    </ul>
                </div>
                <div className="btnMoreMenu">
                    <a href="#">다양한 메뉴 보러가기 &gt;</a>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchtoProps)(BestMenu)