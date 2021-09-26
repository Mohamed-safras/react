import React, { useState } from "react";

const CartItem = () => {
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => {
    setCount((count) => count-1);
    
  };

  return (
    <div className="item">
      <button className="cartTitle">Add Items</button>
      <p className="count">{count}</p>
      <button className="btns" onClick={decrease}>
        -
      </button>
      <button
        className="btns"
        onClick={() => {
          setCount(1);
        }}
      >
        Reset
      </button>
      <button className="btns" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default CartItem;
