import React from "react";
import ServiceDetails from "./ServiceDetails";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
const Service = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-primary text-1xl">Oue Services</p>
        <p className="text-2xl"> Services We Provide</p>
      </div>
      <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-7">
        <ServiceDetails
          title="Fluoride Treatment"
          description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={fluoride}
        ></ServiceDetails>
        <ServiceDetails
          description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          title="Cavity Filling"
          img={cavity}
        ></ServiceDetails>
        <ServiceDetails
          title="Teeth Whitening"
          description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={whitening}
        ></ServiceDetails>
      </div>
    </div>
  );
};

export default Service;
