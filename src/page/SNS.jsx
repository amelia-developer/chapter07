import React, { useEffect } from 'react'
import kfcSprite from '../img/kfc_sprite.png'
import { connect } from "react-redux"
import {setSNSList} from '../redux/action'
import axios from 'axios'

const mapStateToProps = state => {
    return {
        snsList: state.snsList
    }
}

const mapDispatchtoProps = dispatch => { // useEffect로 데이터를 가져와서 의존성배열의 상태에 따라 useEffect를 활용하므로 dispatch가 필요하다
    return {
        setSNSList:value => dispatch(setSNSList(value))
    }
}

const SNS = ({snsList, setSNSList}) => {
    
    useEffect(()=> {
        axios.get(`http://localhost:3000/sns`)
            .then(response => {
                /// console.log(`response.data = ${JSON.stringify(response.data)}`);      
                setSNSList(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [setSNSList]) 

    // console.log(`snsList = ${JSON.stringify(snsList)}`);

    return (
        <>
            <div className="snsBox">
                <div className="title">
                    <img src={kfcSprite} alt="kfc스프라이트이미지"/>
                    <h2>KFC FACEBOOK,<br/>INSTAGRAM</h2>
                </div>
                <div className="items">
                    <ul>
                        {
                           snsList.map((value, idx) => {
                                console.log(`value = ${JSON.stringify(value)}`);
                                
                                return  <li key={idx}>
                                            <a href="#">
                                                <img src={`/images/${value.id}.jpg`} alt=""/>
                                            </a>
                                            {/* <p>
                                                <span className="writer">kfc_korea</span>
                                                <span className="media">+팔로워</span>
                                            </p> */}
                                        </li>
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchtoProps)(SNS)
