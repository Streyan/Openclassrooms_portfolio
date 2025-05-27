import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import App from "./pages/Home/index.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
