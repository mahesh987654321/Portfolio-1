import React from "react";
import Testimonial from "./Testimonial";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";
const TestimonialDetails = () => {
  return (
    <div>
      <div
        style={{ width: "85%" }}
        className="flex mx-auto items-center justify-between px-18"
      >
        <div className="">
          <p>Testimonial</p>
          <p>What Our Patients Says</p>
        </div>
        <div>
          <img src={quote} className="w-24" alt="" />
        </div>
      </div>
      <div
        style={{ width: "85%", margin: "0px auto" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-7 mx-auto"
      >
        <Testimonial
          description="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          img={people1}
          name="Winson Herry"
          city="California"
        ></Testimonial>
        <Testimonial
          description="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          img={people2}
          name="Winson Herry"
          city="California"
        ></Testimonial>
        <Testimonial
          description="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          img={people3}
          name="Winson Herry"
          city="California"
        ></Testimonial>
      </div>
    </div>
  );
};

export default TestimonialDetails;
