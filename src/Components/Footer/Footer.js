import React from "react";
import { FooterContainer } from "./Footer.style";

function Footer() {
  return (
    <FooterContainer>
      <a href="https://github.com/choigicheol" target="_blank">
        <img src="./github.png" alt="github"></img>
      </a>
      <a href="https://kofpo.tistory.com/" target="_blank">
        <img src="./tstory.png" alt="tstory"></img>
      </a>
    </FooterContainer>
  );
}

export default Footer;
