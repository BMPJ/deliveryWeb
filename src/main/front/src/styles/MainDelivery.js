import styled from "styled-components"

export const Main = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`
export const Category = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
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