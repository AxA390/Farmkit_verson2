import { Link } from "react-router-dom";
import NavBar from './NavBar.jsx'; 
function Profile() {
  return (
    <>
        <NavBar />
        <div className="profile"> {/* Adjusted class to className */}
        <h1>Profile Page</h1>
        </div>
    </>
  )
}

export default Profile; // Adjusted export name
