import React from "react";
import { BiCart } from "react-icons/bi";

const Button = () => {
  return (
    <div className="flex items-center justify-center bg-darkCyan rounded-md text-white p-4 transition-all cursor-pointer mt-5 hover:bg-veryDarkBlue sm:p-3">
      <BiCart className="w-[20px] h-[20px]"></BiCart>
      <p className="mx-3 sm:mx-2 font-bold">Add to Cart</p>
    </div>
  );
};

export default Button;
