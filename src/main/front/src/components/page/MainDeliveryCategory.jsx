import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

function MainDeliveryCategory() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    const [stores, setStores] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        if (categoryParam) {
            // categoryParam을 Spring 서버로 전송하는 예시
            axios.get(`/main/delivery/category?category=${categoryParam}`)
                .then((response) => {
                    console.log(response.data);
                    setStores(response.data)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [categoryParam]);

    return (
        <div>
            {
                stores.map(function (a, i){
                    return(
                        <div key={i}>
                            <div onClick={()=>{navigator(`/main/delivery/category/storeid?storeid=${stores[i].name}`)}}>
                                <div>{stores[i].name}</div>
                                <img src={"/"}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MainDeliveryCategory;
