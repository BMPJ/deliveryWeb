import "./App.css";
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Homepage from './components/page/Homepage.jsx';
import MainJoin from "./components/page/MainJoin";
import MainLogin from "./components/page/MainLogin";
import ManageMain from "./components/page/ManageMain";
import ManageJoin from "./components/page/ManageJoin";
import StoreRegister from "./components/store/StoreRegister";
import MainDelivery from "./components/page/MainDelivery";
import MainDeliveryCategory from "./components/page/MainDeliveryCategory";
import StoreSettingMain from "./components/page/StoreSettingMain";
import DeliveryStore from "./components/page/DeliveryStore";
import DeliveryCart from "./components/page/DeliveryCart";
import StoreModify from "./components/store/StoreModify";
import StoreMenuModify from "./components/store/StoreMenuModify";
import StoreMenuRegister from "./components/store/StoreMenuRegister";
import StoreInfo from "./components/store/StoreInfo";
import DeliveryOrder from "./components/page/DeliveryOrder";
import StoreReview from "./components/page/StoreReview";
import ReviewWrite from "./components/page/ReviewWrite";
import StoreOrder from "./components/store/StoreOrder";

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
            <Route path="main/delivery/order" element={<DeliveryOrder/>}/>
            <Route path="/manage/main" element={<ManageMain/>}/>
            <Route path="/manage/join" element={<ManageJoin/>}/>
            <Route path="/store/register" element={<StoreRegister/>}/>
            <Route path="/store/settingMain" element={<StoreSettingMain/>}/>
            <Route path="/store/modify/:id" element={<StoreModify/>}/>
            <Route path="/store/menu/register/:id" element={<StoreMenuRegister/>}/>
            <Route path="/store/menu/modify/:id" element={<StoreMenuModify/>}/>
            <Route path="/store/info/:id" element={<StoreInfo/>}/>
            <Route path="/main/delivery/store/review" element={<StoreReview/>}/>
            <Route path="/main/delivery/store/reviewWrite" element={<ReviewWrite/>}/>
            <Route path="/store/order" element={<StoreOrder/>}/>
        </Routes>
    );
}

export default App;
