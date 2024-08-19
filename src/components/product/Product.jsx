import React, { useState, useEffect, memo } from "react";
import "./Product.scss";
import savat from "../../assets/Group 95.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Productsy from "./Productsy";
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

  const categoryItem = categories?.map((category) => (
    <div
      onClick={(e) => setSellect(`/category/${e.target.textContent}`)}
      key={category}
      href=""
    >
      {" "}
      <p
        // velue={`/category/${category}`}
        className="whitespace-nowrap border shadow-md p-2 cursor-pointer rounded-md"
      >
        {category}
      </p>
    </div>
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
      <Productsy products={products} />
      {6 * offsetsy <= total ? (
        <button
          className="border py-2 px-6 flex items-center flex-col rounded-md  mx-auto mt-6 hover:bg-orange-500 transition-all"
          onClick={() => setoffsetsy((p) => p + 1)}
        >
          {" "}
          <div className="w-full items-center justify-center">
            {loading && load}
          </div>
          See More
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(Product);
