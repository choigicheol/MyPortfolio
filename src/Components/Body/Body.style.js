import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  background-color: #f8fcff;
  .blank_area {
    width: 100%;
    height: 65px;
    background-color: #ffffff;
  }
  .background_skyblue {
    background-color: #f8fcff;
  }
  .background_white {
    background-color: #ffffff;
  }
`;

export const IntroBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 97vh;
    /* height: 435px; */
    font-size: 1.5rem;
    font-weight: 300;
  }
  #header_img_container {
    position: relative;
    width: 100%;
    height: 450px;
  }
  img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  #Header_img_background {
    width: 100%;
    height: 450px;
    opacity: 0.3;
    background-color: #d8d4cc;
    position: absolute;
    z-index: 2;
  }
  .intro_content{
    width: 100%;
    text-align: center;
    div{
      padding : 5px 0;
    }
  }
  `;

export const SubTitle = styled.div`
  /* margin-top: 450px; */
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
  /* max-width: 1280px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 97vh;
  background-color: #ffffff;
  /* padding-bottom: 65px; */
  #skills_container {
    max-width: 1080px;
    width: 100%;
    display: grid;
    grid-row-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    justify-items: center;
    margin-top: 50px;
    .skill_box {
      border: 1px solid #2d2d2d;
      height: fit-content;
      .skill_title {
        text-align: center;
        font-size: 2rem;
        font-weight: 300;
        padding: 20px 0;
        border-bottom: 1px dashed #2d2d2d;
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
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 80px;
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
    margin-top: 40px;
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
