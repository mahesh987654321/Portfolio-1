import React from "react";

const ServiceDetails = ({ img, title, description }) => {
  return (
    <div>
     
      <div class="card w-96 bg-base-100 mx-auto shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
