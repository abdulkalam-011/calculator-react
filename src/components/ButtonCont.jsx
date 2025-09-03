import React from "react";

const ButtonCont = ({handleKey}) => {
  const buttonNames = [
    "c",
    "+",
    "-",
    "*",
    "1",
    "2",
    "3",
    "/",
    "4",
    "5",
    "6",
    "%",
    "7",
    "8",
    "9",
    ".",
    "0",
    "="
  ];
  return (
    <>
      <div className="grid grid-cols-4 gap-3 w-[100%]   mx-auto p-4 rounded-lg">
        {buttonNames.map((names,idx) => (
          <button key={idx} onClick={()=>handleKey(names)} className=" bg-blue-300 w-[60px] shadow-md h-[60px] hover:bg-blue-700 uppercase font-bold py-2 px-4 rounded text-center flex justify-center items-center">
      {names}
    </button>
        ))}
      </div>
    </>
  );
};

export default ButtonCont;
