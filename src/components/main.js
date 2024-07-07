import React from "react";
import main from "../images/main.jpg";

function Main() {
  return (
    <div
      className="relative flex justify-center items-center  h-screen sm:h-screen  "
      style={{
        backgroundImage: `url(${main})`, // Use the imported image
        backgroundSize: "cover",
        height: "700px",
      }}
    >
      {/* Opacity overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>
      {/* Content */}
      <div className="relative z-10">
        <div className=" mt-[50px]   text-center">
          <h1 className=" font-bold text-white" style={{ fontSize: "85px" }}>
            Online Quran Classes
          </h1>
          <h3
            className="  text-yellow-400 mt-[5px] font-semi-bold  "
            style={{ fontSize: "20px" }}
          >
            E-Quran Online Academy offers you Quran Nazra, Hifz, & Qaida Classes
            with Tajweed for Men, Women & Kids.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Main;
