import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import NavBar from './NavBar.jsx'; 
import "./Profile.css"; 

function Profile() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userData, setUserData] = useState([
    { id: 1, username: "User 1", email: "user1@example.com", password: "password1", phone: "1234567890" },
    { id: 2, username: "User 2", email: "user2@example.com", password: "password2", phone: "9876543210" },
    { id: 3, username: "User 3", email: "user3@example.com", password: "password3", phone: "4567891230" },
    { id: 4, username: "User 4", email: "user3@example.com", password: "password3", phone: "4567891230" },
    { id: 5, username: "User 5", email: "user3@example.com", password: "password3", phone: "4567891230" }
  ]);

  const handleDeleteUser = (id) => {
    // Logic to delete user with the given id
    const updatedUsers = userData.filter(user => user.id !== id);
    setUserData(updatedUsers);
    // Close the delete modal
    setShowDeleteModal(false);
  };

  return (
    <>
      <NavBar />
      <div className="profile">
        <h1>Profile Page</h1>
      </div>
      <div className="user">
        <table>
          <thead>
            <tr>
              <th>Sn</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => { setShowDeleteModal(true); setSelectedUserId(user.id); }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete User Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this user?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDeleteUser(selectedUserId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Profile;
