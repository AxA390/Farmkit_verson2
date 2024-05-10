import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { CiSearch } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import ConnectWithUs from "../ConnectWithUs";

import {
  FaShoppingCart,
  FaAngleDown,
  // FaFacebookMessenger,
  FaUser,
} from "react-icons/fa";

import muttonimg from "../../Images/mutton.jpg";
import { Link } from "react-router-dom";

const farmerDetails = [
  {
    name: "Mr.Ramu",

    about: ["Lorem ipsum dolor sit amet consectetur adipisicing elits."],
    price: "300 per KG",
    location: "Kaloopol, Kathmandu",
    link: "/profile",
  },
  {
    name: "Mr.Ramu ",

    about: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elits.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet.",
    ],
    price: "300 per KG",
    location: "Kaloopol, Kathmandu",
  },
  {
    name: "Mr.Charan",

    about: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elits.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      "mike check",
    ],
    price: "300 per KG",
    location: "Kaloopol, Kathmandu",
  },
  {
    name: "Mr.Hari",

    about: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elits.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      " sit amet.",
    ],
    price: "300 per KG",
    location: "Kaloopol, Kathmandu",
  },

  // Add more farmer details objects as needed
];

export default function Mutton() {
  return (
    <div className="bg-[#a2fc0f] min-h-screen w-screen text-black relative flex flex-col">
      <div className="Heading">
        <div className="mt-2.5">
          <h1 className="font-extrabold text-3xl text-center">
            Product Description
          </h1>
        </div>
        <div className="flex justify-between px-24 text-3xl mt-10 relative">
          <div className="home">
            <Link to="/">
              <AiFillHome />
            </Link>
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
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly items-center font-extrabold py-5 cursor-pointer mt-8">
          <div className="fruits flex items-center">
            <Link to="/fruits">
              <h3>FRUITS</h3>
              <FaAngleDown />
            </Link>
          </div>
          <div className="vegetable flex items-center">
            <Link to="/vegetables">
              <h3>VEGETABLES</h3>
              <FaAngleDown />
            </Link>
          </div>
          <div className="meat flex items-center">
            <Link to="/meat">
              <h3>MEAT PRODUCTS</h3>
              <FaAngleDown />
            </Link>
          </div>
          <div className="diary flex items-center">
            <Link to="/dairy">
              <h3>DAIRY PRODUCTS</h3>
              <FaAngleDown />
            </Link>
          </div>
          {/* <div className="text-3xl">
            <FaFacebookMessenger />
          </div> */}
        </div>
      </div>

      <div className="flex justify-around mt-5 mx-11">
        <div className="w-1/4 ml-11">
          <div className="relative w-80 h-96 bg-[#a2fc0f] rounded-2xl shadow text-center transition-transform duration-200 ease-in-out mb-8 overflow-hidden cursor-pointer">
            <img
              src={muttonimg}
              alt="appleimage"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="product-name">
            <p className="text-3xl text-center font-bold">Mutton</p>
          </div>
        </div>
        <div className="infodetails ">
          <div className=" flex gap-24 justify-center items-center h-24 w-w-6/12 bg-[#acf03d]">
            <div className="location">
              <h4 className="font-extrabold">FILTER BY LOCATION</h4>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                  className="bg-[#acf03d] border border-black outline-none px-4 py-2.5 h-9 w-80 rounded-lg"
                />
              </div>
            </div>
            <div className="progress-bar">
              <h4 className="font-extrabold">FILTER BY PRICE</h4>
              <div className="slider bg-[#acf03d] border border-black outline-none h-9 w-80 mt-4 rounded-lg pl-4 pt-0.5">
                <Box sx={{ width: 280 }}>
                  <Slider
                    defaultValue={50}
                    min={0}
                    max={500}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  />
                </Box>
              </div>
            </div>
          </div>

          {farmerDetails.map((farmer, index) => (
            <div
              className="Farmers-detail mt-6 border-b border-black pb-3 mb-2 flex flex-col items-center"
              key={index}
            >
              <div className="top-part flex w-full justify-around items-center">
                <div className="profile flex items-center justify-center cursor-pointer">
                  <Link to={farmer.link}>
                    <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">
                      <FaUser className="w-14 h-12" />
                    </div>
                    <p className="pt-2 text-center">{farmer.name}</p>
                  </Link>
                </div>
                <div className="about w-2/3 text-center">
                  {farmer.about.map((paragraph, index) => (
                    <p key={index} className="mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="price-location flex flex-col items-center">
                  <div className="price w-40 h-9 text-2xl font-extrabold bg-[#9ded1b] rounded-lg flex items-center justify-center">
                    {farmer.price}
                  </div>
                  <div
                    className="location flex items-center mt-2"
                    style={{ minWidth: "150px", whiteSpace: "nowrap" }}
                  >
                    <span>{farmer.location}</span>
                    <TiLocation
                      style={{ marginLeft: "8px", fontSize: "1.5rem" }}
                    />
                  </div>
                </div>
              </div>
              <button className="bg-green-500 hover:bg-green-800 text-black hover:text-white font-bold py-2 px-8 rounded-lg shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out">
                <span className="flex items-center">
                  <FaCartArrowDown className="mr-2" />

                  <span>Add to Cart</span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <ConnectWithUs />
    </div>
  );
}
