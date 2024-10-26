import { ThemeProvider } from "styled-components";
import Page from "./layout/Page";
import Theme from "./Theme";
import GlobalStyle from "./global";
import Home from "./components/Sections/Home";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Page>
        <Home />
      </Page>
    </ThemeProvider>
  );
}

export default App;
