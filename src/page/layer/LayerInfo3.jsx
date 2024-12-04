import React, { useEffect } from 'react'

const LayerInfo3 = ({isLayerOpen, isLayerClose}) => { 
    useEffect(() => {
        if(isLayerOpen) {
            document.body.style.overflowY = 'hidden'
        }
    }, [isLayerOpen])

    if(!isLayerOpen) {
        return null // false일때 컴포넌트 렌더링 하지 않기 위한 조건_이LayerInfo3.jsx를 불러오기위한 부모컴포넌트
                    // DeliveryAddress컴포넌트에서 if조건에 ' : null'을 줬기때문에 if부정연산자 조건의 결과에 return null을 해주는거임
    }

    return (
        <>
             <div className="layoutBox">
                <div className="inner">
                    <div className="panel">
                        {/**TODO:해야함*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayerInfo3