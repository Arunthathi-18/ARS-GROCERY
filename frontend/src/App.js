import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Categories from './Components/Categories';
import VegetablesFruits from './Components/VegetablesFruits';
import DairyEggs from './Components/DairyProducts';
import Beverages from './Components/Bevarages';
import SnacksConfectionery from './Components/Snacks';
import PantryStaples from './Components/Pantry';
import FeaturedProducts from './Components/Featuredproduct';
import ProductList from './Components/ProductList';
import AdminAddProduct from './Components/AdminAddProduct';
import AboutUs from './Components/About';
import ContactUs from './Components/Contact';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import './App.css';
import Cart from './Components/Cart';
import { CartProvider } from './CartContext';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown on click
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown when clicked outside (optional)
  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown')) {
      setDropdownOpen(false);
    }
  };

  // Add a click event listener to handle closing dropdown when clicking outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <CartProvider>
    <Router>
      <div>
        {/* Header Section */}
        <header>
          <img
            src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg?w=900"
            alt="Online Grocery Shop Logo"
            className="header-image"
          />
          <h1>ARS GROCERY</h1>

          <nav className="navbar">
            <Link to="/">Home</Link>

            <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
              <span className="dropdown-title" onClick={toggleDropdown}>
                Categories
              </span>

              {/* Conditional rendering of dropdown content based on the state */}
              <div className="dropdown-content">
                <Link to="/vegetables-fruits">Vegetables & Fruits</Link>
                <Link to="/dairy-eggs">Dairy & Eggs</Link>
                <Link to="/beverages">Beverages</Link>
                <Link to="/snacks-confectionery">Snacks & Confectionery</Link>
                <Link to="/pantry-staples">Pantry Staples</Link>
              </div>
            </div>

            <Link to="/featured-products">Featured Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/productlist">Products</Link>
            <Link to="/cart">cart</Link>


            <div className="header-icons">
              <Link to="/cart" className="icon">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <Link to="/favorites" className="icon">
                <i className="fas fa-heart"></i>
              </Link>
            </div>
          </nav>
        </header>

        {/* Define Routes for Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/vegetables-fruits" element={<VegetablesFruits />} />
          <Route path="/dairy-eggs" element={<DairyEggs />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/snacks-confectionery" element={<SnacksConfectionery />} />
          <Route path="/pantry-staples" element={<PantryStaples />} />
          <Route path="/featured-products" element={<FeaturedProducts />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminAddProduct />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
