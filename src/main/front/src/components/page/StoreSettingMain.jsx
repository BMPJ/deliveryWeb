import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {storesInfoDB} from "../../service/storesLogic";
import Header from "../include/Header";
import StoreInfo from "../store/StoreInfo";

const StoreSettingMain = () => {
    const userid = sessionStorage.getItem('userid');
    const [store, setStore] = useState([]);
    const [isOpen, setIsOpen] = useState("");


    let navigate = useNavigate();


    useEffect(() => {
        const db = async () => {
            try {
                const response = await storesInfoDB(userid);
                console.log(response);

                setStore(response.data)
                console.log(response.data)

            } catch (error) {
                console.error('서버로 데이터 전송 중 오류 발생:', error);
            }
        };
        db();
    }, [])


    return (
        <>
            <Header/>
            <div>
                {store && store.map((a, i) => (
                    <div key={i}>
                        <button onClick={() => navigate(`/store/info/${store[i].storeid}`)}>
                            {store[i].name}
                        </button>
                    </div>
                ))}
            </div>

        </>
    )


}

export default StoreSettingMain