import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import {
  FaShoppingCart,
  FaAngleDown,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookMessenger,
} from "react-icons/fa";
import { Link } from "react-router-dom";

//Importing images from the specified path
import Trendimg from "../Images/Watermelon.png";
import apple from "../Images/fresh-apple.jpg";
import mango from "../Images/fresh-mango.jpg";
import strawberry from "../Images/fresh-strawberry.jpg";
import banana from "../Images/fresh-banana.jpg";
import grapes from "../Images/grapes.png";
import orange from "../Images/orange.png";

// Define an array of trending products with their IDs, names, and images
const trendingProducts = [{ id: 1, name: "Watermelon", image: Trendimg }];

// Define an array of food categories with their IDs, images, and alternative texts
const foodCategories = [
  { id: 1, image: apple, alt: "apple", link: "/apples" },
  { id: 2, image: banana, alt: "banana" },
  { id: 3, image: mango, alt: "mango" },
  { id: 4, image: mango, alt: "mango" },
  { id: 5, image: strawberry, alt: "strawberry" },
  { id: 6, image: strawberry, alt: "strawberry" },
  { id: 7, image: grapes, alt: "grapes" },
  { id: 7, image: grapes, alt: "grapes" },
  { id: 7, image: grapes, alt: "grapes" },
  { id: 7, image: grapes, alt: "grapes" },
  { id: 7, image: grapes, alt: "grapes" },
  { id: 7, image: grapes, alt: "grapes" },
  { id: 7, image: grapes, alt: "grapes" },
  { id: 7, image: grapes, alt: "grapes" },
  { id: 7, image: grapes, alt: "grapes" },
  { id: 7, image: orange, alt: "orange" },
];

// Functional component for rendering fruits component
function Fruits() {
  return (
    <div className="bg-[#a2fc0f] min-h-screen w-screen text-black relative flex flex-col">
      <div className="flex justify-between px-5 pl-20 pr-20 cursor-pointer text-4xl mt-8">
        <div className="home">
          <AiFillHome />
        </div>
        <div className="flex items-center w-96">
          <button
            type="submit"
            className="w-12 h-16 bg-[#dbff00] rounded-l-full rounded-r-none border-none outline-none cursor-pointer z-10 flex items-center justify-center"
          >
            <CiSearch className="h-6 w-6" />
          </button>
          <input
            type="text"
            placeholder="Search"
            name="search"
            className="w-full h-16 border-none outline-none rounded-r-full rounded-l-none px-2.5 text-base bg-[#dbff00]"
          />
        </div>
        <div className="notification">
          <IoNotificationsSharp />
        </div>
        <div className="trending">
          <FaArrowTrendUp />
        </div>
        <div className="setting">
          <IoIosSettings />
        </div>
        <div className="shoppingcart">
          <FaShoppingCart />
        </div>
      </div>

      <div className="flex justify-evenly items-center font-extrabold py-5 cursor-pointer mt-8">
        <div className="fruits flex items-center">
          <h3>FRUITS</h3>
          <FaAngleDown />
        </div>
        <div className="vegetable flex items-center">
          <h3>VEGETABLES</h3>
          <FaAngleDown />
        </div>
        <div className="meat flex items-center">
          <h3>MEAT PRODUCTS</h3>
          <FaAngleDown />
        </div>
        <div className="diary flex items-center">
          <h3>DAIRY PRODUCTS</h3>
          <FaAngleDown />
        </div>
        <div className="text-3xl">
          <FaFacebookMessenger />
        </div>

        <div className="phone flex items-center">
          <FaPhone /> <h5 className="pl-4">9800000000</h5>
        </div>
      </div>
      {/* Trending Products */}
      <div className="relative">
        {trendingProducts.map((product) => (
          <div key={product.id} className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="h-80 w-full object-cover object-center"
            />
            <div className="absolute top-16 left-0 w-full flex justify-center">
              <button className="w-64 h-12 bg-red-600 text-white font-extrabold absolute top-0 transform -translate-y-full">
                Trending Product
              </button>
            </div>
            <div className="absolute bottom-20 left-0 w-full flex justify-center">
              <button className="w-40 h-12 bg-red-600 text-white font-extrabold absolute bottom-0 transform translate-y-full">
                Shop Now
              </button>
            </div>
          </div>
        ))}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 h-10 w-8 bg-white ml-4 flex items-center justify-center">
          <button className="text-2xl">
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 ml-2 h-10 w-8 bg-white mr-4 flex items-center justify-center">
          <button className="text-2xl">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Food Categories */}
      <div className="flex flex-wrap gap-4 justify-center mt-5 mx-3 flex-grow">
        {foodCategories.map((category) => (
          <Link
            to={category.link}
            key={category.id}
            className="w-40 h-56 bg-[#a2fc0f] rounded-2xl shadow text-center transition-transform duration-200 ease-in-out mb-8 overflow-hidden ml-2.5 cursor-pointer"
          >
            <div className="card-content">
              <img
                src={category.image}
                alt={category.alt}
                className="w-40 h-56 object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Fruits;
