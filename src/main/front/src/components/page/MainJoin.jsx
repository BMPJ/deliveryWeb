/* global daum */
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function MainJoin(){

    let navigate = useNavigate();

    const [user, setUser] = useState({
        userid: '',
        password: '',
        name: '',
        nickname: '',
        phone: '',
        email: '',
        grade: '0',
        zipcode: '',
        address: '',
        address_detail: '',
        provider : '0',
        status: '0',
        role: '0',
    });

    const [check, setCheck] = useState();
    const checkID=()=>{

        axios.get(`/manage/checkInfo?userid=${user.userid}`)
            //try
            .then(response => {
                console.log(response.data);
                const data = JSON.stringify(response.data);
                setCheck(data);
                console.log(data);
            })
            .catch(error => {
                console.error('서버로 데이터 전송 중 오류 발생:', error);
            });

    }
    const openZipcode = (e) => {
        e.preventDefault();
        new daum.Postcode({
            oncomplete: function (data) {
                let address = "";
                if (data.userSelectedType === "R") {
                    address = data.roadAddress; //도로명
                } else {
                    address = data.jibunAddress; //지번
                }
                setUser({ ...user, zipcode: data.zonecode, address: address });
                document.getElementById("zipcode").value = data.zonecode;
                document.getElementById("address").value = address;
                document.getElementById("address_detail").focus();
                console.log(data)
            },
        }).open();
    };

    const sendData = () => {
        axios.post('/main/join', user)
            //try
            .then(response => {
                navigate('/main');
                console.log(response.data);
            })
            .catch(error => {
                alert("실패");
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
                <button onClick={checkID}>중복검사</button>
                {
                    check == 0 ? <p style={{color:'green'}}>사용가능</p> : <p style={{color:'red'}}>사용불가</p>
                }

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
                <label>Zipcode:</label>
                <input
                    type="text"
                    id="zipcode"
                    className="zipcode"
                    placeholder="우편번호"
                    value={user.zipcode}
                    onChange={(e) => setUser({ ...user, zipcode: e.target.value })}
                />
            </div>

            <div>
                <label>Address:</label>
                <input
                    type="text"
                    id="address"
                    value={user.address}
                    readOnly
                    placeholder="주소검색해라"
                />
                <button onClick={(e)=>openZipcode(e)}>검색</button>
            </div>

            <div>
                <label>Address Detail:</label>
                <input
                    type="text"
                    id="address_detail"
                    value={user.address_detail}
                    readOnly={!user.address}
                    onChange={(e) => setUser({ ...user, address_detail: e.target.value })}
                />
            </div>

            <button onClick={sendData}>회원가입</button>
            <button onClick={ ()=>{ navigate('/main') }}>메인</button>
        </div>
    );


}

export default MainJoin