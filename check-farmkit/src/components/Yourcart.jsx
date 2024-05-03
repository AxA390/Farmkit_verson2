import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import appleimg from "../Images/fresh-apple.jpg";

export default function YourCart() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", price: 10, image: appleimg },
    { id: 2, name: "Apple", price: 200, image: appleimg },
    { id: 3, name: "Apple", price: 40, image: appleimg },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalAmount = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="w-screen h-screen ">
      <div className="flex justify-center text-3xl font-bold">
        <h1 className="flex items-center mt-[32px]">
          <MdShoppingCart className="mr-2" />
          <span>Your Cart</span>
        </h1>
      </div>

      {items.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <h1 className="text-2xl">Your cart is empty.</h1>
        </div>
      ) : (
        <div>
          {items.map((item) => (
            <div
              className="main flex justify-center items-center mt-[20px]"
              key={item.id}
            >
              <div className="item w-[900px] h-[110px] bg-[#D9D9D9] flex justify-between items-center">
                <div className="image" style={{ margin: "4px 0 4px 4px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[100px] w-[100px] object-cover"
                  />
                </div>
                <div className="item-name">
                  <h1 className="text-3xl font-bold">{item.name}</h1>
                </div>
                <div className="price" style={{ marginRight: "30px" }}>
                  <div className="font-bold mb-[10px]">Rs {item.price}</div>
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none font-semibold underline"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center mt-4">
            <div className="text-xl font-bold">
              Total Amount: Rs {totalAmount}
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}