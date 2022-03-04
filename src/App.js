import React, { useRef } from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import { MainContainer } from "./App.style";

function App() {
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const onIntroClick = () => {
    introRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onProjectClick = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <MainContainer>
      <div ref={introRef}></div>
      <Header
        onIntroClick={onIntroClick}
        onSkillsClick={onSkillsClick}
        onProjectClick={onProjectClick}
        onContactClick={onContactClick}
      />
      <Body ref={{ skillsRef, projectRef }} />
      <Footer />
      <div ref={contactRef}></div>
    </MainContainer>
  );
}

export default App;
