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

export const ManageWrap = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 100px 0;

  .title {
    display: flex;

    .logo {
      width: 178px;
      height: 62px;
      overflow: hidden;
      background: url("/images/logo-yogiyo2.png") no-repeat center;
      background-size: 90%;
      margin: 0 auto 17px auto;
    }

    span {
      position: relative;
      left: -160px;
      color: #fa0050;
      font-size: 2em;
      font-weight: bold;
      text-align: center;

    }
  }
`

export const LoginBox = styled.div`
  position: relative;
  width: 580px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  padding: 70px 0;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px 3px lightgray;

  .id-Box, .pw-Box {
    position: relative;
    padding: 0 190px 0 150px;
    margin-bottom: 16px;

    label {
      display: block;
      position: absolute;
      top: 8px;
      left: 80px;
      width: auto;
      padding: 0;
      bottom: 0;
      margin-bottom: 5px;
      font-size: 14px;
      color: #616161;
      letter-spacing: -1px;
      font-weight: bold;
    }

    .inputWrap {
      position: relative;
      padding: 5px 40px 0 0;
      width: 100%;
      height: 37px;
      border: 1px solid #afafaf;

      input {
        border: none;
        height: 24px;
        line-height: 1;
        padding: 4px 2px;
        text-align: left;
        color: #7f7f7f;
      }

      input:focus {
        outline: none;
      }
    }
  }

  .id-Box {
    .icon {
      position: absolute;
      top: 8px;
      right: 10px;
      width: 18px;
      height: 20px;
      background: url("/images/icon.png") no-repeat -207px -11px;
    }
  }

  .pw-Box {
    .icon {
      position: absolute;
      top: 8px;
      right: 10px;
      width: 18px;
      height: 20px;
      background: url("/images/icon.png") no-repeat -209px -37px;
    }
  }

  .button-Box {
    position: absolute;
    padding: 0;
    margin: 0;
    top: 70px;
    right: 80px;
    width: 100px;

    button {
      height: 94px;
      width: 100%;
      text-align: center;
      background-color: #fa0050;
      border: none;
      font-weight: bold;
      color: #ffffff;
      line-height: 53px;
      font-size: 20px;
    }
  }

  .a-Box {
    text-align: center;

    a {
      color: #fa0050;
      text-decoration: underline;
    }
  }

`