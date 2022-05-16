import React from "react";
import doctorSmall from "../../assets/images/doctor-small.png";
import appiontment from "../../assets/images/appointment.png";
const Doctor = () => {
  return (
    <div className="mt-24">
      <div class={`hero`}>
        <div
          style={{ backgroundImage: `url(${appiontment})` }}
          class={`hero-content  flex-col lg:flex-row `}
        >
          <img src={doctorSmall} class="max-w-lg mt-[-110px]" />
          <div>
            <h1 class="text-1xl text-primary font-bold">Appointment</h1>
            <p className="text-2xl">Make an appointment Today</p>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
