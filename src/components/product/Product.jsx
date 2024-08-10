import React, { useState, useEffect } from "react";
import "./Product.scss";
import savat from "../../assets/Group 95.png";
import axios from "axios";
// import { useEffect, useState } from "react";
const API_URL = "https://dummyjson.com";

const Product = () => {
  const [products, setproduct] = useState(null);
  const [offset, setoffset] = useState(0);
  const [categories, setcategories] = useState(null);
  const [offsetsy, setoffsetsy] = useState(1);
  const [loading, setloding] = useState(false);
  const [total, settottal] = useState(0);
  const [sellect, setSellect] = useState("");
  const handleClick = () => setoffset(offset + 1);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/category-list`)
      .then((res) => setcategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(categories);
  useEffect(() => {
    setloding(true);
    axios
      .get(`${API_URL}/products${sellect}`, {
        params: {
          limit: 6 * offsetsy,
        },
      })
      .then((res) => {
        settottal(res.data.total),
          setproduct(
            res.data.products.map((produc) => ({ ...produc, count: 0 }))
          );
      })
      .catch((err) => console.log(err))
      .finally(() => setloding(false));
  }, [offsetsy, sellect]);
  console.log(products);
  const addToCartHandler = (id, positive = true) => {
    setproduct((prev) => {
      const newArr = prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: positive ? item.count + 1 : item.count - 1 };
        } else {
          return item;
        }
      });
      return newArr;
    });
  };
  const productItem = products?.map((product) => (
    <div
      key={product.id}
      className="productCard pb-5 w-72  flex flex-col items-start justify-center p-3"
    >
      <div
        className="imge__product w-56
      h-56 flex flex-col items-center m-auto "
      >
        <img className="object-contain h-56" src={product.images[0]} alt="" />
      </div>
      <p className="text-red-600 font-extrabold">12%</p>
      <b className="textt">{product.title}</b>
      <b className=" ff text-2xl">{product.price}$</b>
      <del className="ff text-start">7 763,23 Br</del>
      <div className="div__num flex items-center justify-center gap-2">
        <button
          className=" w-4 h-4 p-2 pb-3 rounded-md border flex items-center justify-center"
          disabled={product.count <= 0}
          onClick={() => addToCartHandler(product.id, false)}
        >
          -
        </button>
        <p className=" w-3 h-3  flex items-center justify-center">
          {product.count}
        </p>
        <button
          className=" w-4 h-4 border p-2 pb-3 rounded-md flex items-center justify-center"
          onClick={() => addToCartHandler(product.id)}
        >
          +
        </button>
      </div>
      <div className="product__savat">
        <img src={savat} alt="" />
      </div>
    </div>
  ));
  const categoryItem = categories?.map((category) => (
    <strong
      onClick={(e) => setSellect(`/category/${e.target.textContent}`)}
      key={category}
      href=""
    >
      {" "}
      <i
        // velue={`/category/${category}`}
        className="whitespace-nowrap border shadow-md p-2 cursor-pointer rounded-md"
      >
        {category}
      </i>
    </strong>
  ));
  const load = (
    <div class="spinner">
      <div class="spinnerin"></div>
    </div>
  );
  return (
    <div className="container ">
      <div className="flex gap-2 overflow-x-auto py-6 scroll-hide">
        {categoryItem}
      </div>
      <div className="container flex items-center justify-center gap-5 flex-wrap">
        {productItem}
        {loading && load}
      </div>
      {6 * offsetsy <= total ? (
        <button
          className="border py-2 px-6 rounded-md block mx-auto mt-6 hover:bg-orange-500 transition-all"
          onClick={() => setoffsetsy((p) => p + 1)}
        >
          {" "}
          See More
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;
