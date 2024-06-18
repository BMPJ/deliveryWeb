import styled from "styled-components"


export const Wrap = styled.div`
    max-width: 1700px;
    margin : 0 auto;
`
export const Main = styled.div`
  width: 80%;
  height: 100%;
  overflow-x: hidden;
  float: left;
  max-width: 1330px;
`
export const Store = styled.div`
  width: 1035px;
  margin-left: auto;
  margin-right: 0;
  margin-top: 10px;

  .storeName,
  .storeInfo {
    border: 1px solid lightgray;
    padding: 10px;
  }

  .storeInfo {
    display: flex;
  }

  .storeInfo ul {
    padding: 20px;
  }

  .storeInfo img {
    width: 80px;
    height: 80px;
  }
`
export const MenuButton = styled.div`
  width: 1035px;
  border: 1px solid lightgray;
  margin-left: auto;
  margin-right: 0;
  margin-top: 10px;

  ul {
    display: flex;
  }

  li {
    font-size: 110%;
    width: 33%;

    text-align: center;
  }

  li:nth-child(2) {
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
  }

  ul li a {
    padding: 20px;
    display: block;
    width: 100%;
    height: 100%;
  }
`
export const MenuWrap = styled.div`
  width: 1035px;
  border: 1px solid lightgray;
  margin-left: auto;
  margin-right: 0;
  margin-top: 10px;
`


export const Menu = styled.div`
  padding: 15px;
  border-bottom: 1px solid lightgray;
  width: 100%;
  cursor: pointer;

  .menu-text {
    width: 100%;
    padding-right: 10px;
  }

  .menuName {
    font-weight: bold;
  }

  .menuContents {
    padding: 3px 0 3px 0; //상우하좌
    font-size: 0.8rem;
    color: #999;
  }

  .price:after {
    content: "원";
  }

  .photo-area img {
    width: 112px;
    height: 80px;
  }

`

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  cursor: auto;
`

export const Line = styled.div`
  border: 1px solid #80808045;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const Order = styled.div`
  background-color: white;
  width: 350px;
  height: 420px;
  padding: 7px;
`
export const Price = styled.div`
  float: right;
  margin-left: 10px;
`
export const OrderCnt = styled.input`
  width: 15px;
`
export const Cnt = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: 244px;
`
export const Total = styled.div`
  display: flex;
  align-items: center;
  margin-left: 192px;
`
export const DetailFoot = styled.div`
  margin-top: 3px;
`
export const Button = styled.button`
  width: 168px;
  height: 60px;
  border-color: white;
  margin-top: 50px;
`
export const Option = styled.label`
  cursor: pointer;
`

export const Review = styled.div`
  width: 1035px;
  border: 1px solid lightgray;
  margin-left: auto;
  margin-right: 0;
  margin-top: 10px;
  
  .reviewTitle{
    margin: 5px;
  }
  
  .reviewContent{
    margin : 5px;
    border-top:1px solid lightgray;
  }
`

export const Info = styled.div`
  width: 1035px;
  border: 1px solid lightgray;
  margin-left: auto;
  margin-right: 0;
  margin-top: 10px;
`

export const Cart = styled.div`
  float: right;
  height: 330px;
  min-width: 330px;
  
  .cartTitle{
    background-color: #333;
    color: #fff;
    height: 40px;
    font-size:110%;
    padding: 10px 10px 10px 15px;
  }
  .cartContent{
    border: 1px solid lightgray;
    padding: 10px 15px;
  }
  .xButton{
    height: 25px;
    cursor: pointer;
    float: right;
  }
  .cartSum{
    background-color: #fff8eb;
    height: 44px;
    color: #fa0050;
    text-align: right;
    font-size: 110%;
    font-weight: bold;
    border: 1px solid lightgray;
    padding: 10px 12px;
  }
  
  .noCart{
    border: 1px solid lightgray;
    font-size: small;
    padding: 50px 0;
    text-align: center;
  }
  .cartOrder{
    color: #fff;
    background-color: #fa0050;
    border-color: #fa0050;
    border-radius: 0;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    text-align: center;
    margin-top: 5px;
    cursor: pointer;
  }

 
    `