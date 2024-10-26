import { ThemeProvider } from "styled-components";
import Page from "./layout/Page";
import Theme from "./Theme";
import GlobalStyle from "./global";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Page>
        <Home />
        <About />
      </Page>
    </ThemeProvider>
  );
}

export default App;
