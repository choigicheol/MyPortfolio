import React from "react";
import { BodyContainer, IntroBox, SkillsBox } from "./Body.style";

function Body() {
  return (
    <BodyContainer>
      <IntroBox>
        <div id="intro_Title">INTRO</div>
        <div className="intro_Content">안녕하세요</div>
        <div className="intro_Content">테스트용 텍스트입니다</div>
        <div className="intro_Content">이러저러한 사람의 개발자입니다.</div>
        <br />
        <div className="intro_Content">
          코드스테이츠 SEB 31기 / 2021.06~2021.11
        </div>
        <div className="intro_Content">
          코드스테이츠 프론트엔드 심화반 / 2021.11 ~ 2022.01
        </div>
      </IntroBox>
      <SkillsBox></SkillsBox>
    </BodyContainer>
  );
}

export default Body;
