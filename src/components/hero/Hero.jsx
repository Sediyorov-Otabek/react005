import React from "react";
import heroimg from "../../assets/image 34.png";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="container tttt flex items-center justify-between gap-3 ">
      <div className="hero__desc  shadow-md p-3 m-auto mb-12 flex  justify-center flex-col">
        <b className="text-5xl">Мебель на любой вкус!</b>
        <div>
          <p>Худи, чашки для горячего чая и термосы</p>
          <p>Eлочные игрушки, брелочки </p>
          <p>Начало списка вещей, которые можно</p>
        </div>
        <div className="flex gap-1 flex-col w-full items-center justify-center">
          <button>Перейти в каталог</button>
          <button>Внести список артикулов</button>
        </div>
      </div>
      <div className="hero__img flex m-auto justify-end">
        <img className="img" src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
