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
            axios.get(`/main/delivery/category/storeid?storeid=${storename}`)
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
            {
                store.map(function (a,i){
                    return(
                        <div key={i}>
                            <div>
                                {store[i].name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DeliveryStore;