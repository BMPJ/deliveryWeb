import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Category, Main} from "../../styles/MainDelivery";
import Header from "../include/Header";

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

    const imageNames = [
        "0.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png"
    ];

    return (
        <div>
            <Header/>
            {
                category.map(function (a, i){
                    return(
                        <Main    key={i} >
                            <Category onClick={()=>{navigate(`/main/delivery/category?category=${category[i].category}`)}}>
                                <div>{category[i].category}</div>
                                <img src={`/images/category/${imageNames[i]}`} alt={"category"} />
                            </Category>
                        </Main>
                    )
                })
            }

        </div>
    );
}

export default MainDelivery;