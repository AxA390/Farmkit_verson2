import React, { useState, useEffect, useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Notification from "./Notification";

function Header() {
  const cartItemCount = 3;
  const cartItnotificationItem = 3;

  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative">
      <header className="bg-[#FFA800] flex justify-between items-center py-2 px-20 shadow-md">
        <div className="heading ml-4">
          <h1 className="italic">
            <span className="text-black font-kaushan text-6xl">FARMKIT</span>
            <span className="text-white font-kaushan text-6xl italic">ORG</span>
          </h1>
          <h3 className="text-white font-kaushan text-2xl ml-24 italic">
            From Farmers to Farmers
          </h3>
        </div>
        <div className="flex items-center">
          <Link to="/signup">
            <button className="bg-red-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full h-[65px] w-[150px]">
              SIGN IN
            </button>
          </Link>
        </div>
      </header>
      <div className="flex justify-between items-center px-20 py-2 shadow-xl relative">
        <Link to="/">
          <div className="cursor-pointer text-4xl ml-[90px]">
            <AiFillHome />
          </div>
        </Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            name="search"
            className="w-96 h-16 border-2 border-black outline-none rounded-full px-4 text-base text-center"
          />
        </div>
        <div className="flex space-x-4 cursor-pointer text-4xl">
          <div className="relative mr-[86px]">
            <IoNotificationsSharp
              style={{ cursor: "pointer" }}
              onClick={toggleNotifications}
            />
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-2 text-xs">
              {cartItnotificationItem}
            </span>
            {showNotifications && (
              <div
                ref={notificationRef}
                className="absolute top-full right-0 mt-2 z-10"
              >
                <Notification />
              </div>
            )}
          </div>
          <Link to="/cart" className="mr-6">
            <div className="relative mr-[86px]">
              <FaShoppingCart />
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-2 text-xs">
                {cartItemCount}
              </span>
            </div>
          </Link>
          <IoIosSettings />
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#F4ECEC] py-3 px-20 text-black mx-10 rounded-bl-[50px] rounded-br-[50px] shadow-lg">
        <Link
          to="/fruits"
          className="flex items-center cursor-pointer space-x-1"
        >
          <h3 className="text-[#6D8AF3]">FRUITS</h3>
          <MdOutlineArrowDropDown className="text-3xl" />
        </Link>
        <Link
          to="/vegetables"
          className="flex items-center cursor-pointer space-x-1"
        >
          <h3>VEGETABLES</h3>
          <MdOutlineArrowDropDown className="text-3xl" />
        </Link>
        <Link to="/meat" className="flex items-center cursor-pointer space-x-1">
          <h3>MEAT PRODUCTS</h3>
          <MdOutlineArrowDropDown className="text-3xl" />
        </Link>
        <Link
          to="/dairy"
          className="flex items-center cursor-pointer space-x-1"
        >
          <h3>DAIRY PRODUCTS</h3>
          <MdOutlineArrowDropDown className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
