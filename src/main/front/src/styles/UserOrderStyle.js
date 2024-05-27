import styled from "styled-components"

export const Wrap = styled.div`
  max-width: 850px;
  margin: 0 auto;
  
  .title{
    background-color: #333;
    color: #fff;
    font-size: 110%;
    padding: 10px 10px 10px 15px;  
    margin-top: 15px;
  }
  .content{
    border: 1px solid lightgray;
    margin-top: 15px;
    padding: 15px;
    background-color: #fff8eb;
  }
  .right{
    float: right;
  }
  .ing{
    color: coral;
  }
  .done{
    color: blue;
  }
  .store{
    font-size: 110%;
    font-weight: bold;
  }
  .center{
    padding-right: 200px;
    text-align: right;
    margin-bottom: 10px;
  }
  .detail{
    padding: 10px;
    text-align: center;
    margin-right: 1px;
    max-width: 90px;
    float: right;
    cursor: pointer;
    height: 40px;
    background-color: aquamarine;
  }
  .review{
    padding: 10px;
    text-align: center;
    max-width: 110px;
    float: right;
    cursor: pointer;
    font-size: 90%;
    height: 40px;
    background-color: forestgreen;
    color: #fff;
    
  }
  .finish{
    cursor: auto;
    background-color: #333;
    color: #fff;
  }
  `

