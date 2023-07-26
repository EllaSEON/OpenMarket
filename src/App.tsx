import { GlobalStyle } from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Router from "./Router/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "./components/common/Loading/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
