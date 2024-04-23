import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { CiSearch } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { TiLocation } from "react-icons/ti";

import {
  FaShoppingCart,
  FaAngleDown,
  // FaFacebookMessenger,
  FaUser,
} from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import appleimg from "../Images/fresh-apple.jpg";
import { Link } from "react-router-dom";

const farmerDetails = [
  {
    name: "Mr.Ram Charan",
    rating: 5,
    about: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elits.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet.",
    ],
    price: "300 per KG",
    location: "Kaloopol, Kathmandu",
    link: "/profile",
  },
  {
    name: "Mr.Ramu ",
    rating: 5,
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
    rating: 5,
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
    rating: 5,
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
            <FaShoppingCart />
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
          {/* <div className="text-3xl">
            <FaFacebookMessenger />
          </div> */}
        </div>
      </div>

      <div className="flex justify-around mt-5 mx-11">
        <div className="w-1/4 ml-11">
          <div className="relative w-80 h-96 bg-[#a2fc0f] rounded-2xl shadow text-center transition-transform duration-200 ease-in-out mb-8 overflow-hidden cursor-pointer">
            <img
              src={appleimg}
              alt="appleimage"
              className="w-full h-full object-cover object-center"
            />
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
              className="Farmers-detail mt-6 border-b border-black pb-3 mb-2 flex gap-24 "
              key={index}
            >
              <div className="w-44 h-36 flex items-center justify-center cursor-pointer">
                <div className="flex flex-col items-center">
                  <Link to={farmer.link}>
                    <div className="go-to">
                      <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">
                        <FaUser className="w-14 h-12" />
                      </div>
                      <p className="detail-info pt-2">{farmer.name}</p>
                    </div>
                  </Link>
                  <div className="info-rating">
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </Stack>
                  </div>
                </div>
              </div>
              <div className="w-2/3 whitespace-nowrap overflow-visible overflow-ellipsis ">
                {farmer.about.map((paragraph, index) => (
                  <p
                    key={index}
                    className="detail-info w-36 h-4 pt-6 text-base "
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="location-price ml-44">
                <div className="price w-40 h-9 text-2xl font-extrabold bg-[#9ded1b] rounded-lg flex items-center justify-center mt-4">
                  {farmer.price}
                </div>
                <div className="text-sm font-semibold mt-6 flex items-center">
                  <span>{farmer.location}</span>
                  <TiLocation />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Apples;
