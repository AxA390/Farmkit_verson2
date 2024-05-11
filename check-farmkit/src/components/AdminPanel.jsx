import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";

function createData(
  username,
  productDetails,
  totalAmount,
  verification = "Not Verified"
) {
  return { username, productDetails, totalAmount, verification };
}

export default function AdminPanel() {
  const [rows, setRows] = useState([
    createData("JohnDoe", "Wheat 500kg", 1200),
    createData("AnnaSmith", "Rice 300kg", 900),
    createData("AnnaSh", "Wheat 200kg", 100),
    createData("Tom", "Corn 800kg", 1600),
    createData("TomBro", "Corn 800kg", 1600),
    createData("TomBrown", "Corn 800kg", 1600),
    createData("Dinesh", "Corn 800kg", 1600),
  ]);

  const handleVerificationChange = (event, username, productDetails) => {
    const index = rows.findIndex(
      (row) =>
        row.username === username && row.productDetails === productDetails
    );
    if (index !== -1) {
      const newRows = [...rows];
      newRows[index].verification = event.target.value;
      setRows(newRows);
    }
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
      <div class="flex h-full w-full cursor-pointer">
        <div class="sidebar bg-[#FFA800] text-white p-5 w-[20%] font-bold text-[20px] flex flex-col items-center">
          <div class="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <MdDashboard class="mr-[22px]" />
            <span>Dashboard</span>
          </div>
          <div class="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <FaUser class="mr-[22px]" />
            <span>Product Details</span>
          </div>
          <div class="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <FaBitbucket class="mr-[22px]" />
            <span>User Details</span>
          </div>
          <div class="menu-item mt-10 w-full flex items-center justify-start pl-5">
            <RiLogoutBoxFill class="mr-[22px]" />
            <span>Log Out</span>
          </div>
        </div>

        <div class="main-dashboard p-5 w-full">
          <div class="info-cards flex justify-between mb-5 space-x-4">
            <div class="card bg-red-500 text-white p-3 w-1/4 h-[170px] flex flex-col justify-between rounded-lg shadow-md">
              <div>
                <div class="flex items-center justify-center space-x-2">
                  <MdDashboard className="h-6 w-6" />
                  <span class="text-xl font-bold">Dashboard</span>
                </div>
                <p class="text-center text-4xl font-bold mt-4">10</p>
              </div>
              <button class="mt-auto py-2 bg-red-700 rounded-b-lg w-full">
                Show order
              </button>
            </div>
            <div class="card bg-green-500 text-white p-3 w-1/4 flex flex-col justify-between rounded-lg shadow-md h-[170px]">
              <div>
                <div class="flex items-center justify-center space-x-2">
                  <FaBitbucket className="h-6 w-6" />
                  <span class="text-xl font-bold">Product Details</span>
                </div>
                <p class="text-center text-4xl font-bold mt-4">10</p>
              </div>
              <button class="mt-auto py-2 bg-green-700 rounded-b-lg w-full">
                Show Products
              </button>
            </div>
            <div class="card bg-blue-500 text-white p-3 w-1/4 flex flex-col justify-between rounded-lg shadow-md h-[170px]">
              <div>
                <div class="flex items-center justify-center space-x-2">
                  <FaUser className="h-6 w-6" />
                  <span class="text-xl font-bold">User Details</span>
                </div>
                <p class="text-center text-4xl font-bold mt-4">10</p>
              </div>
              <button class="mt-auto py-2 bg-blue-700 rounded-b-lg w-full">
                Show Users
              </button>
            </div>
          </div>

          <div className="main-content p-5 w-full">
            <TableContainer
              component={Paper}
              style={{ maxHeight: "400px", overflow: "auto" }}
            >
              <Table
                sx={{ minWidth: 650 }}
                stickyHeader
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell align="right">Product Details</TableCell>
                    <TableCell align="right">Total Amount</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={`${row.username}-${row.productDetails}`}>
                      <TableCell component="th" scope="row">
                        {row.username}
                      </TableCell>
                      <TableCell align="right">{row.productDetails}</TableCell>
                      <TableCell align="right">{row.totalAmount}</TableCell>
                      <TableCell align="right">
                        <Select
                          value={row.verification}
                          onChange={(event) =>
                            handleVerificationChange(
                              event,
                              row.username,
                              row.productDetails
                            )
                          }
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="Verified">Verified</MenuItem>
                          <MenuItem value="Not Verified">Not Verified</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
