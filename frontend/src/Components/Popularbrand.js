// src/Components/PopularBrands.js
import React from 'react';

const PopularBrands = () => {
  const brands = [
    { name: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeC2bXhacRRbCzqRwO4czgxUhZninGex2XYQ&s', link: '#' },
    { name: '', image: 'https://smhealth.store/cdn/shop/collections/Himalaya_Shopify_Square_a9a27f03-3570-4570-a348-a17ca58467b0_1200x1200.jpg?v=1664351617', link: '#' },
    { name: '', image: 'https://i.pinimg.com/736x/da/20/75/da2075601a03cf082b1e5025d41c23dc.jpg', link: '#' },
    { name: '', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Dabur_Logo.svg/800px-Dabur_Logo.svg.png', link: '#' }
  ];

  return (
    <div className="popular-brands-page">
      <h2>Popular Brands</h2>
      <div className="brand-list">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <a href={brand.link} target="_blank" rel="noopener noreferrer">
              <img src={brand.image} alt={brand.name} className="brand-image" />
            </a>
            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
