import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import BreakProvider from "./context/Break/BreakProvider";
import SessionProvider from "./context/Session/SessionProvider";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <BreakProvider>
      <SessionProvider>
        <App />
      </SessionProvider>
    </BreakProvider>
  </ChakraProvider>
);
