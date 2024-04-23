import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../include/Header";
import {ButtonBox, Loginform, Wrap} from "../../styles/LoginStyle";

function MainLogin() {
    const navigator = useNavigate();

    const session = sessionStorage;

    const [l_ButtonState, setl_ButtonState] = useState(true);
    const [l_ButtonColor, setl_ButtonColor] = useState("lightgray");

    const [user, setUser] = useState({
        userid: '',
        password: ''
    });

    useEffect(() => {
        const id = user.userid;
        const pw = user.password;

        if (id !== "" && pw !== "") {
            setl_ButtonColor("#fa0050");
            setl_ButtonState(false);
        } else {
            setl_ButtonColor("lightgray");
            setl_ButtonState(true);
        }
    }, [user])

    const sendData = () => {
        axios.post(`/main/login`, user)
            .then(a => {
                if (a.data != 0) {
                    console.log(a.data)
                    if (a.data[0].role != 1) {
                        session.setItem("userid", a.data[0].userid);
                        session.setItem("role", a.data[0].role);
                        session.setItem("storeid", a.data[0].storeid);
                        navigator("/main")
                    } else {
                        alert("사장님회원입니다!")
                    }
                } else {
                    alert("로그인실패!")
                }
            }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <Header/>
            <Wrap>
                <Loginform>
                    <div className="title" onClick={() => {
                        navigator('/main')
                    }}>
                    </div>
                    <input
                        type="text"
                        name="userid"
                        value={user.userid}
                        placeholder={"아이디 입력(필수)"}
                        onChange={(e) => {
                            setUser({...user, userid: e.target.value});
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder={"비밀번호 입력(필수)"}
                        onChange={(e) => {
                            setUser({...user, password: e.target.value});
                        }}
                    />
                </Loginform>
                <ButtonBox>
                    <button className="loginButton" onClick={sendData}
                            disabled={l_ButtonState}
                            style={{
                                backgroundColor: l_ButtonColor
                            }}>로그인
                    </button>
                </ButtonBox>
            </Wrap>
        </div>

    )
}

export default MainLogin