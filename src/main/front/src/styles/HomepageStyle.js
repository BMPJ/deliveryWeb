import styled from "styled-components"

export const Main = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  .packaging,
  .delivery {
    width: 400px;
    height: 400px;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: 300px 300px;
    background-position: 50% 80%;
    cursor: pointer;
  }

  .packaging {
    background-image: url("/images/package.png");
  }

  .packaging::after {
    content: "포장";
    display: block;
    color: black;
    font-size: 40px;
    margin-top: 4%;
    text-align: center;
  }

  .delivery {
    background-image: url("/images/delivery.png");
  }

  .delivery::after {
    content: "배달";
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
