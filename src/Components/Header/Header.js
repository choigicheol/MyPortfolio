import React from "react";
import { HeaderContainer } from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <div id="Header_Img_Background"></div>
      <img src="./Header_Img.jpg"></img>
      <div id="header_Menu">
        <span>INTRO</span>
        <span>SKILLS</span>
        <span>PROJECTS</span>
        <span>CONTACT</span>
        <span>CV</span>
      </div>
    </HeaderContainer>
  );
}

export default Header;
