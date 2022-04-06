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
      <div id="header_menu">
        <span onClick={() => onIntroClick()}>INTRO</span>
        <span onClick={() => onSkillsClick()}>SKILLS</span>
        <span onClick={() => onProjectClick()}>PROJECTS</span>
        <span onClick={() => onContactClick()}>CONTACT</span>
        <a
          href="https://bramble-option-cd7.notion.site/370c8a371b014f1e8613e8cfd822a874"
          target="_blank"
        >
          <span>CV</span>
        </a>
      </div>
    </HeaderContainer>
  );
}

export default Header;
