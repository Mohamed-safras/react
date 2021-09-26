import React, { useState } from "react";
import "./Cart.css";
const Cart = () => {
  const [products] = useState([
    {
      name: "horlicks",
      price: "5.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSLVp5bm_8W3SjA9KLCUdGxVECT1C6lAdqw&usqp=CAU",
    },
    {
      name: "Amla",
      price: "3.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oPBxOkrUc0JQkBt0zBHonHugQ5cO2XU4lQ&usqp=CAU",
    },
    {
      name: "Simple",
      price: "4.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLsvOdBwWW4BJEBz5xXndBbbqfu1GDdoIew&usqp=CAU",
    },
    {
      name: "horlicks",
      price: "5.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSLVp5bm_8W3SjA9KLCUdGxVECT1C6lAdqw&usqp=CAU",
    },
    {
      name: "Amla",
      price: "3.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oPBxOkrUc0JQkBt0zBHonHugQ5cO2XU4lQ&usqp=CAU",
    },
    {
      name: "Simple",
      price: "4.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLsvOdBwWW4BJEBz5xXndBbbqfu1GDdoIew&usqp=CAU",
    },
    {
      name: "horlicks",
      price: "5.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSLVp5bm_8W3SjA9KLCUdGxVECT1C6lAdqw&usqp=CAU",
    },
    {
      name: "Amla",
      price: "3.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oPBxOkrUc0JQkBt0zBHonHugQ5cO2XU4lQ&usqp=CAU",
    },
    {
      name: "Simple",
      price: "4.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLsvOdBwWW4BJEBz5xXndBbbqfu1GDdoIew&usqp=CAU",
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div className="productContiner">
      <h3 className="products">product({cart.length})</h3>
      <div className="productList">
        {products.map((product, index) => {
          return (
            <div className="name" key={index}>
              <p className="pName">{product.name}</p>
              <p>${product.price}</p>
              <img className="image" src={product.image} />
              <button onClick={addToCart} className="btns">
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
