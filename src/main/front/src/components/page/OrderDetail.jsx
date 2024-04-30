import React, { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../include/Header";

function OrderDetail(){

    const {kakao} = window;

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const orderid = queryParams.get('orderid');
    const [order, setOrder] = useState([]);
    const navigator = useNavigate();
    const userid = sessionStorage.getItem("userid")
    const [userAddress, setUserAddress] = useState([]);
    const [storeAddress, setStoreAddress] = useState([]);


    useEffect(() => {
        if(orderid){
            axios.get(`/main/order/detail?orderid=${orderid}`)
                .then((a)=>{
                    console.log(a.data)
                    setOrder(a.data[0])
                })
                .catch((err)=>{
                    console.error(err)
                })
        }
    }, []);

    useEffect(() => {
        if(order && order.STOREADR){
            axios.get(`/main/userAdr?userid=${userid}`)
                .then((a)=>{
                    setUserAddress(a.data)
                    console.log(a.data)
                })
                .catch((err)=>{
                    console.error(err)
                })
            axios.get(`/main/delivery/store/map?adr=${order.STOREADR}`)
                .then((a)=>{
                    setStoreAddress(a.data)
                    console.log(a.data)
                })
                .catch((err)=>{
                    console.error(err)
                })
        }

    }, [order]);

    useEffect(() => {
        if (userAddress && userAddress.y && userAddress.x && storeAddress && storeAddress.y && storeAddress.x){
            const userMarker = {
                position: new kakao.maps.LatLng(userAddress.y, userAddress.x),
                text: '우리집'
            };
            const storeMarker = {
                position: new kakao.maps.LatLng(storeAddress.y, storeAddress.x),
                text: '우리집'
            }
            const staticMapContainer  = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
                staticMapOption = {
                    center: new kakao.maps.LatLng(37.500281555, 126.867133098),
                    level: 3, // 이미지 지도의 확대 레벨
                    marker: userMarker, storeMarker // 이미지 지도에 표시할 마커
                };
            const staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
        }
    }, [userAddress, storeAddress, order]);

    return(
        <div>
            <Header/>
            <div>
                <p>주문상세보기</p>
                {
                    order && order.status === 0 ? (
                        <strong>배달 진행중</strong>
                    )
                    :
                    order && order.status === 1 && (
                        <strong>배달이 완료되었어요</strong>
                    )
                }
                {
                    order && (
                        <div>
                            <p>{order.STORENAME}</p>
                            <p>{order.orderName}</p>
                            <br/>
                            <div>
                                <div id="staticMap" style={{
                                    width : '500px',
                                    height : '400px'
                                }}></div>
                            </div>
                            <p>주문일시 : {order.ORDERTIME}</p>
                            <p>배달방식 : {order.paymentMethod === "onside" ? <p>현장결재</p> : <p>카카오페이</p>}</p>
                            <br/>
                            <button onClick={()=>{
                                navigator(`/main/delivery/category/storeid?storeid=${order.storeid}`)
                            }}>가게보기</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default OrderDetail