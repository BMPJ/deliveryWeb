import React, {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {storesRegisterDB} from "../../service/storesLogic";
import {menuRegisterDB} from "../../service/menuLogic";

const StoreMenuRegister = () =>{

    const {id} = useParams()

    let navigate = useNavigate();
    const [menu, setMenu] = useState({
        category : '',
        storeid : id,
        menuName : '',
        price : '',
        menuPictureUrl : '',
        popularity : 0,
        status : 0
    })

    const info = (e) => {
        const id = e.currentTarget.id;
        const value = e.target.value;
        setMenu({...menu, [id]: value});
    }


    const register = async() => {
        try {
            const response = await menuRegisterDB(menu)
            navigate('/store/settingMain')
            console.log(response);

        }catch (error){
            console.log(menu)
            alert("실패");
            console.error('서버로 데이터 전송 중 오류 발생:', error);
        }
    }


    return(
        <>
            <div>
                <label>카테고리</label>
                <input
                    id = "category"
                    value= {menu.category}
                    onChange={(e)=>{info(e)}}
                />
            </div>
            <div>
                <label>메뉴이름</label>
                <input
                    id = "menuName"
                    value={menu.menuName}
                    onChange={(e)=>{info(e)}}
                />
            </div>
            <div>
                <label>가격</label>
                <input
                    id = "price"
                    value={menu.price}
                    onChange={(e)=>{info(e)}}
                />

            </div>
            <div>
                <label>메뉴사진</label>
                <input
                    id = "menuPictureUrl"
                    value={menu.menuPictureUrl}
                    onChange={(e)=>{info(e)}}
                />
            </div>
            <button onClick={()=>register()}>등록</button>
        </>
    )
}
export default StoreMenuRegister