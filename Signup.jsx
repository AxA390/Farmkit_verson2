import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import farmkit from "../Images/cover-image.jpg";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_num: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:8000/signup", formData);
      console.log(response.data); // Log the response data
      if (response.status === 200) {
        alert("User data saved successfully");
        navigate('/login')
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up");
    }
  };

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
            <div className="userName">
              <TextField
                id="username"
                name="username"
                label="Username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                variant="standard"
              />
            </div>
            <div className="Email">
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="standard"
              />
            </div>
            <div className="Phone-Num">
              <TextField
                id="phone_num"
                name="phone_num"
                label="Phone Number"
                type="tel"
                value={formData.phone_num}
                onChange={handleChange}
                variant="standard"
              />
            </div>
            <div className="Password">
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                variant="standard"
              />
            </div>
            <div className="Password">
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="standard"
              />
            </div>
          </div>
        </div>
        <div className="btns flex flex-col items-center ">
          <div className="mt-12">
            {/* <Link to="/login"> */}
            <button className="py-2.5 px-6 border border-green-900 text-green-900 rounded-md hover:bg-green-700 hover:text-white" onClick={handleSignUp}>
              Create account
            </button>
            {/* </Link> */}
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
