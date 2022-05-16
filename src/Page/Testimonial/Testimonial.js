import React from "react";
import quote from "../../assets/icons/quote.svg";
const Testimonial = ({ img, description, name, city }) => {
  return (
    <section className="">
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="">{description}</h2>
          </div>

          <div className="flex items-center">
            <div>
              <img className="w-20 pl-6" src={img} alt="Shoes" />
            </div>
            <div className="pl-10">
              <p className="text-1xl font-bold ">{name}</p>
              <p>{city}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
//
//
