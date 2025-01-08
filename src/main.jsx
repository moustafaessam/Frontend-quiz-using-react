import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/Global Styling/index.css";
import App from "./components/Global Components/App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>
);
