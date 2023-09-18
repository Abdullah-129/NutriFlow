/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import fruit from "../Assets/fruit.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content flex-col lg:flex-row">
        <img src={fruit} className=" max-w-{20px} rounded-lg shadow-2xl" alt="Fruit" />
          <div>
            <h1 className="text-5xl font-bold">Get Your Diet!</h1>
            <p className="py-6">
              Unlock your personalized diet plan today by simply entering your
              essential details—age, gender, and weight. Tailored to your unique
              needs, our expertly crafted diet plan will help you achieve your
              health and fitness goals efficiently and effectively. Take the
              first step towards a healthier you by providing us with the
              information we need to create a plan that's perfect for you.
            </p>
            <Link to="/Diet" >
            <button className="btn bg-green-300">Get Diet Plan</button>
            </Link>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Hero;
