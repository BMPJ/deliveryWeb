import styled from "styled-components"

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`
export const Store = styled.div`
  width: 1035px;
  padding: 10px 10px 0 10px;
  margin: 0 auto;

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
  width: 1015px;
  border: 1px solid lightgray;
  margin: 0 auto;
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
  width: 1015px;
  border: 1px solid lightgray;
  margin: 0 auto;
  margin-top: 10px;
`


export const Menu = styled.div`
  padding: 15px;
  border-bottom: 1px solid lightgray;
  width: 100%;
  cursor: pointer;

  .menuName {
    font-weight: bold;
  }

  .price {

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
`
export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: 248px;
`
export const DetailFoot = styled.div`
  margin-top: 3px;
`
export const Button = styled.button`
  width: 170px;
  height: 60px;
  border-color: white;
`
export const Option = styled.label`
  cursor: pointer;
`

