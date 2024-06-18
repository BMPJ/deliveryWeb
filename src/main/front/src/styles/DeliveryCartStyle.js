import styled from "styled-components"


export const Wrap = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding-top: 15px;
`
export const Pay = styled.div`
  float: left;
  width: 64.66666667%;
  
  .title{
    background-color: #333;
    color: #fff;
    font-size: 110%;
    padding: 10px 10px 10px 15px;
  }
  .info{
    background-color: #e6e6e6;
    font-size: 110%;
    padding: 10px 10px 10px 15px;
    margin-top: 15px;
  }
  .detail{
    border: 1px solid lightgray;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    .form{
      margin-bottom: 15px;
    }
  }
  .userinfo{
    float: left;
    font-weight: bold;
  }
  .user{
    text-align: right;
  }
  .request{
    background-color: #e6e6e6;
    font-size: 110%;
    padding: 10px 10px 10px 15px;
  }
  .text{
    width: 100%;
    height: 80px;
    margin-top: 15px;
  }
  .payment{
    background-color: #fa0050;
    color: #fff;
    font-size: 110%;
    padding: 10px 10px 10px 15px;
    text-align: center;
    margin-top: 5px;
    margin-right: 1%;
    width: 49%;
    float: right;
  }
    `
export const Order = styled.div`
  float: right;
  width: 33.33333333%;
  border: 1px solid lightgray;
  margin-left: 15px;
  
  .title{
    background-color: #e6e6e6;
    font-size: 110%;
    padding: 10px 10px 10px 15px;
  }
  .store{
    font-size: 110%;
    padding: 10px 10px 10px 15px;
    border-bottom: 1px solid lightgray;
  }
  .map{
    border-bottom: 1px solid lightgray;
  }
  .menu{
    border-radius: 0;
    margin-bottom: 0;
    background-color: #fff8eb;
    padding: 10px 15px;
  }
  .name{
    float: left;
  }
  .price{
    text-align: right;
  }
  .total{
    background-color: #fff8eb;
    padding: 10px 15px;
    color: #fa0050;
    font-size: 110%;
    font-weight: bold;
  }
    `