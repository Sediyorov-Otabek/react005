import React, { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginimg from "../../assets/login.jpg";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container w-full flex justify-center items-center">
      <div>
        <img src={loginimg} alt="" />
      </div>
      <div className="flex items-center mt-5 rounded-md p-2 shadow shadow-yellow-300 border justify-center  gap-6 flex-col ">
        <b>Личный кабинет</b>
        <form className="flex items-center bg-indigo-200 justify-center flex-col p-5 rounded-3xl shadow-md gap-4">
          <input
            className="shadow-md border-spacing-1 rounded-3xl p-2 w-60"
            type="text"
            placeholder="Email"
            // value={email}
            // onChange={}
          />
          <input
            className="shadow-md border-spacing-1 rounded-3xl p-2 w-60"
            type="password"
            required
            placeholder="Пароль"
            // value={password}
            // onChange={}
          />
          <NavLink to={"/admin"}>
            <button
              type="submit"
              required
              className="btn hover:bg-orange-500  hover:shadow-gray-700 transition-all hover:text-yellow-300 w-60 rounded-3xl border p-2"
              onClick={() => navigate("/admin")}
            >
              Сохранить
            </button>
          </NavLink>
          <button
            className="hover:bg-orange-500 transition-all hover:text-yellow-300 w-60 rounded-3xl border p-2"
            onClick={() => navigate("/")}
          >
            Выход
          </button>
        </form>
        <b>Мы в социальных сетях!</b>
      </div>
    </div>
  );
};

export default memo(Login);
