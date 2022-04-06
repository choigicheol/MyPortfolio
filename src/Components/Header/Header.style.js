import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;

  #header_menu {
    width: 100%;
    position: fixed;
    height: 25px;
    line-height: 25px;
    z-index: 999;
    top: 0;
    text-align: right;
    padding: 20px 0;
    background-color: #ffffff;
    span {
      margin-right: 30px;
      color: #2d2d2d;
      font-size: 1.5rem;
      font-weight: 300;
      cursor: pointer;
      @media screen and (max-width: 700px) {
        font-size: 1rem;
        margin-right: 25px;
      }
      @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        margin-right: 10px;
      }
    }
  }
`;
