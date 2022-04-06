import React, { forwardRef } from "react";
import {
  BodyContainer,
  IntroBox,
  SkillsBox,
  SubTitle,
  ProjectsBox,
  ContactBox,
} from "./Body.style";
import { skillsData, projectData } from "../../Data/Data";
import Project from "../Project/Project";

const Body = forwardRef((props, ref) => {
  return (
    <BodyContainer>
      <IntroBox>
        <div id="header_img_container">
          <div id="Header_img_background"></div>
          <img src="./justDoIt.png" alt="main_image" />
        </div>
        <SubTitle>
          <span>INTRO</span>
        </SubTitle>
        <p className="intro_content">
          <div>안녕하세요</div>
          <div>기능구현 알고리즘에 대해 고민하는것을 좋아하고</div>
          <div>사람들과 기술에 대한 대화를 나누며</div>
          <div>새로운것을 알아가는데 </div>
          <div>흥미를 느끼는 개발자입니다.</div>
        </p>
        <p className="intro_content">
          <div>코드스테이츠 SEB 31기 / 2021.06~2022.01</div>
          {/* <div>코드스테이츠 프론트엔드 심화반 / 2021.11 ~ 2022.01</div> */}
        </p>
      </IntroBox>
      <SkillsBox>
        <div
          className="blank_area background_skyblue"
          ref={ref.skillsRef}
        ></div>
        <SubTitle>
          <span>SKILLS</span>
        </SubTitle>
        <div id="skills_container">
          {skillsData.map((skill) => {
            return (
              <div className="skill_box">
                <div className="skill_title">
                  <span>{skill.name}</span>
                </div>
                <div className="skill_img">
                  <img src={skill.src} alt={skill.name} key={skill.name} />
                </div>
              </div>
            );
          })}
        </div>
      </SkillsBox>
      <ProjectsBox>
        <div className="blank_area" ref={ref.projectRef}></div>
        <SubTitle>
          <span>PROJECTS</span>
        </SubTitle>

        {projectData.map((project) => {
          return (
            <div id="project_container">
              <div className="project project_title">{project.title}</div>
              <Project slides={project.slider} />
              <div className="project project_content">{project.content}</div>
              <div className="project project_period">{project.period}</div>
              <div className="project">
                <a
                  className="project project_link"
                  href={project.distribution}
                  target="_blank"
                >
                  배포링크
                </a>
                <a
                  className="project project_link"
                  href={project.github}
                  target="_blank"
                >
                  깃헙
                </a>
                <a
                  className="project project_link"
                  href={project.planDoc}
                  target="_blank"
                >
                  기획서
                </a>
              </div>
              <div className="project project_skills">{project.skills}</div>
              <div className="project project_works_title project_title">
                담당업무
              </div>
              <div className="project_works">
                {project.work.map((work) => {
                  return <div className="project">{work}</div>;
                })}
              </div>
            </div>
          );
        })}
      </ProjectsBox>
      <ContactBox className="background_white">
        <SubTitle>
          <span>CONTACT</span>
        </SubTitle>
        <div>감사합니다 :)</div>
        <div className="contact_row">
          <a href="mailto:kofpo900916@gmail.com" className="contact_content">
            <img src="./mail.png" alt="mail"></img>
            <span>kofpo900916@gmail.com</span>
          </a>
          <a href="tel:010-5720-0572" className="contact_content">
            <img src="./phone.png" alt="phone"></img>
            <span>010-5720-0572</span>
          </a>
        </div>
      </ContactBox>
    </BodyContainer>
  );
});

export default Body;
