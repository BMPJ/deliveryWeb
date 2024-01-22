import React, { useEffect, useState } from "react";
import axios from "axios";

function DeliveryOrder(){

    const userid = sessionStorage.getItem("userid");

    useEffect(() => {
        axios.get(`/main/delivery/order?userid=${userid}`)
            .then((a)=>{
                console.log(a)
            })
            .catch((err)=>{
                console.error(err)
            })

    }, []);

    return(
        <div>
            <div>
                <strong>주문내역</strong>
            </div>
            <div>

            </div>
        </div>
    )
}

export default DeliveryOrder;