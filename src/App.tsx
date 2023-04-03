import { GlobalStyle } from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Router from "./Router/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
