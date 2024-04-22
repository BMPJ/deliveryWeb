import React, {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {imgUpdateDB, menuDeleteDB, menuInfoDB, menuUpdateDB} from "../../service/menuLogic";


const StoreMenuModify = () => {

    const {id} = useParams();
    const [inputStatus, setInputStatus] = useState("");
    const [menu, setMenu] = useState([])
    const [file, setFile] = useState();
    const formData = new FormData();
    const [menuid, setMenuid] = useState();

    const [newMenu, setNewMenu] = useState({
            storeid: '',
            menuid: '',
            menuName: '',
            category: '',
            price: '',
            menuContents: '',
            status: '',
        }
    )


    //처음화면
    useEffect(() => {

        const db = async () => {
            try {
                const response = await menuInfoDB(id);
                setMenu(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('서버로 데이터 전송 중 오류 발생:', error);

            }
        }
        db();
    }, []);

    useEffect(() => {

    }, [menuid])
    const modifyHandler = (menuId) => {

        setInputStatus(() => (inputStatus !== menuId ? menuId : ""));

        if (inputStatus === menuId) {
            setInputStatus("");
        }

    }


    const sendData = async () => {
        try {
            formData.append('file', file);
            formData.append('menuId', JSON.stringify(menuid));

            if (
                newMenu.menuName !== "" &&
                newMenu.category !== "" &&
                newMenu.price !== ""
            ) {

                const response = await menuUpdateDB(newMenu)
                const response1 = await imgUpdateDB(formData)
                setInputStatus("");
                window.location.reload();
            } else {
                alert("빈칸 X")
            }

        } catch (error) {
            console.error('서버로 데이터 전송 중 오류 발생:', error);
            setInputStatus("");
            console.log(newMenu.menuPictureUrl);

        }
    }

    const deleteData = async (menuid) => {
        try {
            const response = await menuDeleteDB(menuid);
            window.location.reload();

        } catch (error) {
            console.error('서버로 데이터 전송 중 오류 발생:', error);
        }
    }

    const info = (e) => {
        const id = e.currentTarget.id;
        const value = e.target.value;
        setNewMenu({...newMenu, [id]: value});
    }

    const saveFile = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <>
            {
                menu.map((a, i) => {
                        return (
                            <div key={i}>
                                <div>
                                    {
                                        inputStatus === menu[i].menuid
                                            ?
                                            <div>메뉴이름=<input id="menuName"
                                                             value={newMenu.menuName}
                                                             onChange={
                                                                 (e) => info(e)
                                                             }/></div>
                                            :
                                            <div>메뉴이름={menu[i].menuName}</div>
                                    }
                                </div>
                                <div>
                                    {
                                        inputStatus === menu[i].menuid
                                            ?
                                            <div>카테고리=<input id="category"
                                                             value={newMenu.category}
                                                             onChange={(e) => info(e)
                                                             }/></div>
                                            :
                                            <div>카테고리={menu[i].category}</div>
                                    }
                                </div>
                                <div>
                                    {
                                        inputStatus === menu[i].menuid
                                            ?
                                            <div>메뉴가격=<input id="price"
                                                             value={newMenu.price}
                                                             onChange={(e) => info(e)
                                                             }/></div>
                                            :
                                            <div>메뉴가격={menu[i].price}</div>
                                    }
                                </div>
                                <div>
                                    {
                                        inputStatus === menu[i].menuid
                                            ?
                                            <div>메뉴사진=<input id="menuPictureUrl"
                                                             type="file"
                                                             onChange={saveFile}
                                            />
                                            </div>
                                            :
                                            menu[i].menuImgName == null ?
                                                <div>메뉴사진=
                                                    <img alt="디폴트이미지"
                                                         src="/images/menu/defaultmenuimg.png">
                                                    </img>
                                                </div>
                                                :
                                                <div>메뉴사진=
                                                    <img alt="#"
                                                         src={"http://localhost:8000/" + menu[i].menuImgName}>
                                                    </img>
                                                </div>
                                    }
                                </div>
                                <div>
                                    {
                                        inputStatus === menu[i].menuid
                                            ?
                                            <div>메뉴설명=<input id="menuContents"
                                                             value={newMenu.menuContents}
                                                             onChange={(e) => info(e)
                                                             }/></div>
                                            :
                                            <div>메뉴설명={menu[i].menuContents}</div>
                                    }
                                </div>
                                <div>
                                    {
                                        inputStatus === menu[i].menuid
                                            ?
                                            <div>판매상태=<input id="status"
                                                             value={newMenu.status}
                                                             onChange={(e) => info(e)
                                                             }/></div>
                                            :
                                            <div>판매상태={menu[i].status}</div>
                                    }
                                </div>

                                {
                                    inputStatus === "" || inputStatus !== menu[i].menuid
                                        ?
                                        <div>
                                            <button onClick={() => {
                                                modifyHandler(menu[i].menuid)
                                                setMenuid(menu[i].menuid)
                                                setNewMenu(menu[i])
                                            }}>수정
                                            </button>
                                            <button onClick={() =>
                                                deleteData(menu[i].menuid)
                                            }
                                            >삭제
                                            </button>
                                        </div>
                                        :
                                        <button onClick={() => sendData()}>수정완료</button>
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