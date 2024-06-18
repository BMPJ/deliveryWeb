import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Main = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  .register,
  .setting {
    width: 400px;
    height: 400px;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: 300px 300px;
    background-position: 50% 80%;
    cursor: pointer;
  }

  .register {
    background-image: url("/images/register.png");
  }

  .register::after {
    content: "가게등록";
    display: block;
    color: black;
    font-size: 40px;
    margin-top: 4%;
    text-align: center;
  }

  .setting {
    background-image: url("/images/setting.png");
  }

  .setting::after {
    content: "가게관리";
    display: block;
    color: black;
    font-size: 40px;
    margin-top: 4%;
    text-align: center;
  }

  @media screen and (max-width: 900px) {
    gap: 30px;
    .packaging,
    .delivery {
      background-size: 80%;
    }
  }

`

export const MenuBox = styled.div`
  width: 200px;

`

export const NavStyle = styled(NavLink)`
  color: black;

  //&:link {
  //  transition: 0.5s;
  //  text-decoration: none;
  //}
  //
  //&:hover {
  //  color: aquamarine;
  //}
  //
  //&.active {
  //  color: aqua;
  //  position: relative;
  //  top: 2px;
  //}
`
export const MainBox = styled.div`
`


export const DetailBox = styled.div`
  margin-left: 200px;
  margin-top: -130px;

`

