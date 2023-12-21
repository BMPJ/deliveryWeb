/* global daum */
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {storesRegisterDB} from "../../service/storesLogic";
import {manageDB} from "../../service/manageLogic";

const StoreRegister = () => {
    let navigate = useNavigate();
    const [userid] = useState(window.sessionStorage.getItem('userid'));
    const [role] = useState(window.sessionStorage.getItem('role'));
    const [openHours, setOpenHours] = useState("");
    const [closeHours, setCloseHours] = useState("");

    const [store, setStore] = useState({
        name: '',
        type: '',
        category: '',
        address: '',
        address_detail: '',
        storePictureUrl: '',
        phone: '',
        content: '',
        minDeliveryPrice: '',
        deliveryTip: '',
        minDeliveryTime: '',
        maxDeliveryTime: '',
        operationHours: '',
        closedDays: '',
        deliveryAddress: '',
        status: '0',
    });
    useEffect(() => {
        setStore({
            ...store,
            operationHours: `${openHours} ~ ${closeHours}`,
        });
    }, [openHours, closeHours]);

    useEffect(() => {
        if (role != 1) {
            navigate('/main/login');
        }

        const AddrData = async () => {
            try {
                let params = { userid: userid };
                let response = await manageDB(params);
                setStore({ ...store, address: response.data[0].address, address_detail: response.data[0].address_detail });
            } catch (error) {
                console.error(error);
            }
        };

        AddrData();
    }, []);

    const info = (e) => {
        const id = e.currentTarget.id;
        const value = e.target.value;

        setStore({
            ...store,
            [id]: value,
            operationHours: `${openHours} ~ ${closeHours}`,
        });
    };

    const register = async () => {
        try {
            const response = await storesRegisterDB(store);
            console.log(store.operationHours); // operationHours 출력
            console.log(store);
        } catch (error) {
            alert("실패");
            console.error('서버로 데이터 전송 중 오류 발생:', error);
        }
    };



    /*const openZipcode = (e) => {
        e.preventDefault();
        new daum.Postcode({
            oncomplete: function (data) {
                let address = "";
                if (data.userSelectedType === "R") {
                    address = data.roadAddress; //도로명
                } else {
                    address = data.jibunAddress; //지번
                }
                setStore({ ...store,  address: address });
                document.getElementById("address").value = address;
                document.getElementById("address_detail").focus();
            },
        }).open();
    };*/




    //이거 나중에 session에 아이디 넣고 주소땡겨올때 쓸라고 만들어둔거
    /*const getData = () => {
        axios.get('/manage')
    }
*/


    return(
        <>
            <button onClick={()=>{console.log()}}>asd</button>
            <div>
                <div>
                    <label>상호명:</label>
                    <input
                        type="text"
                        id="name"
                        value={store.name}
                        onChange={(e) => {info(e)}}
                    />
                </div>
                <div>
                    <label>배달/포장:</label>
                    <select
                        id="type"
                        onChange={(e) => {info(e)}}
                    >
                        <option value selected disabled>선택해주세요</option>
                        <option value = "0">배달</option>
                        <option value = "1">포장</option>
                    </select>
                </div>

                <div>
                    <label>카테고리:</label>
                    <select
                        id="category"
                        onChange={(e) => {info(e)}}
                    >
                        <option value selected disabled>선택해주세요</option>
                        <option value = "프랜차이즈">프랜차이즈</option>
                        <option value = "치킨">치킨</option>
                        <option value = "피자/양식">피자/양식</option>
                        <option value = "중국집">중국집</option>
                        <option value = "한식">한식</option>
                        <option value = "일식/돈까스">일식/돈까스</option>
                        <option value = "족발/보쌈">족발/보쌈</option>
                        <option value = "양식">양식</option>
                        <option value = "분식">분식</option>
                        <option value = "카페/디저트">카페/디저트</option>
                        <option value = "편의점/마트">편의점/마트</option>
                    </select>
                </div>

                <div>
                    <label>주소:</label>
                    <input
                        type="text"
                        id="address"
                        value={store.address}
                        readOnly
                        //placeholder="주소검색해라"
                    />
                    {/* <button onClick={(e)=>openZipcode(e)}>검색</button>*/}
                </div>

                <div>
                    <label>상세주소:</label>
                    <input
                        type="text"
                        id="address_detail"
                        /*readOnly={!store.address}*/
                        value={store.address_detail}
                        readOnly
                        /* onChange={(e) => {info(e)}}*/
                    />
                </div>

                <div>
                    <label>사진등록:</label>
                    <input
                        type="text"
                        id="storePictureUrl"
                        value={store.storePictureUrl}
                        onChange={(e) => {info(e)}}
                    />
                </div>

                <div>
                    <label>가게 번호:</label>
                    <input
                        type="text"
                        id="phone"
                        value={store.phone}
                        onChange={(e) => {info(e)}}
                    />
                </div>

                <div>
                    <label>가게 설명:</label>
                    <input
                        type="text"
                        id="content"
                        value={store.content}
                        onChange={(e) => {info(e)}}
                    />
                </div>

                <div>
                    <label>최소주문금액:</label>
                    <input
                        type="text"
                        id="minDeliveryPrice"
                        value={store.minDeliveryPrice}
                        onChange={(e) => {info(e)}}
                    />
                </div>

                <div>
                    <label>배달팁:</label>
                    <input
                        type="text"
                        id="deliveryTip"
                        value={store.deliveryTip}
                        onChange={(e) => {info(e)}}
                    />
                </div>

                <div>
                    <label>최소배달시간:</label>
                    <input
                        type="text"
                        id="minDeliveryTime"
                        value={store.minDeliveryTime}
                        onChange={(e) => {info(e)}}
                    />

                    {/*시간선택박스..*/}
                    {/*<select
                        name="minDeliveryTime"
                        value={store.minDeliveryTime}
                        onChange={(e) => {info(e)}}
                    >
                        <option></option>
                    </select>
                    ~
                    <select
                        name="maxDeliveryTime"
                        value={store.maxDeliveryTime}
                        onChange={(e) => {info(e)}}
                    >
                        <option></option>
                    </select>*/}
                </div>

                <div>
                    <label>최대배달시간:</label>
                    <input
                        type="text"
                        id="maxDeliveryTime"
                        value={store.maxDeliveryTime}
                        onChange={(e) => {info(e)}}
                    />
                </div>

                <div>
                    <label>여는시간:</label>
                    <input
                        type="text"
                        id="openHours"
                        value={openHours}
                        onChange={(e)=>{setOpenHours(e.target.value)}}
                    />
                </div>

                <div>
                    <label>닫는시간:</label>
                    <input
                        type="text"
                        id="closedHours"
                        value={closeHours}
                        onChange={(e) => {setCloseHours(e.target.value)}}
                    />
                </div>

                <div>
                    <label>휴무일:</label>
                    <input
                        type="text"
                        id="closedDays"
                        value={store.closedDays}
                        onChange={(e) => {info(e)}}
                    />
                </div>

                <div>
                    <label>배달가능지역:</label>
                    <input
                        type="text"
                        id="deliveryAddress"
                        value={store.deliveryAddress}
                        onChange={(e) => {info(e)}}
                    />
                </div>

                <button onClick={()=>register()}>가게등록</button>
                {/*<button onClick={test()}>테스트</button>*/}
                {/*<button onClick={()=>sendData()}>가게등록</button>*/}
                <button onClick={ ()=>{ navigate('/manage/main') }}>메인</button>
            </div>
        </>
    );
};

export default StoreRegister;