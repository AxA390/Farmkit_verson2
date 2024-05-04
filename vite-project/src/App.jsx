
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './component/Dashboard'; 
import ProductDes from './component/Product_des'; 
import Profile from './component/Profile'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product_des" element={<ProductDes />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
