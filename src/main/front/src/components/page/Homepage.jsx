import React, { useEffect, useState } from "react";
import axios from "axios";
import {Main} from "../../styles/HomepageStyle";
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

    
    return (
        <div>
            <div>
                <button onClick={()=>{navigate('/main/join')}}>회원가입</button>
            </div>

            {
                userid == null ?
                <div>
                    <button onClick={()=>{navigate('/main/login')}}>로그인</button>
                </div>
                :
                <div>
                    <button onClick={()=>{
                        sessionStorage.removeItem('userid');
                        window.location.reload();
                    }}>로그아웃</button>
                    <button onClick={()=>{navigate('/main/packaging')}}>포장</button>
                    <button onClick={()=>{navigate('/main/delivery')}}>배달</button>
                    <p>{nick}님 ㅎㅇ</p>
                    <button onClick={()=>{navigate('/store/register')}}>가게등록</button>
                </div>

            }

        </div>
    );
}

export default Homepage;
