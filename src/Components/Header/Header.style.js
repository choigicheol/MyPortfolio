import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50vh;
  img {
    top: -250px;
    position: absolute;
    width: 100vw;
    height: 100%;
  }
  #header_Menu {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    margin-top: 20px;
    span {
      margin-right: 30px;
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
