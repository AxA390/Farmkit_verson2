import React from "react";
import person from "../Images/person.jpg";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
// import { Link } from "react-router-dom";

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:max-w-6xl md:space-x-8">
        <div className="flex flex-col items-center p-4 border-r md:border-r-2">
          <img
            src={person}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <div className="text-lg font-semibold mb-2">Basanta Karki</div>
          <div className="text-sm mb-2">basanta69@gmail.com</div>
          <nav className="mt-4">
            <ul className="space-y-4">
              <li className="flex items-center shadow-md p-2 rounded-lg">
                {/* <Link to="/cart"> */}
                <FaCartArrowDown className="mr-2" />
                <button className="text-black hover:text-gray-800">
                  Your Cart
                </button>
                {/* </Link> */}
              </li>
              <li className="flex items-center shadow-md p-2 rounded-lg">
                <FaHistory className="mr-2" />
                <button className="text-black hover:text-gray-800">
                  Order History
                </button>
              </li>
              <li className="flex items-center shadow-md p-2 rounded-lg">
                <IoLogOut className="mr-2" />
                <button className="text-black hover:text-gray-800">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 p-4">
          <form>
            <div className="mb-4">
              <label
                htmlFor="currentPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Current Password:
              </label>
              <input
                type="password"
                id="currentPassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm New Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
