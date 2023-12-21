import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {storesInfoDB} from "../../service/storesLogic";

const StoreSetting = () =>{
    const userid = sessionStorage.getItem('userid');

    const test = async () =>{
        try{
            const response = await storesInfoDB(userid);
            console.log(response);
        }
        catch(error){
            console.log(userid);
            console.error('서버로 데이터 전송 중 오류 발생:', error);
        }

    }

    return(
        <>
            <div>
                <button onClick={()=>test()}>테스트</button>
            </div>
        </>
    )


}

export default StoreSetting