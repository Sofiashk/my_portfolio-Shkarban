import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutMe from "./pages/AboutMe";
import MyCity from "./pages/MyCity";
import MyFuture from "./pages/MyFuture";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />

        <Route path="/about" element={<AboutMe />} />

        <Route path="/my-city" element={<MyCity />} />

        <Route path="/my-future" element={<MyFuture />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;