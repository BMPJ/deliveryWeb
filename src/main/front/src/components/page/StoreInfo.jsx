import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {storesInfoDB} from "../../service/storesLogic";
import {menuInfoDB} from "../../service/menuLogic";
const StoreInfo = () =>{

    const {id} = useParams();

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        console.log(id)
        const db = async() =>{
            try{
                const response = await menuInfoDB(id);
                setMenu(response.data);
                console.log(response.data)
            }catch(error){
                console.error('서버로 데이터 전송 중 오류 발생:', error);
            }
        }
        db();
    }, []);

    return(
            <>
           {
              menu.map((a,i)=>{
                  return(
                      <div>
                          {menu[i].price}
                      </div>
                  )
              })
           }

           </>
   )

}
export default StoreInfo