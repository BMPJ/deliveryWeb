import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {
    Button,
    Cnt,
    DetailFoot,
    Line,
    Menu,
    Modal, Option,
    Order,
    OrderCnt,
    Price,
    Right,
    Store
} from "../../styles/DeliveryStoreStyle";
import Header from "../include/Header";

function DeliveryStore() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const storeid = queryParams.get('storeid');
    const [store, setStore] = useState([]);
    const [menu, setMenu] = useState([]);
    const navigator = useNavigate();
    const [menuOptionId, setMenuOptionId] = useState(0);

    // 각 메뉴 아이템에 대한 모달 열기/닫기 상태를 저장하는 state
    const [orderStates, setOrderStates] = useState(menu.map(() => false));

    const [option, setOption] = useState([]);

    useEffect(() => {
        if (storeid) {
            axios.get(`/main/delivery/storeid?storeid=${storeid}`)
                .then((a) => {
                    console.log(a.data)
                    setStore(a.data)
                })
                .catch((err) => {
                    console.error(err)
                });
            axios.get(`/main/delivery/storeMenu?storeid=${storeid}`)
                .then((a) => {
                    console.log(a.data)
                    setMenu(a.data)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [])

    const [menuid, setMenuid] = useState(0);

    useEffect(() => {
        axios.get(`/main/delivery/menuOption?menuid=${menuid}`)
            .then((a)=> {
                console.log(a.data)
                setOption(a.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [menuid]);

    const [orderCnt, setOrderCnt] = useState(1);
    const decrease = ()=>{
        if(orderCnt>1){
            setOrderCnt(orderCnt - 1)
        }
    }
    const increase = ()=>{
        setOrderCnt(orderCnt + 1)
    }

    const [total, setTotal] = useState(0);
    const [copyPrice, setCopyPrice] = useState(0);
    const [optionPrice, setOptionPrice] = useState(0);

    const totalPrice = ()=>{
        setTotal((copyPrice+optionPrice) * orderCnt);
    }
    useEffect(()=>{
        totalPrice();
    },[total, orderCnt, optionPrice])

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);


    useEffect(() => {
        if (option.length > 0) {
            setMenuOptionId(option[0].menuOptionId);
        }
    }, [option]);

    const userid = sessionStorage.getItem("userid")
    const [cart, setCart] = useState({
            'userid' : userid,
            'storeid' : storeid,
            'menuid' : menuid,
            'menuOptionId' : menuOptionId,
            'quantity' : orderCnt
        }
    )
    useEffect(() => {
        setCart(preCart=>({
            ...preCart,
            menuid: menuid,
            menuOptionId : menuOptionId,
            quantity : orderCnt})
        )
    }, [storeid, menuid, menuOptionId, orderCnt, option]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);
    const addCart = ()=>{
        if(cart) {
            if(total>store[0].minDeliveryPrice) {
                axios.post('/main/delivery/cart', cart)
                    .then((a) => {
                        console.log(a.data)
                        if (a.data === 1) {
                            navigator(`/main/delivery/cart?userid=${userid}`)
                        } else {
                            alert("실패")
                        }
                    }).catch((err) => {
                    console.error(err)
                })
            }else{
                alert("최소주문금액보다 작습니다")
            }
        }
    }
    return (
        <div>
            <Header/>
            {
                store.map(function (a, i) {
                    return (
                        <Store key={i}>
                            <div>
                                {store[i].name}
                            </div>
                            <img src="/" alt={store[i].name} />
                            <div>
                                평점 : {store[i].rating}<br />
                                최소주문금액 :{store[i].minDeliveryPrice}
                            </div>
                            <div>
                                <button onClick={()=>{
                                    navigator(`/main/delivery/store/review?storeid=${a.storeid}`)
                                }}
                                >리뷰보기</button>
                            </div>  
                        </Store>
                    )
                })
            }

            {
                menu.map(function (a, i) {
                    return (
                        <Menu key={i} onClick={() => {
                            // 해당 메뉴 아이템에 대한 모달 열기 상태를 토글
                            const newOrderStates = [...orderStates];
                            newOrderStates[i] = !newOrderStates[i];
                            setOrderStates(newOrderStates);
                            setMenuid(menu[i].menuid)
                            setTotal(menu[i].price)
                            setCopyPrice(menu[i].price)
                            setOptionPrice(0)
                            setSelectedOptionIndex(0)
                        }}>
                            {
                                // 개별 메뉴 아이템에 대한 모달 열기 상태에 따라 모달 렌더링
                                orderStates[i] &&
                                <div onClick={e => {
                                    // 모달 영역 외부를 클릭했을 때 모달 닫기
                                    if (e.target === e.currentTarget) {
                                        const newOrderStates = [...orderStates];
                                        newOrderStates[i] = false;
                                        setOrderStates(newOrderStates);
                                    }
                                }}>
                                    <Modal>
                                        <Order onClick={e => e.stopPropagation()}>
                                            <p>메뉴 상세</p>
                                            <Line/>
                                            <p>{menu[i].menuName}</p>
                                            가격<Price>{menu[i].price} 원</Price>
                                            <Line/>
                                            {
                                                option.map(function (a,i){
                                                    return(
                                                        <div key = {i}>
                                                            <Option>
                                                                <input type="radio" name="optionGroup"
                                                                checked={selectedOptionIndex === i}
                                                                onChange={()=>{
                                                                    setOptionPrice(option[i].price)
                                                                    setSelectedOptionIndex(i);
                                                                    setMenuOptionId(option[i].menuOptionId)
                                                                }}
                                                                /> {option[i].option}
                                                                <Price>+ {option[i].price} 원</Price>
                                                            </Option>
                                                        </div>
                                                    )
                                                })
                                            }

                                            <Cnt>
                                                <p>수량</p>
                                                <Right>
                                                    <button onClick={decrease}> - </button>
                                                    <OrderCnt value={orderCnt} readOnly/>
                                                    <button onClick={increase}> + </button>
                                                </Right>
                                            </Cnt>
                                            <Line/>
                                            <Cnt>
                                                <p>총 주문금액</p>
                                                <Right>
                                                    {total}
                                                </Right>
                                            </Cnt>
                                            <DetailFoot>
                                                <Button onClick={addCart}>장바구니 담기</Button>
                                                <Button onClick={() => {
                                                    const newOrderStates = [...orderStates];
                                                    newOrderStates[i] = false;
                                                    setOrderStates(newOrderStates);
                                                    setOrderCnt(1)
                                                }}>닫기</Button>
                                            </DetailFoot>
                                        </Order>
                                    </Modal>
                                </div>
                            }
                            <div>
                                {menu[i].menuName}
                            </div>
                            <div>
                                {menu[i].price}
                            </div>
                        </Menu>
                    )
                })
            }
        </div>
    );
}

export default DeliveryStore;
