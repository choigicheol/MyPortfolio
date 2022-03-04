import React from "react";
import { HeaderContainer } from "./Header.style";

function Header({
  onIntroClick,
  onSkillsClick,
  onProjectClick,
  onContactClick,
}) {
  return (
    <HeaderContainer>
      <div id="Header_img_background"></div>
      <img src="./Header_Img.jpg" alt="main_image" />
      <div id="header_menu">
        <span onClick={() => onIntroClick()}>INTRO</span>
        <span onClick={() => onSkillsClick()}>SKILLS</span>
        <span onClick={() => onProjectClick()}>PROJECTS</span>
        <span onClick={() => onContactClick()}>CONTACT</span>
        <span>CV</span>
      </div>
    </HeaderContainer>
  );
}

export default Header;
