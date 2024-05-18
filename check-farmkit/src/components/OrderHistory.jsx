import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";

function createData(products) {
  return { id: Math.random(), products };
}

function createProduct(productName, quantity, price) {
  return { productName, quantity, price, id: Math.random() };
}
const OrderHistory = () => {
  const [rows, setRows] = useState([
    createData([
      createProduct("Apple", 3, "$1.50"),
      createProduct("Banana", 5, "$1.50"),
    ]),
    createData([
      createProduct("Grapes", 1, "$1.50"),
      createProduct("Orange", 2, "$2.00"),
    ]),
    createData([createProduct("Mango", 1, "$4.50")]),
    createData([createProduct("Strawberry", 2, "$3.00")]),
  ]);
  const [selected, setSelected] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  const handleToggleCheckbox = (rowId, productId) => {
    setRows((prevRows) =>
      prevRows.map((row) => {
        if (row.id === rowId) {
          return {
            ...row,
            products: row.products.map((product) =>
              product.id === productId
                ? { ...product, selected: !product.selected }
                : product
            ),
          };
        }
        return row;
      })
    );
  };

  const handleDeleteSelectedProducts = () => {
    setRows((prevRows) =>
      prevRows
        .map((row) => ({
          ...row,
          products: row.products.filter((product) => !product.selected),
        }))
        .filter((row) => row.products.length > 0)
    ); // Optionally remove empty rows
  };

  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-700 mb-4 flex items-center">
        <FaHistory className="text-3xl mr-2" />
        Order History
      </h1>
      <div className="main-content p-5 w-full">
        <TableContainer
          component={Paper}
          style={{ maxHeight: "530px", overflow: "auto" }}
        >
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {showCheckboxes && <TableCell padding="checkbox"></TableCell>}
                <TableCell>S.N</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {rowIndex + 1}
                  </TableCell>
                  <TableCell>
                    {row.products.map((product, productIndex) => (
                      <div key={product.id}>
                        <Checkbox
                          checked={product.selected || false}
                          onChange={() =>
                            handleToggleCheckbox(row.id, product.id)
                          }
                        />
                        {product.productName}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {row.products.map((product) => (
                      <div key={product.id}>{product.quantity}</div>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {row.products.map((product) => (
                      <div key={product.id}>{product.price}</div>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="btns flex gap-[850px]">
        <div className="back">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center">
            <IoMdArrowBack className="mr-2" />
            Back
          </button>
        </div>
        <div className="delete mt-[17px]">
          <Button
            variant="outlined"
            color="error"
            onClick={handleDeleteSelectedProducts}
          >
            <MdDelete className="mr-2" />
            Delete Selected
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
