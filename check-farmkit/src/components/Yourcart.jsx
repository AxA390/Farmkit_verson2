import React, { useState, useEffect } from "react";
import { MdShoppingCart } from "react-icons/md";
import appleimg from "../Images/fresh-apple.jpg";

export default function YourCart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await fetch("http://localhost:8000/api/cart");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    

    fetchCartItems();
  }, []);

  const removeItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/cart/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setItems(items.filter((item) => item.id !== id));
      } else {
        throw new Error("Failed to remove item from cart.");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const totalAmount = items.reduce((total, item) => total + item.price, 0);

  const handleBuy = async () => {
    try {
      // Collect necessary information for logging
      const userData = {
        username: "username",
        cartItems: items.map((item) => ({
          productName: item.product_name,
          quantity: 1, // Assuming quantity is always 1 for each item
          totalPrice: item.price,
        })),
        totalAmount: totalAmount,
      };

      console.log(userData);
  
      // Make a POST request to save cart data to the database
      const response = await fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      // Check if the request was successful
      if (response.ok) {
        console.log('Cart data saved successfully');
  
        // Make a DELETE request to clear cart items from the database
        const deleteResponse = await fetch('http://localhost:8000/api/cart', {
          method: 'DELETE',
        });
  
        // Check if the delete request was successful
        if (deleteResponse.ok) {
          console.log('Cart items deleted from the database successfully');
  
          // Clear the cart items from the frontend state
          setItems([]);
        } else {
          throw new Error('Failed to delete cart items from the database');
        }
      } else {
        throw new Error('Failed to save cart data');
      }
    } catch (error) {
      console.error('Error handling buy:', error);
    }
  };

  return (
    <div className="w-screen h-screen ">
      <div className="flex justify-center text-3xl font-bold">
        <h1 className="flex items-center mt-[32px]">
          <MdShoppingCart className="mr-2" />
          <span>Your Cart</span>
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <h1 className="text-2xl">Loading...</h1>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-full">
          <h1 className="text-2xl">Error fetching cart items.</h1>
        </div>
      ) : items.length === 0 ? (
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
                    src={appleimg}
                    alt={item.product_name}
                    className="h-[100px] w-[100px] object-cover"
                  />
                </div>
                <div className="item-name">
                  <h1 className="text-3xl font-bold">{item.product_name}</h1>
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
            <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleBuy}>
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
