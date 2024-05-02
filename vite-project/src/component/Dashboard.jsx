import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import NavBar from './NavBar.jsx';
import "./payment.css";

function cart() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    product_view: "",
    price: "",
    stock: "",
    farmer_name: "",
    product_detail: "",
    serial_number: ""
  });

  const [products, setProducts] = useState([
    { id: 1, product_view: "Product 1", price: 10, stock: 20, farmer_name: "Farmer A", product_detail: "Details 1", serial_number: "SN001" },
    { id: 2, product_view: "Product 2", price: 15, stock: 25, farmer_name: "Farmer B", product_detail: "Details 2", serial_number: "SN002" },
    { id: 3, product_view: "Product 3", price: 20, stock: 30, farmer_name: "Farmer C", product_detail: "Details 3", serial_number: "SN003" }
  ]);

  const handleAddProduct = () => {
    // Here you can handle the logic to add the new product
    console.log("Adding new product:", newProduct);
    // You can also make an API call to add the product to the database
    // After adding the product, you can close the modal and update the products state
    const newId = products.length + 1;
    const updatedProducts = [...products, { id: newId, ...newProduct }];
    setProducts(updatedProducts);
    setShowAddModal(false);
    // Reset newProduct state to clear the form fields
    setNewProduct({
      product_view: "",
      price: "",
      stock: "",
      farmer_name: "",
      product_detail: "",
      serial_number: ""
    });
  };

  const handleOrderConfirmation = () => {
    alert("Your order has been placed!");
  };

  return (
    <>
      <NavBar />
      <div className="description">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>User Name</th>
                <th>Farmer Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.product_view}</td>
                  <td>{product.product_detail}</td>
                  <td>{product.farmer_name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button onClick={() => handleOrderConfirmation()}>Yes</button>
                    <button onClick={() => alert("Order canceled!")}>No</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add Product Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productView">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product view"
                value={newProduct.product_view}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, product_view: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter stock"
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, stock: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="farmerName">
              <Form.Label>Farmer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter farmer name"
                value={newProduct.farmer_name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, farmer_name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="productDetail">
              <Form.Label>Product Detail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product detail"
                value={newProduct.product_detail}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, product_detail: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="serialNumber">
              <Form.Label>Serial Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter serial number"
                value={newProduct.serial_number}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, serial_number: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default cart;
