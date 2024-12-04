import { ThemeProvider } from "styled-components";
import Page from "./layout/Page";
import Theme from "./Theme";
import GlobalStyle from "./global";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Page>
        <Home />
        <About />
        <Skills />
        <Experiences />
        <Projects />
      </Page>
    </ThemeProvider>
  );
}

export default App;
