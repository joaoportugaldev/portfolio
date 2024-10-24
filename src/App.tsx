import { ThemeProvider } from "styled-components";
import Pagina from "./layout/Page";
import Theme from "./Theme";
import GlobalStyle from "./global";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Pagina />
    </ThemeProvider>
  );
}

export default App;
