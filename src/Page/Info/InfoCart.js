import React from "react";

const InfoCart = ({ img, cardTitle, description, bgClass }) => {
  return (
    <div>
      <div
        class={`card w-96  p-2 mx-auto  lg:card-side bg-accent ${bgClass} shadow-xl`}
      >
        <figure class="">
          <img src={img} alt="Shoes" class="" />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">{cardTitle}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCart;
