import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Homepage from './components/page/Homepage.jsx';
import MainJoin from "./components/page/MainJoin";
import MainLogin from "./components/page/MainLogin";
import ManageMain from "./components/page/ManageMain";
import ManageJoin from "./components/page/ManageJoin";
import StoreRegister from "./components/page/StoreRegister";
import MainDelivery from "./components/page/MainDelivery";
import MainDeliveryCategory from "./components/page/MainDeliveryCategory";
import StoreSettingMain from "./components/page/StoreSettingMain";
import DeliveryStore from "./components/page/DeliveryStore";
import DeliveryCart from "./components/page/DeliveryCart";
import StoreModify from "./components/page/StoreModify";
import StoreMenuModify from "./components/page/StoreMenuModify";
import StoreMenuRegister from "./components/page/StoreMenuRegister";
import StoreInfo from "./components/page/StoreInfo";

function App() {
    return (
        <Routes>
            <Route path="/main" element={<Homepage/>}/>
            <Route path="/main/join" element={<MainJoin/>}/>
            <Route path="/main/login" element={<MainLogin/>}/>
            <Route path="/main/delivery" element={<MainDelivery/>}/>
            <Route path="/main/delivery/category" element={<MainDeliveryCategory/>}/>
            <Route path="main/delivery/category/storeid" element={<DeliveryStore/>}/>
            <Route path="main/delivery/cart" element={<DeliveryCart/>}/>
            <Route path="/manage/main" element={<ManageMain/>}/>
            <Route path="/manage/join" element={<ManageJoin/>}/>
            <Route path="/store/register" element={<StoreRegister/>}/>
            <Route path="/store/settingMain" element={<StoreSettingMain/>}/>
            <Route path="/store/modify/:id" element={<StoreModify/>}/>
            <Route path="/store/menu/register/:id" element={<StoreMenuRegister/>}/>
            <Route path="/store/menu/modify/:id" element={<StoreMenuModify/>}/>
            <Route path="/store/info/:id" element={<StoreInfo/>}/>

        </Routes>
    );
}

export default App;
