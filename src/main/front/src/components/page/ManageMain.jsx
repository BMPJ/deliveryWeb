import React, { useState } from "react";
import {useNavigate} from "react-router-dom"


function ManageMain(){

    let navigate = useNavigate();

    return(
        <div>
            <button onClick={()=>{ navigate('/manage/join') }}>회원가입</button>
            <button onClick={()=>{ navigate('/manage/login') }}>로그인</button>
        </div>
    )

}

export default ManageMain