import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import StoreInfo from "./StoreInfo";
import {DetailBox, MainBox} from "../../styles/ManageStyle";

function StoreOrder() {


    const {id} = useParams();

    console.log(id);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const storeid = queryParams.get('storeid');

    useEffect(() => {
        if (id) {
            axios.get(`/store/orderList?storeid=${id}`)
                .then((a) => {
                    console.log(a)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, []);

    return (
        <div>
            <MainBox>
                <StoreInfo></StoreInfo>
                <DetailBox>
                    {id}
                </DetailBox>
            </MainBox>
        </div>

    )
}

export default StoreOrder;