import React from "react";
import chair from "../assets/images/chair.png";
import appiontment from "../../src/assets/images/appointment.png";
const Banner = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${appiontment})` }}
        class="hero min-h-screen   "
      >
        <div
          class={`hero-content justify-around flex-col lg:flex-row-reverse `}
        >
          <div className="w-50">
            <img src={chair} class="" />
          </div>
          <div className="">
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button class="btn  bg-gradient-to-r from-primary to-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
