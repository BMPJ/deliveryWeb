import styled from "styled-components"

export const Store= styled.div`

  border : 1px solid black;

`
export const Menu = styled.div`
  
  border: 1px solid gray;
  width: 200px;  
  margin-top: 3px;
  cursor: pointer;
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

