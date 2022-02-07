import Project from "./Components/Project/Project";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import { MainContainer } from "./App.style";

function App() {
  return (
    <MainContainer>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </MainContainer>
  );
}

export default App;
