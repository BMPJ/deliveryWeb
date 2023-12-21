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
import Storename from "./components/page/Storename";

function App() {
    return (
        <Routes>
            <Route path="/main" element={<Homepage/>}/>
            <Route path="/main/join" element={<MainJoin/>}/>
            <Route path="/main/login" element={<MainLogin/>}/>
            <Route path="/main/delivery" element={<MainDelivery/>}/>
            <Route path="/main/delivery/category" element={<MainDeliveryCategory/>}/>
            <Route path="/main/delivery/category/storename" element={<Storename/>}/>
            <Route path="/manage/main" element={<ManageMain/>}/>
            <Route path="/manage/join" element={<ManageJoin/>}/>
            <Route path="/store/register" element={<StoreRegister/>}/>
        </Routes>
    );
}

export default App;
