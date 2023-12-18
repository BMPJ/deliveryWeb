import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Homepage from './components/page/Homepage.jsx';
import StoresJoin from "./components/page/StoresJoin.jsx";
import ManageMain from "./components/page/ManageMain";
import StoresLogin from "./components/page/StoresLogin";
import MainLogin from "./components/page/MainLogin";
import MainJoin from "./components/page/MainJoin";

function App() {
    return (
        <Routes>
            <Route path="/main" element={<Homepage/>}/>
            <Route path="/main/join" element={<MainJoin/>}/>
            <Route path="/main/login" element={<MainLogin/>}/>
            <Route path="/manage/main" element={<ManageMain/>}/>
            <Route path="/manage/join" element={<StoresJoin/>}/>
            <Route path="/manage/login" element={<StoresLogin/>}/>
        </Routes>
    );
}

export default App;
