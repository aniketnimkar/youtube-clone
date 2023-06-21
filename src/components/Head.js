import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";
import { AiOutlineSearch } from "react-icons/ai";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
        <div className="flex gap-3 px-2 items-center justify-start basis-1/2">
          <div
            className="flex bg-gray-100 border rounded-full w-full gap-3 jusitfy-center pr-2"
            style={{ position: "relative" }}
          >
            <input
              placeholder="Search"
              className="px-5 py-2 rounded rounded-l-full w-11/12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div
              className="bg-white drop-shadow-lg rounded-lg"
              style={{ minWidth: "490px", position: "absolute", top: "43px" }}
            >
              {suggestions?.map((suggestion) => {
                return (
                  <div className="px-6 py-2 flex gap-3 items-center">
                    <AiOutlineSearch size={18} />
                    <h1>{suggestion}</h1>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <AiOutlineSearch size={22} />
            </div>
          </div>
          {showSuggestions && (
            <div className="relative top-[3.5rem] right-12  bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <img
            className="h-8 flex justify-center relative left-5"
            src="https://e7.pngegg.com/pngimages/135/8/png-clipart-microphone-computer-icons-microphone-electronics-microphone-thumbnail.png"
            alt="user-icon"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Head;
