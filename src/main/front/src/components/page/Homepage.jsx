import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Main, Type} from "../../styles/HomepageStyle";


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
                            <div>
                                <button onClick={()=>{
                                    sessionStorage.removeItem('userid');
                                    sessionStorage.removeItem('role');
                                    window.location.reload();
                                }}>로그아웃</button>
                                <p>{nick}님 ㅎㅇ</p>
                            </div>
                            <Main>
                                <div onClick={()=>{navigate('/main/packaging')}}>
                                    <Type>포장</Type>
                                </div>
                                <div onClick={()=>{navigate('/main/delivery')}}>
                                    <Type>배달</Type>
                                </div>
                            </Main>

                        </div>
                    )
            }
        </div>
    );
}

export default Homepage;
