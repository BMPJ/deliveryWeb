import React, { useEffect, useState } from "react";
import axios from "axios";

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
                            <p>{menu[0].menuName} + {menuOption[0].option}</p>
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
                            <div>
                                <label>주소</label>
                                <input value={cart[0].address} readOnly/>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="(필수)상세주소 입력"
                                />
                            </div>
                            <div>
                                <label>휴대전화번호</label>
                                <input type="text" placeholder="(필수)휴대전화 번호 입력"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>주문시 요청사항</p>
                            </div>
                            <div>
                                <textarea placeholder={"요청사항을 남겨주세요"}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeliveryCart;
