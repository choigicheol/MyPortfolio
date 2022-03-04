import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #f8fcff;
  .blank_area {
    width: 100%;
    height: 65px;
    background-color: #ffffff;
  }
  .blank_skill {
    background-color: #f8fcff;
  }
`;

export const IntroBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 45vh;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 300;
  }
  `;

export const SubTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0 20px 0;
  span {
    font-size: 4rem;
    font-weight: 300;
    /* border-bottom: 4px solid #aadbff; */
    border-bottom: 4px solid #eeeeee;
    border-radius: 2px;
  }
  @media screen and (max-width: 700px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const SkillsBox = styled.div`
  width: 100%;
  min-height: 97vh;
  background-color: #ffffff;
  /* padding-bottom: 65px; */
  #skills_container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .skill_box {
      border: 1px solid #2d2d2d;
      height: fit-content;
      margin: 22.5px 10px;
      .skill_title {
        width: 100%;
        text-align: center;
        font-size: 2rem;
        font-weight: 300;
        padding: 20px 0;
        border-bottom: 1px dashed #2d2d2d;
        span {
          /* border-bottom: 1px solid #8f8f8f; */
        }
        @media screen and (max-width: 700px) {
          font-size: 1.5rem;
          padding: 15px 0;
        }
        @media screen and (max-width: 500px) {
          font-size: 1rem;
          padding: 10px 0;
        }
      }
      .skill_img {
        display: flex;
        align-items: center;
        img {
          padding: 20px;
          width: 260px;
        }
      }
    }
  }
`;

export const ProjectsBox = styled.div`
  width: 100%;
  min-height: 97vh;
  #project_container {
    border-top: 1px solid #2d2d2d;
    margin-bottom: 70px;
  }
  .project {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    margin: 15px 0;
    font-weight: 100;
  }
  .project_title {
    font-size: 1.6rem;
    font-weight: 300;
    margin-top: 50px;
  }
  .project_link {
    margin: 0 10px;
    text-decoration: underline;
    color: #8f8f8f;
  }
  .project_works {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact_row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 1.2rem;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    .contact_content {
      width: 250px;
      display: flex;
      margin: 0 20px;
      align-items: center;
      height: fit-content;
      @media screen and (max-width: 600px) {
        margin: 20px 20px;
      }
    }
    img {
      margin-right: 10px;
    }
  }
`;
