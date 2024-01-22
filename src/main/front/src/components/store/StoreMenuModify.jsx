import React, {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {menuInfoDB} from "../../service/menuLogic";
import {menuUpdateDB} from "../../service/storesLogic";


const StoreMenuModify = () =>{

    const {id} = useParams();
    const [inputStatus, setInputStatus] = useState("");
    const [menu, setMenu] = useState([])
    const [fileImage, setFileImage] = useState("");

    const [newMenu, setNewMenu] = useState({
            storeid : '',
            menuid : '',
            menuName : '',
            category : '',
            price : '',
            menuPictureUrl : '',
            status : ''
        }
    )

    const saveFileImage = (e) =>{
        setFileImage(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files)
        console.log(e.target.files[0])

    }
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
    }


    const fileInputRef =useRef(null);
    const handleClickFileInput =()=>{
        fileInputRef.current?.click();
    }



    //처음화면
    useEffect(() => {

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

    const modifyHandler = (menuId) =>{
        setInputStatus(()=>(inputStatus!==menuId ? menuId : ""));

        if(inputStatus === menuId){
            setInputStatus("");
        }

    }

    const sendData = async() =>{
        try{

            if(
                newMenu.menuName !== "" &&
                newMenu.category !== "" &&
                newMenu.price !== ""
            ){
                const response = await menuUpdateDB(newMenu)
                setInputStatus("");
                console.log(newMenu.menuPictureUrl);
                //window.location.reload();
            }else{
                alert("빈칸 X")
            }

        }catch(error){
            console.error('서버로 데이터 전송 중 오류 발생:', error);
            setInputStatus("");
            console.log(newMenu.menuPictureUrl);

        }
    }

    const info =(e)=>{
        const id = e.currentTarget.id;
        const value = e.target.value;
        setNewMenu({...newMenu,[id]:value});
    }


    return(
        <>
            {
                menu.map((a,i)=>{
                        return(
                            <div key ={i}>
                                <div>
                                    {
                                        inputStatus===menu[i].menuid
                                            ?
                                            <div>메뉴이름=<input id = "menuName"
                                                             value={newMenu.menuName}
                                                             onChange={
                                                                 (e)=>info(e)
                                                             }/></div>
                                            :
                                            <div>메뉴이름={menu[i].menuName}</div>
                                    }
                                </div>
                                <div>
                                    {
                                        inputStatus===menu[i].menuid
                                            ?
                                            <div>카테고리=<input id = "category"
                                                             value ={newMenu.category}
                                                             onChange={(e)=>info(e)
                                                             }/></div>
                                            :
                                            <div>카테고리={menu[i].category}</div>
                                    }
                                </div>
                                <div>
                                    {
                                        inputStatus===menu[i].menuid
                                            ?
                                            <div>메뉴가격=<input id = "price"
                                                             value ={newMenu.price}
                                                             onChange={(e)=>info(e)
                                                             }/></div>
                                            :
                                            <div>메뉴가격={menu[i].price}</div>
                                    }
                                </div>
                                <div>
                                    {
                                        inputStatus===menu[i].menuid
                                            ?
                                            <div>메뉴사진=<input id = "menuPictureUrl"
                                                             type="file"
                                                             accept={"image/jpg, image/jpeg, image/png"}
                                                             multiple hidden ref={fileInputRef}
                                                             onChange={saveFileImage}
                                                             />
                                                <button onClick={()=>{handleClickFileInput()}}>이미지 업로드</button>

                                            </div>
                                            :
                                            <div>메뉴사진={menu[i].menuPictureUrl &&(<img alt={menu[i].menuPictureUrl} src={menu[i].menuPictureUrl}/>)}</div>
                                    }
                                </div>
                                <div>
                                    {
                                        inputStatus===menu[i].menuid
                                            ?
                                            <div>판매상태=<input id = "status"
                                                             value ={newMenu.status}
                                                             onChange={(e)=>info(e)
                                                             }/></div>
                                            :
                                            <div>판매상태={menu[i].status}</div>
                                    }
                                </div>

                                {
                                    inputStatus === "" || inputStatus !== menu[i].menuid
                                        ?
                                        <button onClick={()=>{
                                            modifyHandler(menu[i].menuid)
                                            setNewMenu({
                                                menuid : menu[i].menuid,
                                                storeid : menu[i].storeid,
                                            })
                                            setNewMenu(menu[i])
                                        }}>수정</button>
                                        :
                                        <button onClick={()=>sendData()}>수정완료</button>
                                }
                            </div>

                        )
                    }
                )
            }
        </>
    )
}
export default StoreMenuModify