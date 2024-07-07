import React from "react";
import pic from "../images/teacher.jpg";

function OurBenefits() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" lg:mt-20 p-6  sm:text-center">
        <h2 className="font-bold text-4xl leading-normal">
          Our Experienced Quran Teachers  will Guide You in Every Step of
          
          Your Learning.
        </h2>
        <p className="mt-8 leading-8 text-xl">
          Our trained teachers are committed to assist you as you learn the
          Quran. They'll walk beside you, explaining things clearly and
           with everything you're learning.
        </p>
      </div>
      <div className="order-2  lg:mt-8 lg:ml-20 sm:ml-28 sm:mb-8 p-12">
        <img
          src={pic}
          className="rounded"
          style={{ width: "100%", maxWidth: "650px", height: "auto" }}
          alt="Quran teacher"
        />
      </div>
    </div>
  );
}

export default OurBenefits;
