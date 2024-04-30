import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Header from "../include/Header";

function UserOrder(){

    const {kakao} = window;

    const userid = sessionStorage.getItem("userid");
    const [order, setOrder] = useState([]);
    const navigator = useNavigate();
    const [userAdr, setUserAdr] = useState([]);

    useEffect(() => {
        axios.get(`/main/delivery/order?userid=${userid}`)
            .then((a)=>{
                console.log(a.data)
                setOrder(a.data);
            })
            .catch((err)=>{
                console.error(err)
            })
        axios.get(`/main/userAdr?userid=${userid}`)
            .then((a)=>{
                console.log(a.data)

                const userMarker = {
                    position: new kakao.maps.LatLng(a.data.y, a.data.x),
                    text: '우리집'
                };

                const staticMapContainer  = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
                    staticMapOption = {
                        center: new kakao.maps.LatLng(a.data.y, a.data.x),
                        level: 3, // 이미지 지도의 확대 레벨
                        marker: userMarker // 이미지 지도에 표시할 마커
                    };
                const staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
            })
            .catch((err)=>{
                console.error(err)
            })

    }, []);



    return(
        <div>
            <Header/>
            <div>
                <strong>주문내역</strong>
            </div>
            <div>
                <div id="staticMap" style={{
                    width : '500px',
                    height : '400px'
                }}></div>
            </div>
            <div>
                {order.length > 0 ? (
                    order.map(function (a, i) {
                        if (a.status === 0) {
                            return (
                                <div key={i}>
                                    <div>
                                        <p>{a.ORDERTIME} 배달중</p>
                                        <div>
                                            <strong onClick={()=>{
                                                navigator(`/main/delivery/category/storeid?storeid=${a.storeid}`)
                                            }}>{a.name}</strong>
                                            <p>{a.orderName}</p>
                                            <p>{a.totalPrice} 원</p>
                                            <button onClick={()=>{
                                                navigator(`/main/order/detail?orderid=${a.orderid}`)}
                                            }>상세보기</button>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div key={i}>
                                    <div>
                                        <p>{a.ORDERTIME} 배달완료</p>
                                        <div>
                                            <strong onClick={()=>{
                                                navigator(`/main/delivery/category/storeid?storeid=${a.storeid}`)
                                            }}>{a.name}</strong>
                                            <p>{a.orderName}</p>
                                            <p>{a.totalPrice} 원</p>
                                            <button onClick={()=>{
                                                navigator(`/main/order/detail?orderid=${a.orderid}`)}
                                            }>상세보기</button>
                                        </div>
                                            {
                                                a.CNT > 0 ?
                                                    (
                                                        <div>
                                                            <button disabled>리뷰작성완료</button>
                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div>
                                                            <button onClick={()=>{
                                                                navigator(`/main/delivery/store/reviewWrite?orderid=${a.orderid}`)
                                                            }}
                                                            >리뷰작성</button>
                                                        </div>
                                                    )

                                            }
                                            <br/>
                                    </div>
                                </div>
                            );
                        }
                    })
                ) : (
                    <p>주문내역이 없습니다</p>
                )}
            </div>
        </div>
    )
}

export default UserOrder;