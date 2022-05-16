import React from "react";
import appiontment from "../../assets/images/appointment.png";
const Contact = () => {
  return (
    <div
      style={{
        width: "85%",
        margin: "0px auto",
        backgroundImage: `url(${appiontment})`,
      }}
      className=""
    >
      <div className="text-center p-5 mt-20">
        <p className="text-primary">Contact Us</p>
        <p className="text-3xl text-white">Stay connected with us</p>
        <div className="mx-5 mt-5">
          {" "}
          <input
            type="text"
            placeholder="Type here"
            class="mb-6 input input-bordered input-accent w-full max-w-xs "
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-accent w-full max-w-xs mb-6"
          />{" "}
          <br />
          <textarea
            // style={{ width: "27%" }}
            class="textarea textarea-accent lg:w-80 sm:w-80"
            placeholder="Bio"
          ></textarea>
        </div>
        <div>
          <button class="btn btn-success mt-4">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
