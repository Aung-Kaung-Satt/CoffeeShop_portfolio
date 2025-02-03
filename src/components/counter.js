import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleReset = () => setCount(0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setCount(value);
    }
  };
  return (
    <div>
      <div className="flex items-center rounded-full overflow-hidden justify-center mb-2 h-5/6">
        <button className="w-1/3 border bg-gray-400" onClick={handleDecrement}>
          -
        </button>
        {/* <span className="w-1/3 border text-center bg-white">{count}</span> */}
        <input
          type="text"
          className="w-1/3 text-center bg-white"
          value={count}
          onChange={handleInputChange}
        />
        <button className="w-1/3 border bg-gray-400" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="bg-[#894D47] text-center w-full h-8 rounded-full">
        Add to cart
      </button>
    </div>
  );
};

export default Counter;
