import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function MainLogin(){
    const navigator = useNavigate();

    const [user, setUser] = useState({
        userid: '',
        password: ''
    });
    const sendData = ()=>{
        axios.post(`/main/login`, user)
            .then(response=>{
                console.log(response.data)
            }).catch(error=>{
                console.error(error)
        })
    }
    return(
        <div>
            <div>
                <label>ID</label>
                <input
                    type="text"
                    name="userid"
                    value={user.userid}
                    onChange={(e)=> setUser({...user, userid: e.target.value})}
                />
            </div>
            <div>
                <label>PW</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={(e)=> setUser({...user, password: e.target.value})}
                />
            </div>
            <button onClick={sendData}>로그인</button>
            <button onClick={()=>{navigator('/main')}}>메인으로</button>
        </div>

    )
}
export default MainLogin