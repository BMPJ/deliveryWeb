import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {storesInfoDB} from "../../service/storesLogic";
const StoreSettingMain = () =>{
    const userid = sessionStorage.getItem('userid');
    const [store,setStore] = useState([]);
    const [isOpen, setIsOpen] = useState("");


    let navigate = useNavigate();


    useEffect(()=>{
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
    },[])

    const openButtonHandler = (id) =>{
        setIsOpen(()=>(isOpen !== id ? id : ""));

        if(isOpen === id){
            setIsOpen("");
        }
    }

    return(
        <>
            <div>
                {store.map((a, i) => (
                    <div key={i}>
                        <button onClick={() => openButtonHandler(a.storeid)}>
                            {a.name}
                        </button>
                        {isOpen === a.storeid ? <button>테스트</button> : null}
                    </div>
                    ))}
            </div>
        </>
    )


}

export default StoreSettingMain