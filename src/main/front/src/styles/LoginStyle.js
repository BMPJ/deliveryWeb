import styled from "styled-components"

export const Wrap = styled.div`
  padding: 17px 10px 50px 10px;
  
`;
export const Loginform = styled.div`
  max-width: 800px;
  height: 192px;
  margin: 0 auto;

  .title {
    width: 109px;
    height: 45px;
    overflow: hidden;
    background: url("/images/logo-yogiyo2.png");
    background-size: 109px;
    margin: 0 auto 17px auto;
  }

  input {
    width: 800px;
    height: 44px;
    border: 1px solid lightgray;
    padding: 0 1rem;
    font-size: 1rem;

    &::placeholder {
      color: gray;
      font-size: 13px;
    }

    &:focus {
      outline: none;
      border: 1px solid #fa0050;
    }
  }
`;

export const ButtonBox = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .loginButton {
    width: 800px;
    height: 44px;
    border: none;
    color: #ffffff;
  }
`