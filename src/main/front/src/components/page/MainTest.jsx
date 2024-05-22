import React, { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../include/Header";

function MainTest() {

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

            // 매장 마커 생성
            const storeMarkerPosition = new kakao.maps.LatLng(y1, x1);
            const storeMarker = new kakao.maps.Marker({
                position: storeMarkerPosition
            });
            storeMarker.setMap(map);

            // 사용자 마커 생성
            const userMarkerPosition = new kakao.maps.LatLng(y2, x2);
            const userMarker = new kakao.maps.Marker({
                position: userMarkerPosition
            });
            userMarker.setMap(map);

            // 매장 텍스트 오버레이
            const storeOverlayContent = `<div style="padding:5px; background-color:white; border:1px solid black;">${order.STORENAME}</div>`;
            const storeOverlay = new kakao.maps.CustomOverlay({
                position: storeMarkerPosition,
                content: storeOverlayContent,
                yAnchor: 2
            });
            storeOverlay.setMap(map);

            // 사용자 텍스트 오버레이
            const userOverlayContent = '<div style="padding:5px; background-color:white; border:1px solid black;">우리집</div>';
            const userOverlay = new kakao.maps.CustomOverlay({
                position: userMarkerPosition,
                content: userOverlayContent,
                yAnchor: 2
            });
            userOverlay.setMap(map);
        }
    }, [userAddress, storeAddress]);

    return(
        <div>
            <div id="staticMap" style={{
                width : '500px',
                height : '400px'
            }}></div>
        </div>
    )
}
export default MainTest