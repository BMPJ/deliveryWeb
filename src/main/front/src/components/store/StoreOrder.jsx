import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";

function StoreOrder(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const storeid = queryParams.get('storeid');

    useEffect(() => {
        axios.get(`/store/orderList?storeid=${storeid}`)
            .then((a)=>{
                console.log(a)
            })
            .catch((err)=>{
                console.error(err)
            })
    }, []);

    return(

        <div>
            {storeid}
        </div>

    )
}

export default StoreOrder;