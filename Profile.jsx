import React from "react";
import apple from "../Images/apple.jpeg";
import { FaUser } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Profile() {
  return (
    <div className="bg-[#a2fc0f]">
      <div className="sidebar w-1/5 h-full fixed top-0 left-0 pt-5 text-white border-solid">
        <div className="profile h-1/5 flex flex-col justify-center items-center">
          <div className="avatar h-44 w-28 bg-white rounded-full flex justify-center items-center ">
            <FaUser className="text-black h-20 w-16" />
          </div>
          <div className="name">
            <p className="text-black text-xl">Mr. Ram Charan</p>
          </div>
          <div className="Rating">
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
          </div>
        </div>
        <ul>
          <li>
            <a href="#" className="text">
              <i className="fas fa-qrcode"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text">
              <i className="fas fa-link"></i> Review
            </a>
          </li>
          <li>
            <a href="#" className="text">
              <i className="fas fa-address-book"></i> Contacts
            </a>
          </li>
          <li>
            <a href="#" className="text">
              <i className="fas fa-shop"></i> Markets
            </a>
          </li>
        </ul>
      </div>
      <div className="ml-52 p-5">
        <div className="apple-container flex flex-wrap justify-center">
          <table>
            <tr>
              <td>
                <img src={apple} alt="" className="midImage" />
                <p className="desc">
                  Mustang Apple
                  <br />
                  Price: Rs 400 <button>Buy</button>
                </p>
              </td>
              <td>
                <img src={apple} alt="" className="midImage" />
                <p className="desc">
                  Mustang Apple
                  <br />
                  Price: Rs 400 <button>Buy</button>
                </p>
              </td>
              <td>
                <img src={apple} alt="" className="midImage" />
                <p className="desc">
                  Mustang Apple
                  <br />
                  Price: Rs 400 <button>Buy</button>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <img src={apple} alt="" className="midImage" />
                <p className="desc">
                  Mustang Apple
                  <br />
                  Price: Rs 400 <button>Buy</button>
                </p>
              </td>
              <td>
                <img src={apple} alt="" className="midImage" />
                <p className="desc">
                  Mustang Apple
                  <br />
                  Price: Rs 400 <button>Buy</button>
                </p>
              </td>
              <td>
                <img src={apple} alt="" className="midImage" />
                <p className="desc">
                  Mustang Apple
                  <br />
                  Price: Rs 400 <button>Buy</button>
                </p>
              </td>
            </tr>
          </table>
          <h1 className="text-center">Other products you might like</h1>
          <div className="bott">
            <table>
              <tr className="w-40 h-40 mr-12 rounded-2xl">
                <td>
                  <img src={apple} alt="" className="bottImage" />
                </td>
                <td>
                  <img src={apple} alt="" className="bottImage" />
                </td>
                <td>
                  <img src={apple} alt="" className="bottImage" />
                </td>
                <td>
                  <img src={apple} alt="" className="bottImage" />
                </td>
                <td>
                  <img src={apple} alt="" className="bottImage" />
                </td>
                <td>
                  <img src={apple} alt="" className="bottImage" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
