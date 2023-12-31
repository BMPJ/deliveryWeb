import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {storesInfoDB} from "../../service/storesLogic";
const StoreSettingMain = () =>{
    const userid = sessionStorage.getItem('userid');
    const [store,setStore] = useState([]);

    const [visible,setVisible] = useState(false);

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


    return(
        <>
            <div>
                {
                    store.map(function (a,i) {
                        return(
                            <div>
                                <button onClick={()=>{navigate(`/store/modify/${store[i].storeid}`)}}>
                                    {store[i].name}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )


}

export default StoreSettingMain