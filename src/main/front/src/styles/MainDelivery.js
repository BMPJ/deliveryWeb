import styled from "styled-components"

export const Wrap = styled.div`
  max-width: 1020px;
  height: 930px;
  margin: 0 auto;
  text-align: right;

  @media screen and (min-width: 697px) and (max-width: 1036px) {
    max-width: 697px;
  }

  @media screen and (max-width: 697px) {
    max-width: 348px;
  }

`

export const Category = styled.div`
  position: relative;
  width: 330px;
  height: 220px;
  float: left;
  border: 1px solid lightgray;
  margin: 5px;
  cursor: pointer;

  .name {
    position: absolute;
    top: 7%;
    left: 7%;
    font-size: 110%;
    font-weight: bold;
  }




`