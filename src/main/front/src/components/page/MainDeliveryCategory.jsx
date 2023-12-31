import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const MainDeliveryCategory = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    const [stores, setStores] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        if (categoryParam) {
            const decodedCategory = decodeURIComponent(categoryParam);
            axios.get(`/main/delivery/category?category=${decodedCategory}`)
                .then((response) => {
                    setStores(response.data);
                    console.log(response.data)
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
                            <div onClick={()=>{navigator(`/main/delivery/category/storeid?storeid=${stores[i].storeid}`)}}>
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

export default MainDeliveryCategory
