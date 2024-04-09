import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import Header from "../include/Header";

function StoreReview(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const storeid = queryParams.get('storeid');
    const [store, setStore] = useState([]);
    const [review, setReview] = useState([]);
    const [rating, setRating] = useState([]);



    return(
        <div>
            <Header/>

        </div>
    )

}

export default StoreReview;