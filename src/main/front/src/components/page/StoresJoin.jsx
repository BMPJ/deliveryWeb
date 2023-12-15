import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";




function StoresJoin() {

    let navigate = useNavigate();
    // user 상태를 ManageMain 함수에서 정의
    const [user, setUser] = useState({
        userid: '',
        password: '',
        name: '',
        nickname: '',
        phone: '',
        email: '',
        grade: '',
        zipcode: '',
        address: '',
        address_detail: '',
        provider: '',
        status: '1',
        role: '1',
    });

    const sendData = () => {
        axios.post('/manage/join', user)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('서버로 데이터 전송 중 오류 발생:', error);
            });
    };

    return (
        <div>
            <div>
                <label>User ID:</label>
                <input
                    type="text"
                    name="userid"
                    value={user.userid}
                    onChange={(e) => setUser({ ...user, userid: e.target.value })}
                />
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </div>

            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
            </div>

            <div>
                <label>Nickname:</label>
                <input
                    type="text"
                    name="nickname"
                    value={user.nickname}
                    onChange={(e) => setUser({ ...user, nickname: e.target.value })}
                />
            </div>

            <div>
                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
            </div>

            <div>
                <label>Grade:</label>
                <input
                    type="text"
                    name="grade"
                    value={user.grade}
                    onChange={(e) => setUser({ ...user, grade: e.target.value })}
                />
            </div>

            <div>
                <label>Zipcode:</label>
                <input
                    type="text"
                    name="zipcode"
                    value={user.zipcode}
                    onChange={(e) => setUser({ ...user, zipcode: e.target.value })}
                />
            </div>

            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                />
            </div>

            <div>
                <label>Address Detail:</label>
                <input
                    type="text"
                    name="address_detail"
                    value={user.address_detail}
                    onChange={(e) => setUser({ ...user, address_detail: e.target.value })}
                />
            </div>

            <div>
                <label>Provider:</label>
                <input
                    type="text"
                    name="provider"
                    value={user.provider}
                    onChange={(e) => setUser({ ...user, provider: e.target.value })}
                />
            </div>

            <button onClick={sendData}>회원가입</button>
            <button onClick={ ()=>{ navigate('/manage/main') }}>메인</button>
        </div>
    );
}

export default StoresJoin;
