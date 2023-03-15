import { GlobalStyle } from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button color="green">버튼</Button>
        <Button color="lightGray">버튼</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
