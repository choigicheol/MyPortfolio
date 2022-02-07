import React from "react";
import { HeaderContainer } from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <img src="./Header_Img.jpg"></img>
      <span id="header_Menu">
        <span>INTRO</span>
        <span>SKILLS</span>
        <span>PROJECTS</span>
        <span>CONTACT</span>
        <span>CV</span>
      </span>
    </HeaderContainer>
  );
}

export default Header;
