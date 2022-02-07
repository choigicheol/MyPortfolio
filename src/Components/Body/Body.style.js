import styled from "styled-components";

export const BodyContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #ffffff;
`;

export const IntroBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 45vh;
    font-size: 1.5rem;
    font-weight: 300;
  }
  #intro_Title {
    font-size: 4rem;
    font-weight: 300;
    padding: 50px 0 20px 0;
  }
  .intro_Content {
    color: #111111;
    padding: 5px 0;
  `;

export const SkillsBox = styled.div`
  width: 100%;
  height: 500px;
  opacity: 0.3;
  background-color: #d8d4cc;
`;
