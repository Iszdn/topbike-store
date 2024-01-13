import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { BasketProvider } from "./context/BasketContext.jsx";
import WishlidtProvider from "./context/WishlistContext.jsx";
import AuthProvider from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <WishlidtProvider>
        {/* <AuthProvider> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </AuthProvider> */}
      </WishlidtProvider>
    </BasketProvider>
  </React.StrictMode>
);
