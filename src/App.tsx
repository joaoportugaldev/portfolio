import { ThemeProvider } from "styled-components";
import Page from "./layout/Page";
import Theme from "./Theme";
import GlobalStyle from "./global";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Page>
        <Home />
        <About />
        <Skills />
      </Page>
    </ThemeProvider>
  );
}

export default App;
