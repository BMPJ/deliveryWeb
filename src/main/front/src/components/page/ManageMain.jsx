import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"


const ManageMain = () => {

    let navigate = useNavigate();

    const [info] = useState({
        userid: sessionStorage.getItem('userid'),
        role : sessionStorage.getItem('role')
    })



    return(
        <>
            {
                    info.userid == null  ?
                    (
                        <div>
                            <button onClick={()=>navigate('/manage/join')}>판매자회원가입</button>
                            <button onClick={()=>navigate('/main/login')}>판매자로그인</button>
                        </div>
                    ) :
                    (
                        <div>
                            <p>넌할수있어은경아 화이팅~</p>
                            <button onClick={()=>{
                                sessionStorage.removeItem('userid');
                                sessionStorage.removeItem('role');
                                window.location.reload();
                                navigate("/manage/main")
                            }}>로그아웃</button>
                        </div>

                    )
            }
        </>
    )

}

export default ManageMain