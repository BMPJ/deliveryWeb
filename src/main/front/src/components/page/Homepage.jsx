import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Main, Type} from "../../styles/HomepageStyle";
import Header from "../include/Header";


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
            <Header/>
            <Main>
                <div onClick={() => {
                    navigate('/main/packaging')
                }}>
                    <Type>포장</Type>
                </div>
                <div onClick={() => {
                    navigate('/main/delivery')
                }}>
                    <Type>배달</Type>
                </div>
            </Main>
        </div>
    );
}

export default Homepage;
