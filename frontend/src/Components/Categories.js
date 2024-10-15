import React from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {
  return (
    <div className="categories-page">
      <h2>Our Product Categories</h2>
      <div className="categories-list">
        <Link to="/vegetables-fruits" className="category-item">
          <img src="https://via.placeholder.com/150" alt="Vegetables & Fruits" />
          <h3>Vegetables & Fruits</h3>
        </Link>

        <Link to="/dairy-eggs" className="category-item">
          <img src="https://via.placeholder.com/150" alt="Dairy & Eggs" />
          <h3>Dairy & Eggs</h3>
        </Link>

        <Link to="/meat-poultry" className="category-item">
          <img src="https://via.placeholder.com/150" alt="Meat & Poultry" />
          <h3>Meat & Poultry</h3>
        </Link>

        <Link to="/beverages" className="category-item">
          <img src="https://via.placeholder.com/150" alt="Beverages" />
          <h3>Beverages</h3>
        </Link>

        <Link to="/snacks-confectionery" className="category-item">
          <img src="https://via.placeholder.com/150" alt="Snacks & Confectionery" />
          <h3>Snacks & Confectionery</h3>
        </Link>

        <Link to="/pantry-staples" className="category-item">
          <img src="https://via.placeholder.com/150" alt="Pantry Staples" />
          <h3>Pantry Staples</h3>
        </Link>
      </div>
    </div>
  );
};

export default Categories;