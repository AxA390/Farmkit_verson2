import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { TiLocation } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import {
  // FaFacebookMessenger,
  FaUser,
} from "react-icons/fa";

import appleimg from "../Images/fresh-apple.jpg";
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

function Apples() {
  return (
    <div className="Container">
      <Header />

      <div className="flex justify-around mt-5 mx-11">
        <div className="w-1/4 ml-11">
          <div className="relative w-80 h-96 bg-[#a2fc0f] rounded-2xl shadow text-center transition-transform duration-200 ease-in-out mb-8 overflow-hidden cursor-pointer">
            <img
              src={appleimg}
              alt="appleimage"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="product-name ">
            <p className="text-3xl text-center font-bold">Apple</p>
          </div>
        </div>
        <div className="infodetails ">
          <div className=" flex gap-24 justify-center items-center h-24 w-w-6/12 shadow-md">
            <div className="location">
              <h4 className="font-extrabold">FILTER BY LOCATION</h4>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                  className=" border border-black outline-none px-4 py-2.5 h-9 w-80 rounded-lg"
                />
              </div>
            </div>
            <div className="progress-bar">
              <h4 className="font-extrabold">FILTER BY PRICE</h4>
              <div className="slider  border border-black outline-none h-9 w-80 mt-4 rounded-lg pl-4 pt-0.5">
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
              className="Farmers-detail mt-6  pb-3 mb-2 flex flex-col items-center shadow-md"
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
                  <div className="price w-40 h-9 text-2xl font-extrabold bg-[#B2AAAA] rounded-lg flex items-center justify-center">
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
              <button className="bg-red-500 hover:bg-green-800 text-black hover:text-white font-bold py-2 px-8 rounded-lg shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out">
                <span className="flex items-center">
                  <FaCartArrowDown className="mr-2" />

                  <span>Add to Cart</span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Apples;
