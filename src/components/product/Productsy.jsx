import React, { memo } from "react";
import { Link } from "react-router-dom";
import savat from "../../assets/Group 95.png";

const Productsy = (products) => {
  console.log(products);
  // const productItem = products?.map((product) => (
  //   <div
  //     key={product.id}
  //     className="productCard pb-5 w-72 shadow-md  flex flex-col items-start justify-center p-3"
  //   >
  //     <div
  //       className="imge__product w-56
  //     h-56 flex flex-col items-center m-auto "
  //     >
  //       <Link to={`/category/${product.id}`}>
  //         <img className="object-contain h-56" src={product.images[0]} alt="" />
  //       </Link>
  //     </div>
  //     <p className="text-red-600 font-extrabold">12%</p>
  //     <b className="textt">{product.title}</b>
  //     <b className=" ff text-2xl">{product.price}$</b>
  //     <del className="ff text-start">7 763,23 Br</del>
  //     <div className="div__num flex items-center justify-center gap-2">
  //       <button
  //         className=" w-4 h-4 p-2 pb-3 rounded-md border flex items-center justify-center"
  //         disabled={product.count <= 0}
  //         onClick={() => addToCartHandler(product.id, false)}
  //       >
  //         -
  //       </button>
  //       <p className=" w-3 h-3  flex items-center justify-center">
  //         {product.count}
  //       </p>
  //       <button
  //         className=" w-4 h-4 border p-2 pb-3 rounded-md flex items-center justify-center"
  //         onClick={() => addToCartHandler(product.id)}
  //       >
  //         +
  //       </button>
  //     </div>
  //     <div className="product__savat">
  //       <img src={savat} alt="" />
  //     </div>
  //   </div>
  // ));
  return (
    <div className="container flex items-center justify-center gap-5 flex-wrap">
      {/* {productItem} */}
    </div>
  );
};

export default memo(Productsy);
