import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import AddProduct from "./AddProduct";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
function createProductData(
  sNo,
  productName,
  price,
  stock,
  farmerName,
  productDetail,
  productID,
  location
) {
  return {
    sNo,
    productName,
    price,
    stock,
    farmerName,
    productDetail,
    productID,
    location,
  };
}

export default function ProductDetails() {
  const [showPopup, setShowPopup] = useState(false);
  const [products, setProducts] = useState([
    createProductData(
      1,
      "Apple",
      "$1.50",
      100,
      "John Doe",
      "Fresh Red Apples",
      "101",
      "Farm A"
    ),
    createProductData(
      2,
      "Orange",
      "$1.00",
      150,
      "Jane Smith",
      "Juicy oranges",
      "102",
      "Farm B"
    ),
  ]);
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleAction = (productID) => {
    const updatedProducts = products.filter(
      (product) => product.productID !== productID
    );
    setProducts(updatedProducts);
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="Container">
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
      </header>
      <div className="flex w-full cursor-pointer">
        <div className="sidebar bg-[#FFA800] text-white p-5 w-[20%] font-bold text-[20px] flex flex-col items-center h-screen">
          <div className="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <MdDashboard className="mr-[22px]" />
            <span>Dashboard</span>
          </div>
          <div className="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <FaUser className="mr-[22px]" />
            <span>Product Details</span>
          </div>
          <div class="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <FaBitbucket className="mr-[22px]" />
            <span>User Details</span>
          </div>
          <div className="menu-item mt-10 w-full flex items-center justify-start pl-5">
            <RiLogoutBoxFill className="mr-[22px]" />
            <span>Log Out</span>
          </div>
        </div>

        <div className="main-dashboard p-5 w-full">
          <div className="info-cards flex justify-between mb-5 space-x-4">
            <div className="card bg-red-500 text-white p-3 w-1/4 h-[170px] flex flex-col justify-between rounded-lg shadow-md">
              <div>
                <div className="flex items-center justify-center space-x-2">
                  <MdDashboard className="h-6 w-6" />
                  <span className="text-xl font-bold">Dashboard</span>
                </div>
                <p className="text-center text-4xl font-bold mt-4">10</p>
              </div>
              <button className="mt-auto py-2 bg-red-700 rounded-b-lg w-full">
                Show order
              </button>
            </div>
            <div class="card bg-green-500 text-white p-3 w-1/4 flex flex-col justify-between rounded-lg shadow-md h-[170px]">
              <div>
                <div class="flex items-center justify-center space-x-2">
                  <FaBitbucket className="h-6 w-6" />
                  <span className="text-xl font-bold">Product Details</span>
                </div>
                <p className="text-center text-4xl font-bold mt-4">10</p>
              </div>
              <button className="mt-auto py-2 bg-green-700 rounded-b-lg w-full">
                Show Products
              </button>
            </div>
            <div className="card bg-blue-500 text-white p-3 w-1/4 flex flex-col justify-between rounded-lg shadow-md h-[170px]">
              <div>
                <div class="flex items-center justify-center space-x-2">
                  <FaUser className="h-6 w-6" />
                  <span className="text-xl font-bold">User Details</span>
                </div>
                <p className="text-center text-4xl font-bold mt-4">10</p>
              </div>
              <button className="mt-auto py-2 bg-blue-700 rounded-b-lg w-full">
                Show Users
              </button>
            </div>
          </div>

          <div className="main-dashboard p-5 w-full">
            <TableContainer
              component={Paper}
              style={{ maxHeight: "400px", overflow: "auto" }}
            >
              <Table
                sx={{ minWidth: 650 }}
                stickyHeader
                aria-label="product details table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>S.N</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Farmer Name</TableCell>
                    <TableCell>Product Detail</TableCell>
                    <TableCell>Product ID</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.productID}>
                      <TableCell>{product.sNo}</TableCell>
                      <TableCell>{product.productName}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{product.farmerName}</TableCell>
                      <TableCell>{product.productDetail}</TableCell>
                      <TableCell>{product.productID}</TableCell>
                      <TableCell>{product.location}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleAction(product.productID)}
                          variant="outlined"
                          color="error"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="add-button flex justify-center">
            <Button variant="contained" onClick={handleOpenPopup}>
              Add
            </Button>
          </div>
          <div className="add-product-popup-container">
            {showPopup && (
              <AddProduct
                handleClose={handleClosePopup}
                handleAddProduct={handleAddProduct}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
