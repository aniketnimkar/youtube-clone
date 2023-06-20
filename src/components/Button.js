import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-white rounded-md shadow-md hover:bg-slate-100 font-normal m-2 py-1 px-3 ">
        {name}
      </button>
    </div>
  );
};

export default Button;
