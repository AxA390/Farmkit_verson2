import React from "react";
import TextField from "@mui/material/TextField";
// import { FaRegCircleUser, FaKey } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import farmkit from "../Images/cover-image.jpg";

export default function Signup() {
  return (
    <div className="Container flex">
      <div className="main w-1/2 h-screen">
        <img src={farmkit} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container w-1/2">
        <div className="heading flex flex-col items-center mt-4">
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

        <div className="input-details mt-10">
          <div className="flex justify-center flex-col items-center gap-5 text-2xl">
            <div className="Name">
              <TextField
                id="standard-search"
                label="Name"
                type="search"
                variant="standard"
              />
            </div>
            <div className="Phone-Num">
              <TextField
                id="standard-search"
                label="Phone Number"
                type="search"
                variant="standard"
              />
            </div>
            <div className="Email">
              <TextField
                id="standard-search"
                label="Email"
                type="search"
                variant="standard"
              />
            </div>
            <div className="Age">
              <TextField
                id="standard-search"
                label="Age"
                type="search"
                variant="standard"
              />
            </div>
            <div className="userName">
              <TextField
                id="standard-search"
                label="UserName"
                type="search"
                variant="standard"
              />
            </div>
            <div className="Password">
              <TextField
                id="standard-search"
                label="Password"
                type="search"
                variant="standard"
              />
            </div>
            <div className="Password">
              <TextField
                id="standard-search"
                label="Confirm Password"
                type="search"
                variant="standard"
              />
            </div>
          </div>
        </div>
        <div className="btns flex flex-col items-center ">
          <div className="mt-12">
            <Link to="/login">
              <button className="py-2.5 px-6 border border-green-900 text-green-900 rounded-md hover:bg-green-700 hover:text-white">
                Create account{" "}
              </button>
            </Link>
          </div>
          <div className="font-extrabold text-xl mt-3">
            <p>Or</p>
          </div>
          <div className="sign-google mt-5">
            <button className="flex items-center gap-4 bg-[#b2aaaa] py-2.5 px-6 rounded-md">
              <FcGoogle />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
