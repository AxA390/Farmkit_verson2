import React from "react";
import LandingPage from "./components/LandingPage";
import Fruits from "./components/Fruits";
import Apples from "./components/Apples";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import Login from "./components/Login";
import Signup from "./components/Signup";
import Yourcart from "./components/Yourcart";
import Vegetables from "./components/Vegetables";
import Dairy from "./components/Dairy";
import Meat from "./components/Meat";
import Mango from "./components/Fruits/Mango";
// Main App component
const App = () => {
  return (
    <Router>
      {" "}
      {/* Router component to provide navigation functionality */}
      <div>
        {" "}
        {/* Main container for all routes */}
        <Routes>
          {" "}
          {/* Routes component for defining different routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/meat" element={<Meat />} />
          <Route path="/apples" element={<Apples />} />
          <Route path="/mango" element={<Mango />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Yourcart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>

    // <Yourcart />
  );
};

export default App; // Exporting the App component
