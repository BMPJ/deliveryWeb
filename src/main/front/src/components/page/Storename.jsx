import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

function Storename(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const storename = queryParams.get('storename');
    const [store, setStore] = useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        if(storename) {
            axios.get(`/main/delivery/category/storename?storename=${storename}`)
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
export default Storename;