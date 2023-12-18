import React, { useEffect, useState } from "react";
import axios from "axios";
import {Main} from "../../styles/HomepageStyle";
import {useNavigate} from "react-router-dom";


function Homepage() {
    let navigate = useNavigate();
    let [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('/main')
            .then(response => setCategory(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div>
                <button onClick={()=>{navigate('/main/join')}}>회원가입</button>
            </div>
            <div>
                <button onClick={()=>{navigate('/main/login')}}>로그인</button>
            </div>
            <div>
                {
                    category.map((a, i) => (
                        <Main key={i}>
                            카테고리: {a.category}
                            <img src={a.img} />
                        </Main>
                    ))
                }

            </div>
        </div>
    );
}

export default Homepage;
