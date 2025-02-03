import React from "react";
import Counter from "./counter";
const Card = (props) => {
  const star = "../../images/Rstar.png";

  return (
    <div className="w-44 text-sm rounded shadow-2xl overflow-hidden">
      <div className="w-full h-32">
        <img
          src={props.srcpic}
            className="w-full rounded-t-md h-full object-cover"
          alt=""
        />
      </div>
      <div className="p-3">
          <div className="flex items-center mb-1 w-5 h-5">
            <img src={star} alt="" />
            <span>4.6/5</span>
          </div>
          <h1>{props.type}</h1>
          <p className="mb-2">{`Price: $${props.price} per cup`}</p>
          <Counter />
      </div>
    </div>
  );
};
export default Card;
