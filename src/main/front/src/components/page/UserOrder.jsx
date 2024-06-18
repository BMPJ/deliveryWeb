import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Header from "../include/Header";
import {Wrap} from "../../styles/UserOrderStyle";

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
    }, []);



    return(
        <div>
            <Header/>
            <Wrap>
                <div className="title">
                    <strong>주문내역</strong>
                </div>
                <div>
                    {order.length > 0 ? (
                        order.map(function (a, i) {
                            if (a.status === 0) {
                                return (
                                    <div key={i} >
                                        <div className="content">
                                            <div className="right ing">{a.ORDERTIME} 배달중</div>
                                            <div>
                                                <div className="store" onClick={()=>{
                                                    navigator(`/main/delivery/category/storeid?storeid=${a.storeid}`)
                                                }}>{a.name}</div>
                                                <div className="center">
                                                    <div>{a.orderName}</div>
                                                    <div>{a.totalPrice} 원</div>
                                                </div>
                                                <div className="detail" onClick={()=>{
                                                    navigator(`/main/order/detail?orderid=${a.orderid}`)}
                                                }>상세보기</div>
                                            </div>
                                            <br/><br/>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={i}>
                                        <div className="content">
                                            <div className="right done">{a.ORDERTIME} 배달완료</div>
                                            <div>
                                                <div className="store" onClick={()=>{
                                                    navigator(`/main/delivery/category/storeid?storeid=${a.storeid}`)
                                                }}>{a.name}</div>
                                                <div className="center">
                                                    <div>{a.orderName}</div>
                                                    <div>{a.totalPrice} 원</div>
                                                </div>
                                                {
                                                    a.CNT > 0 ?
                                                        (
                                                            <div className="review finish">리뷰작성완료</div>
                                                        )
                                                        :
                                                        (
                                                            <div className="review">
                                                                <div onClick={()=>{
                                                                    navigator(`/main/delivery/store/reviewWrite?orderid=${a.orderid}`)
                                                                }}
                                                                >리뷰작성</div>
                                                            </div>
                                                        )

                                                }
                                                <div className="detail" onClick={()=>{
                                                    navigator(`/main/order/detail?orderid=${a.orderid}`)}
                                                }>상세보기</div>
                                            </div>
                                            <br/><br/>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    ) : (
                        <p>주문내역이 없습니다</p>
                    )}
                </div>
            </Wrap>
        </div>
    )
}

export default UserOrder;