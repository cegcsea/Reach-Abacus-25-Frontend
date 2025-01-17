import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/userContext";
import { LoaderProvider } from "./context/loaderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoaderProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </LoaderProvider>
  </React.StrictMode>
);
