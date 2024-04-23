import React from "react"; /// Importing React library to use JSX syntax
import {
  FaPhone,
  FaInstagram,
  FaTwitter,
  // FaFacebookMessenger,
} from "react-icons/fa"; //Importing icons
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

//Importing images from the specified path
import image1 from "../Images/fruitt.png";
import image2 from "../Images/healthy-vegetable.jpg";
import image3 from "../Images/raw-meat.webp";
import image4 from "../Images/Dairy-products.jpg";

// Array of food categories with respective details
const foodCategories = [
  { id: 1, title: "FRUITS", image: image1, alt: "Fruits", link: "/fruits" }, // Fruit category with image1 and alt text
  {
    id: 2,
    title: "VEGETABLES",
    image: image2,
    alt: "Vegetables",
    link: "/fruits",
  },
  {
    id: 3,
    title: "MEAT PRODUCTS",
    image: image3,
    alt: "Meat Products",
    link: "/fruits",
  },
  {
    id: 4,
    title: "DAIRY PRODUCTS",
    image: image4,
    alt: "Dairy Products",
    link: "/fruits",
  },
];

// React functional component for the LandingPage
function LandingPage() {
  return (
    <div className="p-10 bg-[#a2fc0f] text-black w-full min-h-screen relative flex flex-col">
      <header className="flex justify-between items-center">
        <div className="heading">
          <h1 className="mb-2 italic">
            <span className="text-white font-kaushan text-6xl">FARMKIT</span>
            <span className="text-black font-kaushan text-6xl italic">ORG</span>
          </h1>
          <h3 className="text-white font-kaushan text-2xl">
            From Farmers to Farmers
          </h3>
        </div>
        {/* <div>
          <FaFacebookMessenger className="text-3xl cursor-pointer" />
        </div> */}
        <div className="bg-[#6ba809] text-black font-semibold py-3 px-5 rounded-full cursor-pointer hover:bg-[#20730a]">
          <Link to="/login">
            <button>SIGN-IN</button>
          </Link>
        </div>
      </header>
      <main className="farmkit-main">
        <div className="flex flex-wrap gap-8 justify-center mb-8 pt-32">
          {" "}
          {/*iterates over each element in the foodCategories array*/}
          {foodCategories.map((category) => (
            <Link
              to={category.link}
              key={category.id}
              className="w-72 h-80 bg-green-400 rounded-2xl shadow text-center transition-transform duration-200 ease-in-out mb-8 overflow-hidden ml-5 cursor-pointer hover:scale-105"
            >
              <div className="relative">
                <img
                  className="w-72 h-80 object-cover object-center"
                  src={category.image}
                  alt={category.alt}
                />
                <button className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 bg-[#a2fc0f] text-black px-4 py-2 rounded-xl font-bold z-10">
                  {category.title}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="bg-[#ebff00] p-5 rounded-2xl">
        <center>
          <div className="aboutus">
            <h1 className="text-xl font-semibold">About Us</h1>
            <p className="paragraph-about">
              FarmKit connects farmers directly with consumers, offering a
              diverse selection of fresh fruits, vegetables, meat, and dairy
              products. By cutting out middlemen, we ensure fair prices for
              farmers and deliver unparalleled freshness to our customers'
              tables. Join us in supporting local agriculture and experiencing
              the true taste of farm-to-table goodness with FarmKit.
            </p>
          </div>

          <div className="connectus mt-6">
            <h3 className="text-xl font-semibold">Connect With Us</h3>

            <div className="flex justify-center items-center mt-5 pl-4">
              {" "}
              {/* Container for social media links */}
              <a className="hover:text-blue-600" href="https://facebook.com">
                <FaFacebook />
              </a>
              <a className="hover:text-red-500" href="https://instagram.com">
                <FaInstagram />
              </a>
              <a className="hover:text-blue-500" href="https://twitter.com">
                <FaTwitter />
              </a>
              <a href="https://mail.google.com">
                <FcGoogle />
              </a>
              <a className="hover:text-blue-600" href="https://mail.google.com">
                <FaPhone />
              </a>
            </div>
          </div>
        </center>
      </footer>
    </div>
  );
}
export default LandingPage; // Exporting LandingPage component
