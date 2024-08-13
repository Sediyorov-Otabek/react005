import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Каталог from "./router/katalog/Каталог";
import Home from "./router/home/Home";
import Доставка from "./router/доставка/Доставка";
import Call from "./router/call/Call";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Каталог />} />
        <Route path="/доставка" element={<Доставка />} />
        <Route path="/call" element={<Call />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
