import styled from "styled-components"

export const HeaderBlock = styled.div`
  width: 100%;
  height: 78px;
  background-color: #fa0050;
  overflow: hidden;

  .boss img {
    position: absolute;
    width: 200px;
    height: 100px;
    top: -10px;
  }

  .block {
    position: relative;
    max-width: 1020px;
    max-height: 320px;
    margin: 0 auto;
  }

  img {
    position: absolute;
    width: 90px;
    height: 38px;
    top: 19px;
  }

  .buttons {
    position: relative;
    width: 330px;
    height: 50px;
    top: 19px;
    left: 700px;
  }

  .logout,
  .orderList,
  .login,
  .join,
  .manage {
    position: absolute;
    width: 100px;
    height: 40px;
    color: #fff;
    border: 1px solid #ea7226;
    text-align: center;
    line-height: 40px;
    border-radius: 2px;
    cursor: pointer;
  }

  .logout {
    left: 105px;
  }

  .orderList {
    left: 215px;
  }

  .join {
    left: 110px;
  }

  .manage {
    left: 220px;
  }
`;