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

    const [file, setFile] = useState();
    const formData = new FormData();

    const [openHours, setOpenHours] = useState("");
    const [closeHours, setCloseHours] = useState("");

    const [store, setStore] = useState({
        userid,
        name: '',
        type: '',
        category: '',
        address: '',
        address_detail: '',
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

    //운영시간 합치기
    useEffect(() => {
        setStore({
            ...store,
            operationHours: `${openHours} ~ ${closeHours}`
        })
    }, [openHours, closeHours])

    useEffect(() => {

        if (role != 1) {
            navigate('/main/login')
        }
        const AddrData = async () => {
            try {
                let params = {userid: userid};
                let response = await manageDB(params);
                setStore({
                    ...store,
                    address: response.data[0].address,
                    address_detail: response.data[0].address_detail
                });
            } catch (error) {
                console.error(error);
            }
        };
        AddrData();
    }, []);


    const info = (e) => {
        const id = e.currentTarget.id;
        const value = e.target.value;
        setStore({...store, [id]: value});
    }

    const saveFile = (e) => {
        setFile(e.target.files[0]);
    }

    const register = async () => {
        try {

            formData.append('file', file);
            formData.append('store', JSON.stringify(store));


            //const response = await storesRegisterDB(store)
            const response = await storesRegisterDB(formData);
            // navigate('/manage/main')
            console.log(response);
            console.log(store)
        } catch (error) {
            alert("실패");
            console.log(file)
            console.log(store)
            console.error('서버로 데이터 전송 중 오류 발생:', error);
        }
    }


    return (
        <>
            <div>
                <div>
                    <label>상호명:</label>
                    <input
                        type="text"
                        id="name"
                        value={store.name}
                        onChange={(e) => {
                            info(e)
                        }}
                    />
                </div>
                <div>
                    <label>배달/포장:</label>
                    <select
                        id="type"
                        onChange={(e) => {
                            info(e)
                        }}
                    >
                        <option value selected disabled>선택해주세요</option>
                        <option value="0">배달</option>
                        <option value="1">포장</option>
                    </select>
                </div>

                <div>
                    <label>카테고리:</label>
                    <select
                        id="category"
                        onChange={(e) => {
                            info(e)
                        }}
                    >
                        <option value selected disabled>선택해주세요</option>
                        <option value="프랜차이즈">프랜차이즈</option>
                        <option value="치킨">치킨</option>
                        <option value="피자/양식">피자/양식</option>
                        <option value="중국집">중국집</option>
                        <option value="한식">한식</option>
                        <option value="일식/돈까스">일식/돈까스</option>
                        <option value="족발/보쌈">족발/보쌈</option>
                        <option value="야식">야식</option>
                        <option value="분식">분식</option>
                        <option value="카페/디저트">카페/디저트</option>
                    </select>
                </div>

                <div>
                    <label>주소:</label>
                    <input
                        type="text"
                        id="address"
                        value={store.address}
                        readOnly
                    />
                </div>
                <div>
                    <label>상세주소:</label>
                    <input
                        type="text"
                        id="address_detail"
                        value={store.address_detail}
                        readOnly

                    />
                </div>

                <div>
                    <label>사진등록:</label>
                    <input
                        id="storePictureUrl"
                        type="file"
                        onChange={saveFile}
                    />
                </div>

                <div>
                    <label>가게 번호:</label>
                    <input
                        type="text"
                        id="phone"
                        value={store.phone}
                        onChange={(e) => {
                            info(e)
                        }}
                    />
                </div>

                <div>
                    <label>가게 설명:</label>
                    <input
                        type="text"
                        id="content"
                        value={store.content}
                        onChange={(e) => {
                            info(e)
                        }}
                    />
                </div>

                <div>
                    <label>최소주문금액:</label>
                    <input
                        type="text"
                        id="minDeliveryPrice"
                        value={store.minDeliveryPrice}
                        onChange={(e) => {
                            info(e)
                        }}
                    />
                </div>

                <div>
                    <label>배달팁:</label>
                    <input
                        type="text"
                        id="deliveryTip"
                        value={store.deliveryTip}
                        onChange={(e) => {
                            info(e)
                        }}
                    />
                </div>

                <div>
                    <label>최소배달시간:</label>
                    <input
                        type="text"
                        id="minDeliveryTime"
                        value={store.minDeliveryTime}
                        onChange={(e) => {
                            info(e)
                        }}
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
                        onChange={(e) => {
                            info(e)
                        }}
                    />
                </div>

                <div>
                    <label>여는시간:</label>
                    <input
                        type="text"
                        id="openHours"
                        onChange={(e) => {
                            setOpenHours(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <label>닫는시간:</label>
                    <input
                        type="text"
                        id="closeHours"
                        onChange={(e) => {
                            setCloseHours(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <label>휴무일:</label>
                    <input
                        type="text"
                        id="closedDays"
                        value={store.closedDays}
                        onChange={(e) => {
                            info(e)
                        }}
                    />
                </div>

                <div>
                    <label>배달가능지역:</label>
                    <input
                        type="text"
                        id="deliveryAddress"
                        value={store.deliveryAddress}
                        onChange={(e) => {
                            info(e)
                        }}
                    />
                </div>

                <button onClick={() => register()}>가게등록</button>
                {/*<button onClick={test()}>테스트</button>*/}
                {/*<button onClick={()=>sendData()}>가게등록</button>*/}
                <button onClick={() => {
                    navigate('/manage/main')
                }}>메인
                </button>
            </div>
        </>
    );
};

export default StoreRegister;