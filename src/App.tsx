import { GlobalStyle } from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button size="lg">버튼</Button>
        <Button color="darkGray" size="md">
          버튼
        </Button>
        <Button color="darkGray" size="s">
          바로 구매
        </Button>
        <Button size="ms">장바구니</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
