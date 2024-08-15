import React from "react";
import img from "../../assets/ummon.jpg";

const Ummon = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <img src={img} alt="" />
      </div>
      <b>Ummon</b>
      <p>sen bo'lmasang boshqasi sochimdan ko'p oshig'im</p>
    </div>
  );
};

export default Ummon;
