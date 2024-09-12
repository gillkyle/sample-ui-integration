import { CssBaseline } from "@mui/material";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ui-foundations-theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
