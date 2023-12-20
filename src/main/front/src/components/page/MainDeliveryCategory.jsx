import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function MainDeliveryCategory() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    const [stores, setStores] = useState([]);

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
                            <div>
                                {stores[i].name}
                                {stores[i].address}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MainDeliveryCategory;
