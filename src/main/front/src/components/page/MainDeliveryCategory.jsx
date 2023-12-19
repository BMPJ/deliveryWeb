import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MainDeliveryCategory() {
    const [data, setData] = useState(''); // data 상태 추가
    const navigate = useNavigate();

    useEffect(() => {
        const encodedData = encodeURIComponent(data);
        axios.get(`/main/delivery/category=${encodedData}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [data]); // data를 의존성 배열에 추가

    // 필요에 따라 데이터 업데이트 로직 추가
    const updateData = (newData) => {
        setData(newData);
    };

    return (
        <div>
            {/* 여기에서 필요한 UI 및 데이터 업데이트 로직 추가 */}
        </div>
    );
}

export default MainDeliveryCategory;
