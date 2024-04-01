import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

function ReviewWrite(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const orderid = queryParams.get('orderid');
    const [order, setOrder] = useState([]);
    const [rating, setRating] = useState(5);
    const [content, setContent] = useState("");
    const userid = sessionStorage.getItem("userid")
    const [orderName, setOrderName] = useState('');
    const [storeid, setStoreid] = useState('');
    const navigator = useNavigate();

    useEffect(() => {
        if(orderid){
            axios.get(`/main/delivery/getOrder?orderid=${orderid}`)
                .then((a)=>{
                    console.log(a)
                    setOrder(a.data)
                    if(a.data.length>0) {
                        setOrderName(a.data[0].orderName)
                        setStoreid(a.data[0].storeid)
                    }
                })
                .catch((err)=>{
                    console.error(err)
                })
        }
    }, []);


    const handleRating = (e) => {
        setRating(parseInt(e.target.value));
    };

    const review = {
        storeid: storeid,
        userid: userid,
        rating: rating,
        content: content,
        orderName: orderName,
        reviewPictureUrl: '',
        orderid : orderid
    }

    const reviewWrite = ()=>{

        console.log(review)

        axios.post('/main/delivery/reviewWrite', review)
            .then((a)=>{
                console.log(a)
                navigator(`/main/delivery/order?userid=${userid}`)
            })
            .catch((err)=>{
                console.error(err)
            })
    }



    return(
        <div>
            <div>
                <strong>리뷰작성</strong>
                {
                    order.length>0 ?
                    <div>
                        <p>{order[0].name}</p>
                        <p>{order[0].orderName}</p>
                        <div>
                            <label>평점</label>
                            <select onChange={handleRating} value={rating}>
                                <option value={5}>5</option>
                                <option value={4}>4</option>
                                <option value={3}>3</option>
                                <option value={2}>2</option>
                                <option value={1}>1</option>
                            </select>
                        </div>
                        <div>
                            <textarea
                                placeholder={"음식의 맛, 양, 포장 상태 등 음식에 대한 솔직한 리뷰를 남겨주세요."}
                                onChange={(e)=>{
                                    setContent(e.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <button onClick={reviewWrite}>리뷰 작성</button>
                        </div>
                    </div>

                    :
                    <div>
                        <p>Loading....</p>
                    </div>
                }
            </div>
        </div>
    )

}

export default ReviewWrite;
