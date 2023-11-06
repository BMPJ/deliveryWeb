import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from "react";
function App() {

    const handleChange = (event)
    return (
        <div>
            <form action="main/pk" method="get">
                <button>포장</button>
                <input type="hidden" name="type" value="1"/>
                <input type="hidden" name="type" value="0"/>
            </form>
            <form action="main/dv" method="get">
                <button>배달</button>
                <input type="hidden"name="type" value="2"/>
                <input type="hidden"name="type" value="0"/>
            </form>
        </div>

);
}

function selectData(){
  axios.post('/main')
      .then(function (res){
        console.log(res)
      });
}

export default App;