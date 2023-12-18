import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Homepage from './components/page/Homepage.jsx';
import ManageJoin from "./components/page/ManageJoin.jsx";
import ManageMain from "./components/page/ManageMain";
import Login from "./components/page/Login";
import StoreRegister from "./components/page/StoreRegister";

function App() {
    return (
        <Routes>
            <Route path="/main" element={<Homepage/>}/>
            <Route path="/manage/main" element={<ManageMain/>}/>
            <Route path="/manage/join" element={<ManageJoin/>}/>
            <Route path="/manage/login" element={<Login/>}/>
            <Route path="/stores/register" element={<StoreRegister/>}/>
        </Routes>
    );
}

export default App;
