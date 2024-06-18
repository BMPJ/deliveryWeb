import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import {storeDeleteDB, storesInfoDB} from "../../service/storesLogic";
import {menuInfoDB} from "../../service/menuLogic";
import StoreSettingMain from "../page/StoreSettingMain";
import Header from "../include/Header";
import SidebarItem from "../page/SidebarItem";
import {MenuBox, NavStyle} from "../../styles/ManageStyle";

//sidebar
const StoreInfo = () => {

    const {id} = useParams();

    const [menu, setMenu] = useState([]);
    const [storeName, setStoreName] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const path = useLocation().pathname;
    /*const pathName = useLocation().pathname.split("/");
    console.log(path);
    console.log(pathName);*/

    const navigate = useNavigate();

    useEffect(() => {
        console.log(id)
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
        if (menu.length > 0) {
            setStoreName(menu[0].name)
        }
    }, [menu]);


    const openButtonHandler = () => {
        setIsOpen(true);

        if (isOpen === true) {
            setIsOpen(false);
        }
    }

    const deleteStore = async () => {
        try {
            const response = await storeDeleteDB(id);
            navigate("/store/settingMain")
        } catch (error) {
            console.error('서버로 데이터 전송 중 오류 발생:', error);
        }
    }

    const Menu = [
        {name: "주문확인", path: `/store/order/${id}`},
        {name: "가게관리", path: `/store/modify/${id}`},
        {name: "메뉴등록", path: `/store/menu/register/${id}`},
        {name: "메뉴수정", path: `/store/menu/modify/${id}`},
        {name: "리뷰관리", path: ''},
        {name: "배달지역관리", path: ''}
    ]

    return (
        <>
            <Header/>
            <MenuBox>
                {
                    storeName ?
                        <div className="storelogo">
                            {storeName}
                        </div>
                        : <div>
                            <p>loading</p>
                        </div>
                }
                {Menu.map((a, i) => {
                    return (
                        <NavStyle to={a.path}>
                            <SidebarItem
                                tab={a}
                                isActive={path === a.path}
                            />
                        </NavStyle>
                    )

                })}
            </MenuBox>
        </>
    )

}
export default StoreInfo