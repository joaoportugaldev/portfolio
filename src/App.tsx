import { ThemeProvider } from "styled-components";
import Page from "./layout/Page";
import Theme from "./Theme";
import GlobalStyle from "./global";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Page>
        <Home />
        <About />
        <Skills />
        <Experiences />
      </Page>
    </ThemeProvider>
  );
}

export default App;
