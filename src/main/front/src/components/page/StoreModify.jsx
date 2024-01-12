/* global daum */
import React, {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {storesDetailDB, storesUpdateDB} from "../../service/storesLogic";

const StoreModify = () => {
    const navigate = useNavigate();
    const {id} = useParams()

    const userid = sessionStorage.getItem('userid');

    const datas = {
        userid : userid,
        storeid : id,
    }

    const [openHours, setOpenHours] = useState("");
    const [closeHours, setCloseHours] = useState("");

    const [store, setStore] = useState({
        name: '',
        type: '',
        category: '',
        address: '',
        address_detail: '',
        storePictureUrl : '',
        phone : '',
        content : '',
        minDeliveryPrice : '',
        deliveryTip : '',
        minDeliveryTime : '',
        maxDeliveryTime : '',
        operationHours : '',
        closedDays : '',
        deliveryAddress : '',
        status: '2',
    })

    useEffect(()=>{
        setStore({
            ...store,
            operationHours : `${openHours} ~ ${closeHours}`})
    },[openHours,closeHours])

    //첫화면 호출할때
    useEffect(()=>{
        const db = async () =>{
            try{
                const response = await storesDetailDB(datas);
                console.log(response);
                console.log(response.data[0]);
                setStore(response.data[0]);
                setOpenHours(response.data[0].operationHours.split('~')[0]);
                setCloseHours(response.data[0].operationHours.split('~')[1]);
            } catch (error){
                console.error('서버로 데이터 전송 중 오류 발생:', error);
            }
        };
        db();
    },[])


    const openZipcode = (e) => {
        e.preventDefault();
        new daum.Postcode({
            oncomplete: function (data) {
                let address = "";
                if (data.userSelectedType === "R") {
                    address = data.roadAddress; //도로명
                } else {
                    address = data.jibunAddress; //지번
                }
                setStore({ ...store, address: address });
                document.getElementById("address").value = address;
                document.getElementById("address_detail").focus();
                console.log(data)
            },
        }).open();
    };

    const info = (e) => {
        const id = e.currentTarget.id;
        const value = e.target.value;
        setStore({...store, [id]: value});
    }

    const sendData = async(e) => {
        e.preventDefault();
        try{
            const response = await storesUpdateDB(store, datas);
            console.log(response);
            alert("수정완료");
            console.log(store)
            console.log(datas);
            //navigate("/store/settingMain");

        }catch (error){
            console.error('서버로 데이터 전송 중 오류 발생:', error);
            console.log(store)
            console.log(datas);
        }


    }

    return(
        <>
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
                        <option value = "2">배달/포장</option>
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
                        placeholder="주소검색해라"
                    />
                    <button onClick={(e)=>openZipcode(e)}>검색</button>
                </div>

                <div>
                    <label>상세주소:</label>
                    <input
                        type="text"
                        id="address_detail"
                        value={store.address_detail}
                        readOnly={!store.address}
                        onChange={(e) => setStore({ ...store, address_detail: e.target.value })}
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
                        id="closeHours"
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


                <button onClick={(e)=>sendData(e)}>수정</button>
                <button onClick={ ()=>{ navigate('/store/settingMain') }}>가게리스트</button>
                <button onClick={ ()=>{ navigate('/manage/main') }}>판매자메인</button>
                <button onClick={ ()=>{ navigate(`/store/menu/${datas.storeid}`) }}>메뉴관리</button>
            </div>
        </>
    )
}

export default StoreModify;