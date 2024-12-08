import React from 'react'
import axios from 'axios'

const KAKAO_API_KEY = '49a0d191e809ae300576f31926c20b64'

export const address = async(keyword) => {
    const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(keyword)}`
    const config = {
        headers: {
            Authorization: `KakaoAK ${KAKAO_API_KEY}`,
        },
    }
    try {
        const response = await axios.get(url, config)
        return response.data.documents
    } catch(error) {
        console.error(`카카오 주소 오류`, error)
        return []
    }
}

export default address
