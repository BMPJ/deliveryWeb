import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function DeliveryCart() {
    const userid = sessionStorage.getItem("userid");
    const [cart, setCart] = useState([]);
    const [menuid, setMenuid] = useState(null);
    const [menuOptionId, setMenuOptionId] = useState(null);
    const [menu, setMenu] = useState([]);
    const [menuOption, setMenuOption] = useState([]);
    const [loading, setLoading] = useState(true);
    const [price, setPrice] = useState(0);
    const [menuPrice, setMenuPrice] = useState(0)
    const [menuOptionPrice, setMenuOptionPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [request, setRequest] = useState('');
    const navigator = useNavigate();


    useEffect(() => {
        axios
            .get(`/main/delivery/cart?userid=${userid}`)
            .then((a) => {
                console.log(a.data);
                setCart(a.data);
                setQuantity(a.data[0].quantity)
                setLoading(false); // 데이터가 가져와진 후 로딩 상태를 false로 설정
            })
            .catch((err) => {
                console.error(err);
                setLoading(false); // 에러 발생 시 로딩 상태를 false로 설정
            });

    }, []);



    useEffect(() => {
        if (cart.length > 0) {
            const menuidParam = cart[0].menuid;
            const menuOptionIdParam = cart[0].menuOptionId;
            setMenuid(menuidParam);
            setMenuOptionId(menuOptionIdParam);
        }
    }, [cart]);

    useEffect(() => {
        if (menuid != null) {
            axios
                .get(`/main/delivery/cart/menu?menuid=${menuid}`)
                .then((a) => {
                    console.log(a.data);
                    setMenu(a.data);
                    setMenuPrice(a.data[0].price)
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        if (menuOptionId != null) {
            axios
                .get(`/main/delivery/cart/menuOptionId?menuOptionId=${menuOptionId}`)
                .then((a) => {
                    console.log(a.data);
                    setMenuOption(a.data);
                    setMenuOptionPrice(a.data[0].price)
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [menuid, menuOptionId]);

    useEffect(()=> {
        setPrice( (menuPrice + menuOptionPrice) * quantity )

    },[menuPrice, menuOptionPrice, quantity])

    if (loading) {
        return <p>Loading...</p>;
    }


    const kakaopay = () => {
        const { IMP } = window;
        IMP.init('imp11118386');

        const data = {
            pg: 'kakaopay',
            pay_method: 'kakaopay',
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: price,
            name: menu[0].menuName + menuOption[0].option,
            custom_data:request
        }

        IMP.request_pay(data, callback)
        function callback(response){
            const {
                success,
                error_msg,
            } = response;

            const orderName = (quantity === 1) ?
                menu[0].menuName + " + " + menuOption[0].option + '1개' :
                menu[0].menuName + ' + ' + menuOption[0].option + ' 외 ' + (quantity - 1) + '개';

            const order = {
                storeid : cart[0].storeid,
                userid : userid,
                paymentMethod : 'kakaopay',
                totalPrice : price,
                requests : request,
                status : 0,
                orderName : orderName
            }

            if (success) {
                axios.post(`/main/delivery/cart/pay`, order)
                    .then((a)=>{
                        console.log(a)
                        navigator(`/main/delivery/order?userid=${userid}`)
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

        const orderName = (quantity === 1) ?
            menu[0].menuName + " + " + menuOption[0].option + '1개' :
            menu[0].menuName + ' + ' + menuOption[0].option + ' 외 ' + (quantity - 1) + '개';

        const order = {
            storeid: cart[0].storeid,
            userid: userid,
            paymentMethod: 'onside',
            totalPrice: price,
            requests: request,
            status: 0,
            orderName : orderName
        }
        
        axios.post(`/main/delivery/cart/pay`, order)
            .then((a)=>{
                console.log(a)
                 navigator(`/main/delivery/order?userid=${userid}`)
            })
            .catch((err)=>{
                console.error(err)
            })
    }

    function MenuName(){
        if(quantity===1){
            return <p>{menu[0].menuName} + {menuOption[0].option} 1개</p>
        }else if(quantity>=2){
            return <p>{menu[0].menuName} + {menuOption[0].option} 외 {quantity-1}개</p>
        }
    }
    return (
        <div>
            {cart.length > 0 && menuOption.length > 0 && (
                <div>
                    <div>
                        <div>
                            <p>주문내역</p>
                        </div>
                        <div>
                            <p>{cart[0].nickname}</p>
                        </div>
                        <div>
                            <p>{cart[0].storeName}</p>
                        </div>
                        <div>
                            {MenuName()}
                            <p>{price} 원</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>결제하기</p>
                        </div>
                        <div>
                            <p>배달정보</p>
                        </div>
                        <div>
                            <label>주소</label>
                            <div>{cart[0].address}</div>
                            <div>{cart[0].address_detail}</div>
                        </div>
                        <div>
                            <label>휴대전화번호</label>
                            <div>{cart[0].phone}</div>
                        </div>
                        <div>
                            <div>
                                <p>주문시 요청사항</p>
                            </div>
                            <div>
                                <textarea
                                    placeholder={"요청사항을 남겨주세요"}
                                    name="request"
                                    onChange={(e)=>
                                        setRequest(e.target.value)
                                }/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div>
                <div>
                    <div onClick={onside}>현장결제</div>
                </div>
                <div>
                    <div onClick={kakaopay}>카카오페이</div>
                </div>
            </div>

        </div>
    );
}

export default DeliveryCart;
