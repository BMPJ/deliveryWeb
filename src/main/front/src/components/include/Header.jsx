import React, {useEffect, useState} from "react";
import {HeaderBlock} from "../../styles/HeaderStyle";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Header() {
    const navigate = useNavigate();
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

    const logout = () => {
        sessionStorage.removeItem('userid');
        sessionStorage.removeItem('role');
        navigate("/main")
        window.location.reload();
    }

    return (
        <div>
            <HeaderBlock>
                <div className="block">
                    {
                        role == 1 ? (
                            <a className="boss" href="/manage/main">
                                <img src="/images/yogiyo-boss.png" alt="사장님로고"/>
                            </a>
                        ) : (
                            <a href="/main">
                                <img src="/images/logo-yogiyo.png" alt="메인로고"/>
                            </a>
                        )
                    }
                    <div className="buttons">
                        {
                            userid ?
                                (
                                    <div className="button-box">
                                        <div className="logout" onClick={() => logout()}>로그아웃</div>
                                        <div className="orderList" onClick={() => {
                                            navigate(`/main/order?userid=${userid}`)
                                        }}>주문내역
                                        </div>
                                    </div>
                                )
                                :
                                (
                                    <div className="button-box">
                                        <div className="login" onClick={() => {
                                            navigate("/main/login")
                                        }}>로그인
                                        </div>
                                        <div className="join" onClick={() => {
                                            navigate('/main/join')
                                        }}>회원가입
                                        </div>
                                        <div className="manage" onClick={() => {
                                            navigate('/manage/login')
                                        }}>사장님
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </HeaderBlock>
        </div>
    )
}

export default Header;