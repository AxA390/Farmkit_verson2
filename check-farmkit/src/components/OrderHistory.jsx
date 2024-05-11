import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaHistory } from "react-icons/fa";

const OrderHistory = () => {
  const orders = [
    { id: 1, productName: "Apple", quantity: 2, price: "$1.50" },
    { id: 2, productName: "Orange", quantity: 3, price: "$2.00" },
    { id: 3, productName: "Orange", quantity: 3, price: "$2.00" },
    { id: 4, productName: "Orange", quantity: 3, price: "$2.00" },
    { id: 5, productName: "Banana", quantity: 2, price: "$1.20" },
    { id: 6, productName: "Grapes", quantity: 1, price: "$3.00" },
    { id: 7, productName: "Grapes", quantity: 1, price: "$3.00" },
    { id: 8, productName: "Grapes", quantity: 1, price: "$3.00" },
    { id: 8, productName: "Grapes", quantity: 1, price: "$3.00" },
    { id: 8, productName: "Grapes", quantity: 1, price: "$3.00" },
  ];

  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-700 mb-4 flex items-center">
        <FaHistory className="text-3xl mr-2" />
        Order History
      </h1>
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">S.n</th>
              <th className="px-6 py-3">Product Name</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody className="max-h-60 overflow-y-auto">
            {orders.map((order) => (
              <tr key={order.id} className="bg-white border-b">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.productName}</td>
                <td className="px-6 py-4">{order.quantity}</td>
                <td className="px-6 py-4">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center">
        <IoMdArrowBack className="mr-2" />
        Back
      </button>
    </div>
  );
};

export default OrderHistory;
