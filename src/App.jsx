import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Каталог from "./router/katalog/Каталог";
import Home from "./router/home/Home";
import Доставка from "./router/доставка/Доставка";
import Call from "./router/call/Call";
import NotFound from "./router/notFound/NotFound";
import Detail from "./router/detail/Detail";
import Admin from "./router/admin/Admin";
import Manage from "./router/admin/Manage";
import Login from "./router/login/Login";
import Ummon from "./router/admin/Ummon";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Каталог />} />
        <Route path="/доставка" element={<Доставка />} />
        <Route path="/call" element={<Call />} />
        <Route path="/category/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="manage" element={<Manage />}></Route>
          <Route path="ummon" element={<Ummon />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
