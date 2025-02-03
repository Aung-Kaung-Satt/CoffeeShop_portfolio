import React from "react";

const Slide = (props) => {
  return (
        <div className="flex items-center justify-between bg-[#E6D5CB] w-full h-full">
          <div className="w-2/3 p-14">
            <h1 className="mb-4 text-5xl  text-[#894D47] leading-normal">{props.coffeeMenu.type}</h1>
            <p>
              Conveniently foster stand-alone e-business without ubiquitous
              convergence. Objectively initiate premier content with optimal
              architectures. Intrinsicly redefine cross-platform e-services whereas
              prospective services. Credibly.
            </p>
          </div>
          <div className=" w-2/5 h-full overflow-hidden rounded-md bg-white">
          <img
            src={props.coffeeMenu.srcpic}
            alt={props.coffeeMenu.type}
            className="w-full h-full object-cover"
          />
        </div>
        </div>
        
    
  );
};

export default Slide;
