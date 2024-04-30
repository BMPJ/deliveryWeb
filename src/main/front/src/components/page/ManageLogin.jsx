import React, {useNavigate} from "react-router-dom";
import {useState} from "react";
import {manageLoginDB} from "../../service/manageLogic";
import {LoginBox, ManageWrap} from "../../styles/LoginStyle";

const ManageLogin = () => {

    const navigator = useNavigate();
    const session = sessionStorage;

    const [user, setUser] = useState({
        userid: '',
        password: ''
    });

    const userInfo = (e) => {
        const id = e.currentTarget.id;
        const value = e.target.value;
        setUser({...user, [id]: value});
    }

    const login = async () => {
        try {
            const response = await manageLoginDB(user);
            console.log(response.data);

            if (response.data != null) {
                console.log(response.data[0].role)

                if (response.data[0].role == 0) {
                    alert("일반회원입니다")
                } else {
                    session.setItem("userid", response.data[0].userid);
                    session.setItem("role", response.data[0].role);
                    session.setItem("storeid", response.data[0].storeid);
                    navigator("/manage/main")
                }

            } else {
                alert("없는회원입니다")
            }

        } catch (error) {
            console.log(user)
            alert("실패");
            console.error('서버로 데이터 전송 중 오류 발생:', error);
        }
    }

    return (
        <>
            <ManageWrap>
                <div className="title">
                    <div className="logo">
                    </div>
                    <span>사장님</span>
                </div>
                <LoginBox>
                    <div className="id-Box">
                        <label>아이디</label>
                        <div className="inputWrap">
                            <input
                                type="text"
                                id="userid"
                                value={user.userid}
                                onChange={(e) => {
                                    userInfo(e)
                                }}
                            />
                            <i className="icon"></i>
                        </div>
                    </div>
                    <div className="pw-Box">
                        <label>비밀번호</label>
                        <div className="inputWrap">
                            <input
                                type="text"
                                id="password"
                                value={user.password}
                                onChange={(e) => {
                                    userInfo(e)
                                }}/>
                            <i className="icon"></i>
                        </div>
                    </div>
                    <div className="button-Box">
                        <button onClick={() => login()}>로그인
                        </button>
                    </div>
                    <div className="a-Box">
                        <a href="#">아이디/비밀번호 찾기</a>

                    </div>
                </LoginBox>

            </ManageWrap>
        </>
    )
}

export default ManageLogin