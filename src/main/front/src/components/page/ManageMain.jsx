import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import Header from "../include/Header";
import {Main} from "../../styles/ManageStyle";


const ManageMain = () => {

    let navigate = useNavigate();

    const [info] = useState({
        userid: sessionStorage.getItem('userid'),
        role: sessionStorage.getItem('role'),
    })

    return (
        <>
            <Header/>
            <Main>
                <div className="register" onClick={() => {
                    navigate("/store/register")
                }}>
                </div>
                <div className="setting" onClick={() => {
                    navigate("/store/settingMain")
                }}>
                </div>
            </Main>
        </>
    )
}

export default ManageMain