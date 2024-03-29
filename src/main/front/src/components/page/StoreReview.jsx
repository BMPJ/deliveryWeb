import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

function StoreReview(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const storeid = queryParams.get('storeid');
    const [store, setStore] = useState("");

    useEffect(() => {
        if(storeid) {
            axios.get(`/main/delivery/storeid?storeid=${storeid}`)
                .then((a) => {
                    console.log(a.data)
                    setStore(a.data[0].name)
                })
                .catch((err) => {
                    console.error(err)
                });
        }
    }, []);



    return(
        <div>

        </div>
    )

}

export default StoreReview;