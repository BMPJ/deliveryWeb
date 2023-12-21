import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"


const ManageMain = () => {

    let navigate = useNavigate();

    const [info] = useState({
        userid: sessionStorage.getItem('userid'),
        role : sessionStorage.getItem('role'),
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
                            <button onClick={()=>navigate("/store/register")}>가게등록</button>
                            <button onClick={()=>navigate("/store/settingMain")}>가게관리</button>
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