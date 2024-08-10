import React from "react";
import footerlogo from "../../assets/Слой 2 (2).png";
import footerinsta from "../../assets/instagram (1) 1.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="w-full mt-12  bg-slate-200 p-5">
      <div className="container  ">
        <div>
          <img src={footerlogo} alt="" />
        </div>
        <div className="footer__wrap w-full flex items-center justify-between gap-5  md:max-lg:flex-wrap   ">
          <ul className="footer__collection flex md items-start justify-start flex-col w-96">
            <b>Информация</b>
            <li className="footer__item">
              Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.
            </li>
            <li className="footer__item">
              УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом
              реестре 158299
            </li>
            <li className="footer__item">
              <a href="">Политика конфиденциальности</a>
            </li>
          </ul>
          <ul className="footer__collection">
            <b>Меню</b>
            <li className="footer__item">
              <a href="">Главная | Каталог | Товары в наличии</a>
            </li>
            <li className="footer__item">
              <a href="">Скидки | Популярное | Вдохновение</a>
            </li>
            <li className="footer__item">
              <a href="">Доставка | Услуги | Условия</a>
            </li>
            <li className="footer__item">
              <a href="">Контакты | Вставить | Cписок покупок</a>
            </li>
            <li className="footer__item">
              <a href="">Корзина | Личный кабинет | Избранное</a>
            </li>
          </ul>
          <ul className="footer__collection">
            <b>Контакты</b>
            <li className="footer__item">г.Минск</li>
            <li className="footer__item">
              г.Минск Ул. Первомайская, Д. 1, Кв. 43 84
            </li>
            <li className="footer__item">+ 375 448 473 09 48</li>
            <li className="footer__item">ikeaekspress@gmail.com</li>
          </ul>
          <ul className="footer__collection">
            <div>
              <img src={footerinsta} alt="" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
