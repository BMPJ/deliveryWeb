import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

function DeliveryStore(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const storename = queryParams.get('storeid');
    const [store, setStore] = useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        if(storename) {
            axios.get(`/main/delivery/category/store?storename=${storename}`)
                .then((a)=>{
                    console.log(a.data)
                    setStore(a.data)
                })
                .catch((err)=>{
                    console.error(err)
                })
        }
    },[storename])


    return(
        <div>

        </div>
    )
}
export default DeliveryStore;