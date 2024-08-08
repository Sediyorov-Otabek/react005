import React, { useState } from "react";
import logo from "../../assets/Ресурс 1 1.png";
import "./Header.scss";
import { TfiAlignJustify } from "react-icons/tfi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full bg-slate-300 mb-20">
      <nav className="container flex items-center justify-between py-5 relative ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className={`nav__collection ${isMenuOpen ? "show" : ""}`}>
          <ul className=" nav__collect   flex items-center justify-center gap-4">
            <li>
              <a href="">Каталог </a>
            </li>
            <li>
              <a href=""> Доставка </a>
            </li>
            <li>
              <a href=""> Условия </a>
            </li>
            <li>
              <a href=""> Контакты</a>
            </li>
          </ul>
        </div>
        <div className="flex  call items-center flex-col justify-center ">
          <div className="flex items-center">
            <p>+ 375 736 463 64 72 / </p>
            <p> + 375 736 463 64 72 </p>
          </div>
          <p className="text-gray-500 text-end">Заказать звонок</p>
        </div>
        <div className="menu" onClick={toggleMenu}>
          <TfiAlignJustify />
        </div>
      </nav>
    </header>
  );
};

export default Header;
