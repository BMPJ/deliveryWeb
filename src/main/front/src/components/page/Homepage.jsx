import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Homepage() {
    let navigate = useNavigate();
    const [userid, setUserid] = useState(null);
    const [nick, setNick] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/main', {
                    params: {
                        'userid': sessionStorage.getItem('userid')
                    }
                });
                setUserid(sessionStorage.getItem('userid'));
                setNick(response.data[0].nickname)
                console.log(response)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const role = sessionStorage.getItem('role')
    return (
        <div>
            {
                userid == null ?
                    (
                        <div>
                            <button onClick={()=>{navigate('/main/login')}}>로그인</button>
                            <button onClick={()=>{navigate('/main/join')}}>회원가입</button>
                            <button onClick={()=>{navigate('/manage/main')}}>판매자</button>
                        </div>
                    )
                :
                    (
                        <div>
                    <button onClick={()=>{
                        sessionStorage.removeItem('userid');
                        sessionStorage.removeItem('role');
                        window.location.reload();
                    }}>로그아웃</button>
                            <button onClick={()=>{navigate('/main/packaging')}}>포장</button>
                            <button onClick={()=>{navigate('/main/delivery')}}>배달</button>
                            <p>{nick}님 ㅎㅇ</p>
                        </div>
                    )
            }
        </div>
    );
}

export default Homepage;
