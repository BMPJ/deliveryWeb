import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {Store} from "../../styles/DeliveryStoreStyle";

function DeliveryStore(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const storeid = queryParams.get('storeid');
    const [store, setStore] = useState([]);
    const [menu, setMenu] = useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        if(storeid) {
            axios.get(`/main/delivery/category/storeid?storeid=${storeid}`)
                .then((a)=>{
                    console.log(a.data)
                    setStore(a.data)
                })
                .catch((err)=>{
                    console.error(err)
                });
            axios.get(`/main/delivery/category/storeMenu?storeid=${storeid}`)
                .then((a)=>{
                    console.log(a.data)
                    setMenu(a.data)
                })
                .catch((err)=>{
                    console.error(err)
                })
        }
    },[storeid])


    return(
        <div>
            {
                store.map(function (a,i){
                    return(
                        <Store key={i}>
                            <div>
                                {store[i].name}
                            </div>
                            <img src="/"/>
                            <div>
                                평점 : {store[0].rating}<br/>
                                최소주문금액 :{store[0].minDeliveryPrice}
                            </div>
                        </Store>
                    )
                })
            }

            {
                menu.map(function (a,i){
                    return(
                        <div key={i}>
                            <div>
                                {menu[i].menuName}
                            </div>
                            <div>
                                {menu[i].price}
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}
export default DeliveryStore;