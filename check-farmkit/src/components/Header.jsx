import React from "react";
//Imported icons
import { AiFillHome } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const cartItemCount = 3;

  return (
    <div>
      <header className="bg-[#FFA800] flex justify-between items-center py-2 px-20 shadow-md">
        <div className="heading ml-[86px]">
          <h1 className="italic">
            <span className="text-black font-kaushan text-6xl">FARMKIT</span>
            <span className="text-white font-kaushan text-6xl italic">ORG</span>
          </h1>
          <h3 className="text-white font-kaushan text-2xl ml-[150px] italic">
            From Farmers to Farmers
          </h3>
        </div>
        <button className="bg-red-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">
          SIGN IN
        </button>
      </header>
      <div className="flex justify-between items-center px-20 py-[14px] shadow-xl">
        <div className="cursor-pointer text-4xl ml-[90px]">
          <AiFillHome />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            name="search"
            className="w-96 h-16 border-2 border-black outline-none rounded-full px-4 text-base text-center"
          />
        </div>
        <div className="flex space-x-4 cursor-pointer text-4xl">
          <IoNotificationsSharp style={{ marginRight: "86px" }} />
          <div className="relative">
            <FaShoppingCart />
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-2 text-xs">
              {cartItemCount}
            </span>
          </div>
          <IoIosSettings style={{ marginLeft: "86px" }} />
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#F4ECEC] py-3 px-20 text-black mx-10 rounded-bl-[50px] rounded-br-[50px] shadow-lg">
        <div className="flex items-center cursor-pointer space-x-1">
          <h3 className="text-[#6D8AF3]">FRUITS</h3>
          <MdOutlineArrowDropDown className="text-3xl" />
        </div>
        <div className="flex items-center cursor-pointer space-x-1">
          <h3>VEGETABLES</h3>
          <MdOutlineArrowDropDown className="text-3xl" />
        </div>
        <div className="flex items-center cursor-pointer space-x-1">
          <h3>MEAT PRODUCTS</h3>
          <MdOutlineArrowDropDown className="text-3xl" />
        </div>
        <div className="flex items-center cursor-pointer space-x-1">
          <h3>DAIRY PRODUCTS</h3>
          <MdOutlineArrowDropDown className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Header;
