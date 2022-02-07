import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 55vh;
  img {
    top: -210px;
    position: absolute;
    width: 100vw;
    height: 100%;
  }
  #Header_Img_Background {
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: #d8d4cc;
    position: relative;
    z-index: 1;
  }
  #header_Menu {
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    text-align: right;
    padding: 20px 0;
    background-color: #ffffff;
    span {
      margin-right: 30px;
      color: #222222;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
`;
