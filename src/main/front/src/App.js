import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/page/Homepage.jsx';
import StoresJoin from "./components/page/StoresJoin.jsx";
import ManageMain from "./components/page/ManageMain";
import StoresLogin from "./components/page/StoresLogin";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/main" element={<Homepage />} />
                    <Route path="/manage/main" element={<ManageMain/>}/>
                    <Route path="/manage/join" element={<StoresJoin/>}/>
                    <Route path="/manage/login" element={<StoresLogin/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
