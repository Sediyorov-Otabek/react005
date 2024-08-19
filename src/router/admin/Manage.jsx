import React, { memo } from "react";
import img from "../../assets/22.jpg";

const Manage = () => {
  return (
    <div className="w-full bg-gray-100 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className=" object-cover  ">
          <img
            className="object-contain rounded-full  w-80 h-80"
            src={img}
            alt=""
          />
        </div>
        <b>Otabek Sediyorov</b>
        <p>
          tel: <i>99-750-13-41</i>
        </p>
      </div>
    </div>
  );
};

export default memo(Manage);
