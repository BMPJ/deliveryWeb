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

    useEffect(() => {
        if(storeid) {
            axios.get(`/main/delivery/storeid?storeid=${storeid}`)
                .then((a) => {
                    console.log(a.data)
                    setStore(a.data)
                })
                .catch((err) => {
                    console.error(err)
                });
            axios.get(`/main/delivery/reviewList?storeid=${storeid}`)
                .then((a) => {
                    console.log(a.data)
                    setReview(a.data)
                })
                .catch((err) => {
                    console.error(err)
                });
            axios.get(`/main/delivery/reviewCount?storeid=${storeid}`)
                .then((a) => {
                    console.log(a.data)
                    setRating(a.data)
                })
                .catch((err) => {
                    console.error(err)
                });
        }
    }, []);

    return(
        <div>
            <Header/>
            <div>
                {
                    store.length > 0 && rating.length > 0 ? (
                        <div>
                            <p>{store[0].name} 리뷰 ( {rating[0].CNT} )</p>
                            <div>
                                <p>5 : {rating[0].FIVE}</p>
                                <p>4 : {rating[0].FOUR}</p>
                                <p>3 : {rating[0].THREE}</p>
                                <p>2 : {rating[0].TWO}</p>
                                <p>1 : {rating[0].ONE}</p>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div>
                            ?
                        </div>
                    )
                }
                {
                    review.map(function (a,i){
                        return(
                            <div key={i}>
                                <div>
                                    <p>{review[i].nickname}</p>
                                    <p>{review[i].CREATEDDATE}</p>
                                    <p>{review[i].rating}</p>
                                    <p>{review[i].content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default StoreReview;