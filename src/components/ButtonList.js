import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Live",
  "Cricket",
  "Soccer",
  "News",
  "Songs",
  "Valentines",
  "Tech",
  "Education",
  "Gifts",
  "Ninja",
  "UFC",
  "Comedy",
  "Cooking",
  "Bollywood_Music",
  "Soccer",
  "Mixes",
  "Kapil_Sharma",
  "React",
  "Algorithms",
  "Ponds",
  "Indian_cuisine",
  "Computer_Science",
];
const ButtonList = () => {
  return (
    <div className="flex flex-nowrap text-sm overflow-x-auto max-w-screen-xl ">
      {list.map((list, index) => {
        return <Button key={index} name={list} />;
      })}
    </div>
  );
};

export default ButtonList;
