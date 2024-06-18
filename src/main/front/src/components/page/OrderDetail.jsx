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
        if (storeAddress && storeAddress.y && storeAddress.x && userAddress && userAddress.y && userAddress.x) {

            const x1 = parseFloat(storeAddress.x);
            const x2 = parseFloat(userAddress.x);
            const y1 = parseFloat(storeAddress.y);
            const y2 = parseFloat(userAddress.y);

            const centerX = (x1 + x2) / 2;
            const centerY = (y1 + y2) / 2;

            const staticMapContainer = document.getElementById('staticMap');
            const mapOption = {
                center: new kakao.maps.LatLng(centerY, centerX),
                level: 3
            };
            const map = new kakao.maps.Map(staticMapContainer, mapOption);

            const storeMarkerPosition = new kakao.maps.LatLng(y1, x1);
            const storeMarker = new kakao.maps.Marker({
                position: storeMarkerPosition
            });
            storeMarker.setMap(map);

            const userMarkerPosition = new kakao.maps.LatLng(y2, x2);
            const userMarker = new kakao.maps.Marker({
                position: userMarkerPosition
            });
            userMarker.setMap(map);

            const storeOverlayContent = `<div style="padding:5px; background-color:white; border:1px solid black;">${order.STORENAME}</div>`;
            const storeOverlay = new kakao.maps.CustomOverlay({
                position: storeMarkerPosition,
                content: storeOverlayContent,
                yAnchor: 1.8
            });
            storeOverlay.setMap(map);

            const userOverlayContent = '<div style="padding:5px; background-color:white; border:1px solid black;">우리집</div>';
            const userOverlay = new kakao.maps.CustomOverlay({
                position: userMarkerPosition,
                content: userOverlayContent,
                yAnchor: 1.8
            });
            userOverlay.setMap(map);
        }
    }, [userAddress, storeAddress]);

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