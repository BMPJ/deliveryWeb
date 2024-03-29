import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Category, Main} from "../../styles/MainDelivery";

function MainDelivery() {
    const type = 0;//배달
    const [category, setCategory] = useState(() => {
            // localStorage에서 category 데이터 불러오기
            const savedCategory = localStorage.getItem(`category_${type}`);
            return savedCategory ? JSON.parse(savedCategory) : [];
        });

        useEffect(() => {
            axios.get(`/main/delivery?type=${type}`)
                .then((response) => {
                setCategory(response.data);
                localStorage.setItem(`category_${type}`, JSON.stringify(response.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [type]);

    const navigate = useNavigate();

    return (
        <div>
            {
                category.map(function (a, i){
                    return(
                        <Main    key={i} >
                            <Category onClick={()=>{navigate(`/main/delivery/category?category=${category[i].category}`)}}>
                                <div>{category[i].category}</div>
                                <img src='/'/>
                            </Category>
                        </Main>
                    )
                })
            }

        </div>
    );
}

export default MainDelivery;