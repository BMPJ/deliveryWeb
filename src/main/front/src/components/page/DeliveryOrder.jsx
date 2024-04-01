import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function DeliveryOrder(){

    const userid = sessionStorage.getItem("userid");
    const [order, setOrder] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        axios.get(`/main/delivery/order?userid=${userid}`)
            .then((a)=>{
                console.log(a)
                setOrder(a.data);
            })
            .catch((err)=>{
                console.error(err)
            })
    }, []);

    return(
        <div>
            <div>
                <strong>주문내역</strong>
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
                                        </div>
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

export default DeliveryOrder;