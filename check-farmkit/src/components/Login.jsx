import React from "react";
import TextField from "@mui/material/TextField";
import { FaRegCircleUser, FaKey } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import farmkit from "../Images/cover-image.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="Main-container flex">
      <div className="main w-1/2 h-screen">
        <img src={farmkit} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container w-1/2">
        <div className="heading flex flex-col items-center mt-12">
          <h1 className="italic">
            <span className="text-black font-kaushan text-6xl">FARMKIT</span>
            <span className="text-[#D9D9D9] font-kaushan text-6xl italic">
              ORG
            </span>
          </h1>
          <h3 className="text-black italic font-kaushan text-2xl">
            From Farmers to Farmers
          </h3>
        </div>

        <div className="input-details mt-14">
          <div className="flex justify-center items-center gap-5 text-2xl">
            <div className="user-icon mt-4">
              <FaRegCircleUser />
            </div>
            <div className="userName">
              <TextField
                id="standard-search"
                label="UserName"
                type="search"
                variant="standard"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 text-2xl mt-12">
            <div className="user-icon mt-4">
              <FaKey />
            </div>
            <div className="Password">
              <TextField
                id="standard-search"
                label="Password"
                type="search"
                variant="standard"
              />
            </div>
          </div>
        </div>
        <div className="btns flex flex-col items-center mt-16">
          <div className="signin">
            <button className="text-white bg-[#388e3c] border-none py-2.5 px-6 font-semibold rounded-md hover:bg-green-800">
              Sign In
            </button>
          </div>

          <div className="sign-google mt-12">
            <button className="flex items-center gap-4 bg-[#b2aaaa] py-2.5 px-6 rounded-md">
              <FcGoogle />
              Continue with Google
            </button>
          </div>

          <div className="mt-12">
            <p className="pb-1">Don't have an account?</p>
            <Link to="/signup">
              <button className="py-2.5 px-6 border border-green-900 text-green-900 rounded-md hover:bg-green-700 hover:text-white">
                Create account{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
