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
import UserOrder from "./components/page/UserOrder";
import StoreReview from "./components/page/StoreReview";
import ReviewWrite from "./components/page/ReviewWrite";
import StoreOrder from "./components/store/StoreOrder";
import ManageLogin from "./components/page/ManageLogin";
import OrderDetail from "./components/page/OrderDetail";
import MainTest from "./components/page/MainTest";
import NavTest from "./components/page/NavTest";

function App() {
    return (
        <Routes>
            <Route path="/main" element={<Homepage/>}/>
            <Route path="/main/join" element={<MainJoin/>}/>
            <Route path="/main/login" element={<MainLogin/>}/>
            <Route path="/main/delivery" element={<MainDelivery/>}/>
            <Route path="/main/delivery/category" element={<MainDeliveryCategory/>}/>
            <Route path="main/delivery/category/storeid" element={<DeliveryStore/>}/>
            <Route path="/main/delivery/cart" element={<DeliveryCart/>}/>
            <Route path="main/order" element={<UserOrder/>}/>
            <Route path="/manage/main" element={<ManageMain/>}/>
            <Route path="/manage/login" element={<ManageLogin/>}/>
            <Route path="/manage/join" element={<ManageJoin/>}/>
            <Route path="/store/register" element={<StoreRegister/>}/>
            <Route path="/store/settingMain" element={<StoreSettingMain/>}/>
            <Route path="/store/modify/:id" element={<StoreModify/>}/>
            <Route path="/store/menu/register/:id" element={<StoreMenuRegister/>}/>
            <Route path="/store/menu/modify/:id" element={<StoreMenuModify/>}/>
            <Route path="/store/info/:id" element={<StoreInfo/>}/>
            <Route path="/main/delivery/store/review" element={<StoreReview/>}/>
            <Route path="/main/delivery/store/reviewWrite" element={<ReviewWrite/>}/>
            <Route path="/main/order/detail" element={<OrderDetail/>}/>
            <Route path="/main/test" element={<MainTest/>}/>
            <Route path="/store/order/:id" element={<StoreOrder/>}/>
            <Route path="/store/test" element={<NavTest/>}/>
        </Routes>
    );
}

export default App;
