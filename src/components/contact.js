import React from "react";
import Contactform from "./form";

const Contact = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
        <Contactform />
        <div className=" w-full max-w-md  px-8 pt-6 pb-8 mb-4 ">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Contact details
          </h1>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h1>
          <p className="mb-6">03-4567-8901 ,03-2345-6789</p>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">Location</h1>
          <p>〒160-0022 東京都新宿区新宿3丁目12-1</p>
          <p className="mb-6" >3-12-1 Shinjuku, Shinjuku-ku, Tokyo 160-0022</p>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Business hours
          </h1>
          <p className="mb-6">Monday to Friday: 9:00 AM ~ 6:00 PM <br/>
            Saturday and Sunday: Closed</p>
        </div>
    </div>
  );
};

export default Contact;
