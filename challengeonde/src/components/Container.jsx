import React from "react";
import mainImg from "../assets/image-product-desktop.jpg";
import mobileImg from "../assets/image-product-mobile.jpg";
import Button from "../constants/Button";

const Container = () => {
  return (
    <div className="wrapper bg-white rounded-xl shadow-lg flex flex-col sm:flex sm:flex-row">
      <div className="image-container">
        <img
          className="hidden sm:flex w-[330px] h-[100%] object-cover rounded-l-xl"
          src={mainImg}
          alt="main-image"
        />
        <img
          className="sm:hidden w-[100%] h-[100%] object-cover rounded-t-xl block"
          src={mobileImg}
          alt="main-image"
        />
      </div>
      <div className="text-container p-8">
        <p className="text-darkGrayishBlue uppercase tracking-[6px] text-sm">
          Perfume
        </p>

        <h1 className="hidden sm:flex text-4xl leading-10 my-5">
          Gabrielle <br />
          Essence Eau <br />
          De Parfum
        </h1>

        <h1 className="text-4xl leading-10 my-5 sm:hidden">
          Gabrielle 
          Essence Eau
          De Parfum
        </h1>

        <p className="text-darkGrayishBlue mb-5">
          A floral, solar and voluptuous <br />
          interpretation composed by <br />
          Olivier Polge, Perfurmer-Creator <br />
          for the House of CHANEL.
        </p>

        <span className="price text-4xl sm:text-3xl text-darkCyan">$149.99</span>
        <span className="line-through text-darkGrayishBlue relative bottom-1 left-6">
          $169.99
        </span>
        <Button />
      </div>
    </div>
  );
};

export default Container;
