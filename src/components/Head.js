import React from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../components/utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAQlBMVEX///8AAADMzMxiYmKWlpby8vKoqKja2tp/f3+jo6P4+Piurq7d3d1BQUEfHx9qamouLi4ZGRk0NDTFxcVPT09GRkaa5wOYAAAA5klEQVRoge3aWw6DMAwF0bjhFQqElnb/Wy07uHzEslTmbGAUARHgpAQAAADgDvqh5tbq0OvwuJuHfZQrfrmEzV5q1Z1T2KwT5bdb+S3Km1t5E+XqVq6ifLiVD1FOk1N4UuGUiku46PBpfLQmtxEAAACktAxda8NyoTv7vOvXWZZXl7DZV4WfTmGzpyh/3MofUY77loxbc9x1dru3VxVOc3YJZ/08n3tYab6HlSt7GAAAwO0tzf/pX3sNC5tjhM1u4uZVcTO6uG/JuFls3Pw5buYed87gXHVpfrQi53LhbAUAAACAP/ADqcsS7NaEpMkAAAAASUVORK5CYII="
          alt="menu"
        ></img>
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdB5idttrtpfZkhv3Dz20jvA14SXgOCOKQiBT6_tnEyagCBi91sEJMTU8X6eLxzb5dQ&usqp=CAU"
            alt="youtube-logo"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-10 flex justify-center relative left-[-35px]">
        <input
          type="text"
          className="border border-gray-400
         w-1/2 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 flex justify-center relative left-5"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Head;
