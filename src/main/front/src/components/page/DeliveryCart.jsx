import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Header from "../include/Header";
import {Order, Pay, Wrab} from "../../styles/DeliveryCartStyle.js";

function DeliveryCart() {
    const userid = sessionStorage.getItem("userid");
    const [cart, setCart] = useState([]);
    const [menu, setMenu] = useState([]);
    const [menuOption, setMenuOption] = useState([]);
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0)
    const [request, setRequest] = useState('');
    const navigator = useNavigate();
    const [user, setUser] = useState([]);
    const [storeid, setStoreid] = useState();

    useEffect(() => {
        axios
            .get(`/main/delivery/cart?userid=${userid}`)
            .then((a) => {
                console.log(a.data);
                setCart(a.data);
                setPrice(a.data[0].SUM)
                setStoreid(a.data[0].storeid)
            })
            .catch((err) => {
                console.error(err);
            });
        axios.get(`/main?userid=${userid}`)
            .then((a)=>{
                setUser(a.data)
                console.log(a.data)
            })
            .catch((err)=>{
                console.error(err)
            })
    }, []);



    const kakaopay = () => {
        const { IMP } = window;
        IMP.init('imp11118386');

        let menu = "";
        if(cart) {
            for (let i = 0; i < cart.length; i++) {
                menu += cart[i].menuName + "+" + cart[i].op + " " + cart[i].quantity + "개"
                if(i!==cart.length-1){
                    menu += " & "
                }
            }
        }
        console.log(menu)

        const data = {
            pg: 'kakaopay',
            pay_method: 'kakaopay',
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: price,
            name: menu,
            custom_data:request
        }

        IMP.request_pay(data, callback)
        function callback(response){
            const {
                success,
                error_msg,
            } = response;

            const order = {
                storeid : storeid,
                userid : userid,
                paymentMethod : 'kakaopay',
                totalPrice : price,
                requests : request,
                status : 0,
                orderName : menu
            }

            if (success) {
                axios.post(`/main/delivery/cart/pay`, order)
                    .then((a)=>{
                        console.log(a)
                        navigator(`/main/order?userid=${userid}`)
                    })
                    .catch((err)=>{
                        console.error(err)
                    })
            } else {
                alert(`결제 실패: ${error_msg}`);
            }
        }
    }

    const onside = () => {

        let menu = "";
        if(cart) {
            for (let i = 0; i < cart.length; i++) {
                menu += cart[i].menuName + "+" + cart[i].op + " " + cart[i].quantity + "개"
                if(i!==cart.length-1){
                    menu += " & "
                }
            }
        }

        const order = {
            storeid: storeid,
            userid: userid,
            paymentMethod: 'onside',
            totalPrice: price,
            requests: request,
            status: 0,
            orderName : menu
        }
        
        axios.post(`/main/delivery/cart/pay`, order)
            .then((a)=>{
                console.log(a)
                 navigator(`/main/order?userid=${userid}`)
            })
            .catch((err)=>{
                console.error(err)
            })
    }



    return (
        <div>
            <Header/>
            {cart.length > 0 && user.length > 0 && (
                <Wrab>
                    <Pay>
                        <div className="title">
                            <p>결제하기</p>
                        </div>
                        <div className="info">
                            <p>배달정보</p>
                        </div>
                        <div className="detail">
                            <div className="form">
                                <label className="userinfo">주소</label>
                                <div className="user">{user[0].address}</div>
                                <div className="user">{user[0].address_detail}</div>
                            </div>
                            <div className="form">
                                <label className="userinfo">휴대전화번호</label>
                                <div className="user">{user[0].phone}</div>
                            </div>
                        </div>
                        <div>
                            <div className="request">
                                <p>주문시 요청사항</p>
                            </div>
                            <div className="detail">
                                <textarea
                                    className="text"
                                    placeholder={"요청사항을 남겨주세요"}
                                    name="request"
                                    onChange={(e)=>
                                        setRequest(e.target.value)
                                }/>
                            </div>
                        </div>
                        <div>
                            <div className="info">
                                <p>결제수단선택</p>
                            </div>
                            <div className="payment">
                                <div onClick={onside}>현장결제</div>
                            </div>
                            <div className="payment">
                                <div onClick={kakaopay}>카카오페이</div>
                            </div>
                        </div>
                    </Pay>
                    <Order>
                        <div className="title">주문내역</div>
                        <div className="store">
                            {cart[0].name}
                        </div>
                        <div>
                            <div className="map">
                            {
                                cart.map(function (a,i){
                                    return(
                                        <div key={i} className="menu">
                                            <div className="name">
                                                <span>{cart[i].menuName} x {cart[i].quantity}개</span>
                                            </div>
                                            <div className="price">
                                                <p>{cart[i].price} 원</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className="total">
                                <div className="name">
                                    <span>총 결재 금액</span>
                                </div>
                                <div className="price">
                                    <span>{cart[0].SUM} 원</span>
                                </div>
                            </div>
                        </div>
                    </Order>
                </Wrab>
            )}


        </div>
    );
}

export default DeliveryCart;
