import React from "react";
import InfoCart from "./InfoCart";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-10">
      <InfoCart
        bgClass="bg-gradient-to-r from-primary to-secondary"
        description="Lorem Ipsum is simply dummy "
        cardTitle="Opening House"
        img={clock}
      ></InfoCart>
      <InfoCart
        bgClass="bg-accent"
        description="Brooklyn, NY 10036, United States"
        cardTitle="Visit Our Location"
        img={marker}
      ></InfoCart>
      <InfoCart
        bgClass="bg-gradient-to-r from-primary to-secondary"
        description="+000 123 456789"
        cardTitle="Contact Us Now"
        img={phone}
      ></InfoCart>
    </div>
  );
};

export default Info;
