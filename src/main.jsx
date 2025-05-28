import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider as ChakraProvider } from "./components/ui/provider";
import { Provider } from "react-redux";
import store from "./components/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
