import React, { memo, useEffect, useState } from "react";
import axios from "../../api/index";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import "./Detail.scss";
import { useParams } from "react-router-dom";
import img1 from "../../assets/Group 188.png";
import img2 from "../../assets/Frame 3.png";
import Productsy from "../../components/product/Productsy";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [products, setproduct] = useState([]);
  const [offset, setoffset] = useState(0);

  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (data?.category) {
      axios
        .get(`/products/category/${data.category}`, {
          params: { limit: 4 },
        })
        .then((res) => setproduct(res.data.products))
        .catch((err) => console.log(err));
    }
  }, [data]);

  const handleIncrease = () => {
    setoffset((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setoffset((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="container pt-5">
      <div className="katolog__nav flex items-center justify-between">
        <CiMenuFries />
        <form className="flex border items-center justify-center w-2/6 shadow-sm p-1 rounded-full">
          <input
            className="w-full"
            placeholder="Что желаете найти?"
            type="text"
          />
          <CiSearch />
        </form>
        <p className="text-base text-orange-400">Вставить список покупок</p>
        <div className="icons flex items-center justify-center gap-7">
          <IoStarOutline />
          <AiOutlineShoppingCart />
          <VscAccount />
        </div>
      </div>
      <div className="detail_wrap mt-10">
        <p>Товары Ванная Платяные шкафы</p>
        <hr />
        <div className="flex gap-11 mt-6">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <img src={data?.thumbnail} alt="" />
            <div className="flex items-center w-40 h-40 justify-center">
              {data?.images?.map((image, index) => (
                <img
                  key={index}
                  className="object-contain"
                  src={image}
                  alt={`Product Image ${index}`}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <b className="text-2xl">{data?.title}</b>
            <div className="flex items-center">
              <b className="text-xl">Арт. 890.321.44 / </b>
              <p className="text-gray-400">Под заказ на 4.04.2021</p>
            </div>
            <p className="text-gray-400">
              Банка с крышкой и поднос, 5 шт., стекло пробка банки и коробки
              помогут организовать удобное хранение.
            </p>
            <div className="flex items-center gap-14">
              <b>{data?.price} USD</b>
              <div className="flex items-center gap-8">
                <button
                  className="border w-7 rounded-md justify-center pl-2 pr-2 items-center flex"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <b>{offset}</b>
                <button
                  className="border rounded-md justify-center pl-2 pr-2 items-center flex w-7"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <button className="bg-orange-500 p-2 rounded-lg text-white pl-4 pr-4">
                Добаить в корзину +
              </button>
              <div className="flex items-center gap-2">
                <div>
                  <img src={img1} alt="Image 1" />
                </div>
                <div>
                  <img src={img2} alt="Image 2" />
                </div>
              </div>
            </div>
            <p className="text-gray-400">{data?.description}</p>
            <div className="flex flex-col gap-3">
              <hr />
              <b>{data?.warrantyInformation}</b>
              <hr />
              <b>{data?.brand}</b>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="cards w-full mt-9 justify-center items-center">
        <b>С этим товаром также заказывают</b>
        <div className="card_wrap mt-8 grid grid-row-4 items-center justify-center gap-3">
          <Productsy products={products} />
        </div>
      </div>
    </div>
  );
};

export default memo(Detail);
