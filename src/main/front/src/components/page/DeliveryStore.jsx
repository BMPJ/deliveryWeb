import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {
    Button,
    Cnt,
    DetailFoot,
    Line,
    Menu, MenuButton, MenuWrap,
    Modal, Option,
    Order,
    OrderCnt,
    Price,
    Right,
    Store, Wrap
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
    const [review, setReview] = useState([]);
    const [rating, setRating] = useState([]);
    const [menuOpen, setMenuOpen] = useState(true);
    const [reviewOpen, setReviewOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);
    const [userCart, setUserCart] = useState([]);
    const [cartPrice, setCartPrice] = useState(0);

    // 각 메뉴 아이템에 대한 모달 열기/닫기 상태를 저장하는 state
    const [orderStates, setOrderStates] = useState(menu.map(() => false));

    const [option, setOption] = useState([]);

    const {kakao} = window;

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
            axios.get(`/main/delivery/reviewList?storeid=${storeid}`)
                .then((a) => {
                    console.log(a.data)
                    setReview(a.data)
                })
                .catch((err) => {
                    console.error(err)
                });
            axios.get(`/main/delivery/reviewCount?storeid=${storeid}`)
                .then((a) => {
                    console.log(a.data)
                    setRating(a.data)
                })
                .catch((err) => {
                    console.error(err)
                });
            axios.get(`/main/delivery/getCart?userid=${userid}`)
                .then((a)=>{
                    console.log(a)
                    setUserCart(a.data)
                })
                .catch((err)=>{
                    console.error(err)
                })
        }
    }, [])

    const [menuid, setMenuid] = useState(0);

    useEffect(() => {
        axios.get(`/main/delivery/menuOption?menuid=${menuid}`)
            .then((a) => {
                console.log(a.data)
                setOption(a.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [menuid]);

    const [orderCnt, setOrderCnt] = useState(1);
    const decrease = () => {
        if (orderCnt > 1) {
            setOrderCnt(orderCnt - 1)
        }
    }
    const increase = () => {
        setOrderCnt(orderCnt + 1)
    }

    const [total, setTotal] = useState(0);
    const [copyPrice, setCopyPrice] = useState(0);
    const [optionPrice, setOptionPrice] = useState(0);

    const totalPrice = () => {
        setTotal((copyPrice + optionPrice) * orderCnt);
    }
    useEffect(() => {
        totalPrice();
    }, [total, orderCnt, optionPrice])

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);


    useEffect(() => {
        if (option.length > 0) {
            setMenuOptionId(option[0].menuOptionId);
        }
    }, [option]);

    const userid = sessionStorage.getItem("userid")
    const [cart, setCart] = useState({
            'userid': userid,
            'storeid': storeid,
            'menuid': menuid,
            'menuOptionId': menuOptionId,
            'quantity': orderCnt
        }
    )
    useEffect(() => {
        setCart(preCart => ({
                ...preCart,
                menuid: menuid,
                menuOptionId: menuOptionId,
                quantity: orderCnt
            })
        )

    }, [storeid, menuid, menuOptionId, orderCnt, option, userCart]);


    const addCart = () => {
        if (cart) {
            axios.post('/main/delivery/cart', cart)
                .then((a) => {
                    console.log('cart')
                    console.log(a.data)
                    setUserCart(a.data)
                }).catch((err) => {
                console.error(err)
            })
        }
    }

    const deleteCart = ()=>{
        axios.get(`/main/delivery/deleteCart?userid=${userid}`)
            .then((a)=>{
                console.log(a.data)
                window.location.reload();
            })
            .catch((err)=>{
                console.error(err)
            })
    }

    function deleteMenu(cartid){
        axios.get(`/main/user/cartDeleteMenu?cartid=${cartid}`)
            .then((a)=>{
                console.log(a.data)
                window.location.reload();
            })
            .catch((err)=>{
                console.error(err)
            })
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setReviewOpen(false);
        setInfoOpen(false);
    };

    const toggleReview = () => {
        setReviewOpen(!reviewOpen);
        setMenuOpen(false);
        setInfoOpen(false);
    };

    const toggleInfo = () => {
        setInfoOpen(!infoOpen);
        setReviewOpen(false);
        setMenuOpen(false);
    }



    useEffect(() => {
        if(store.length>0) {
            axios.get('/main/delivery/store/map', {params : {adr : store[0].address + ' ' + store[0].address_detail}})
                .then((a)=>{
                    console.log(a.data)

                    const marker = {
                        position: new kakao.maps.LatLng(a.data.y, a.data.x),
                        text: store[0].name // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
                    };

                    const staticMapContainer  = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
                        staticMapOption = {
                            center: new kakao.maps.LatLng(a.data.y, a.data.x), // 이미지 지도의 중심좌표
                            level: 3, // 이미지 지도의 확대 레벨
                            marker: marker // 이미지 지도에 표시할 마커
                        };

                    const staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
                })
                .catch((err)=>{
                    console.error(err)
                })
        }
    }, [infoOpen]);

    return (
        <div>
            <Header/>
            <Wrap>
                {
                    rating.length > 0  && store.map(function (a, i) {
                        return (
                            <Store key={i}>
                                <div className="storeName">
                                    {store[i].name}
                                </div>
                                <div className="storeInfo">
                                    <img src="/images/store/puradak.png" alt={store[i].name}/>
                                    <ul>
                                        <li>
                                            평점 : {rating[i].AVG}
                                        </li>
                                        <li>
                                            최소주문금액 :{store[i].minDeliveryPrice}
                                        </li>
                                    </ul>
                                </div>
                            </Store>
                        )
                    })
                }
                <MenuButton>
                    <ul>
                        <li className="menu" onClick={toggleMenu}>
                            <a href="#">메뉴</a>
                        </li>
                        <li className="review" onClick={toggleReview}>
                            <a href="#">리뷰</a>
                        </li>
                        <li className="info" onClick={toggleInfo}>
                            <a href="#">정보</a>
                        </li>
                    </ul>
                </MenuButton>

                {
                    menuOpen && (
                    <MenuWrap>
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
                                                            option.map(function (a, i) {
                                                                return (
                                                                    <div key={i}>
                                                                        <Option>
                                                                            <input type="radio" name="optionGroup"
                                                                                   checked={selectedOptionIndex === i}
                                                                                   onChange={() => {
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
                                                                <button onClick={decrease}> -</button>
                                                                <OrderCnt value={orderCnt} readOnly/>
                                                                <button onClick={increase}> +</button>
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
                                                            <Button onClick={()=>{
                                                                addCart();
                                                                const newOrderStates = [...orderStates];
                                                                newOrderStates[i] = false;
                                                                setOrderStates(newOrderStates);
                                                            }}>장바구니 담기</Button>
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
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td className="menu-text">
                                                    <div className="menuName">
                                                        {menu[i].menuName}
                                                    </div>
                                                    <div className="menuContents">
                                                        {menu[i].menuContents}
                                                    </div>
                                                    <div className="price">
                                                        {menu[i].price}
                                                    </div>
                                                </td>
                                                <td className="photo-area">
                                                    {
                                                        menu[i].menuImgName == null ?
                                                            <div className="menuPictureUrl">
                                                                <img alt="디폴트이미지"
                                                                     src="/images/menu/defaultmenuimg.png">
                                                                </img>
                                                            </div>
                                                            :
                                                            <div className="menuPictureUrl">
                                                                <img
                                                                    src={"http://localhost:8000/" + menu[i].menuImgName}
                                                                    alt=""/>
                                                            </div>
                                                    }
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </Menu>
                                )
                            })
                        }
                    </MenuWrap>
                )}
                {
                    reviewOpen && (
                    <div>
                        {
                            store.length > 0 && rating.length > 0 ? (
                                    <div>
                                        <p>{store[0].name} 리뷰 ( {rating[0].CNT} )</p>
                                        <div>
                                            <p>★★★★★ : {rating[0].FIVE}</p>
                                            <p>★★★★ : {rating[0].FOUR}</p>
                                            <p>★★★ : {rating[0].THREE}</p>
                                            <p>★★ : {rating[0].TWO}</p>
                                            <p>★ : {rating[0].ONE}</p>
                                        </div>
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <p>리뷰가 없습니다.</p>
                                    </div>
                                )
                        }
                        {
                            review.map(function (a, i) {
                                return (
                                    <div key={i}>
                                        <div>
                                            <p>{review[i].nickname}</p>
                                            <p>{review[i].CREATEDDATE}</p>
                                            <div>
                                                {
                                                    [...Array(review[i].rating)].map((b, index) => (
                                                    <span key={index}>★</span>
                                                    ))
                                                }
                                            </div>
                                            <p>{review[i].content}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
                {
                    infoOpen && (
                        <div>
                            <div>
                                <img src="/images/store/owner.png"/>
                                <p>사장님알림</p>
                                <hr/>
                                <p>{store[0].content}</p>
                                <br/>
                            </div>
                            <div>
                                <img src="/images/store/store.png"/>
                                <p>업체정보</p>
                                <hr/>
                                <p>영업시간</p>
                                <p>{store[0].operationHours}</p>
                                <p>전화번호</p>
                                <p>{store[0].phone}</p>
                                <p>주소</p>
                                <p>{store[0].address} {store[0].address_detail}</p>
                                <div>
                                    <div id="staticMap" style={{
                                        width : '500px',
                                        height : '400px'
                                    }}></div>
                                </div>
                                <br/>
                            </div>
                            <div>
                                <img src="/images/store/pay.png"/>
                                <p>결제정보</p>
                                <hr/>
                                <p>현장결제, 카카오페이</p>
                                <br/>
                            </div>
                            <div>
                                <img src="/images/store/info.png"/>
                                <p>상호명</p>
                                <hr/>
                                <p>{store[0].name}</p>
                            </div>
                        </div>
                    )
                }

                {
                    userCart && userCart.length > 0
                        ?
                        (
                        <div>
                            <div>주문표</div>
                            <button onClick={deleteCart}>X</button>
                            {
                                userCart.map(function (a,i){
                                    return(
                                        <div key={i}>
                                            <p>{userCart[i].MENUNAME} : {userCart[i].OP}</p>
                                            <button onClick={() => deleteMenu(userCart[i].cartid)}>X</button>
                                            <p>{userCart[i].PRICE} 원</p>
                                            <p>{userCart[i].quantity}</p>
                                            <hr/>
                                        </div>

                                    )
                                })
                            }
                            <p>합계 :{userCart[0].SUM} </p>
                        </div>
                        )
                        :
                        (
                        <strong>주문표에 담긴 메뉴가 없습니다.</strong>
                        )
                }
            </Wrap>
        </div>

    );
}


export default DeliveryStore
