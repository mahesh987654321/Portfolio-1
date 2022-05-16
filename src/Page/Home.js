import React from "react";
import Banner from "./Banner";
import Contact from "./Contact/Contact";
import Doctor from "./Doctor/Doctor";
import Exceptional from "./Exceptional/Exceptional";
import Footer from "./Footer/Footer";

import Info from "./Info/Info";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";
import TestimonialDetails from "./Testimonial/TestimonialDetails";

const Home = () => {
  return (
    <>
      <div className="px-12">
        <Banner></Banner>
        <Info></Info>
        <Service></Service>
        <Exceptional></Exceptional>
      </div>
      <div>
        <Doctor></Doctor>
        <TestimonialDetails></TestimonialDetails>
      </div>
      <div className="">
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
