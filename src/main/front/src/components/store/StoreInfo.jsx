import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {storesInfoDB} from "../../service/storesLogic";
import {menuInfoDB} from "../../service/menuLogic";
const StoreInfo = () =>{

    const {id} = useParams();

    const [menu, setMenu] = useState([]);
    const [storeName, setStoreName] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

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

    useEffect(() => {
        if(menu.length>0){
            setStoreName(menu[0].name)
        }
    }, [menu]);


    const openButtonHandler =()=> {
        setIsOpen(true);

        if(isOpen===true){
            setIsOpen(false);
        }
    }

    return(
            <>
                <div>
                    {storeName}
                </div>
                <div>
                    <button onClick={()=>{navigate(`/store/order?storeid=${id}`)}}>주문확인</button>
                </div>
                <div>
                    <button onClick={()=>navigate(`/store/modify/${id}`)}>
                        가게관리
                    </button>
                </div>
                <div>
                    <button onClick={()=>openButtonHandler()}>
                        메뉴 관리
                    </button>
                    {
                        isOpen ? <div>
                            <button onClick={()=>navigate(`/store/menu/register/${id}`)}>메뉴 등록</button><br/>
                            <button onClick={()=>navigate(`/store/menu/modify/${id}`)}>메뉴 수정</button><br/>
                            <button>품절 메뉴 관리</button>
                            </div> : null
                    }
                </div>
                <div>
                    리뷰 관리
                </div>
                <div>
                    배달지역 관리
                </div>
                <div>
                    메뉴가격 관리
                </div>




           {
              menu.map((a,i)=>{
                  return(
                      <div>
                          메뉴이름:{menu[i].menuName}가격:{menu[i].price}
                      </div>
                  )
              })

           }

           </>
   )

}
export default StoreInfo