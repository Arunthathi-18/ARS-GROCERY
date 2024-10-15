import React from 'react';
import './VegetablesFruits.css'; // Adjust the path as necessary

const VegetablesFruits = () => {
  const products = [
    { name: 'Leafy Greens', description: 'Fresh and crisp spinach, kale, and lettuce.', price: '$5.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9rxkC9HewuAjtGDhMPfWKciisZaXTzLwNLO8hbBfWdt0fHXAVciIvQlIUcAJqpDUzZE&usqp=CAU' },
    { name: 'Root Vegetables', description: 'Carrots, potatoes, and beets for all your cooking needs.', price: '$3.50', image: 'https://img.favpng.com/9/14/7/juice-carrot-root-vegetables-carotene-png-favpng-Z44Qs75XV0Gz9SSvn1374kqGQ.jpg' },
    { name: 'Seasonal Fruits', description: 'Apples, oranges, and berries depending on the season.', price: '$7.00', image: 'https://indiagardening.b-cdn.net/wp-content/uploads/2021/08/Litchi-plant.jpg' },
    { name: 'Citrus Fruits', description: 'Lemons, limes, and grapefruits for a zesty touch.', price: '$4.00', image: 'https://wallpaperaccess.com/full/8783822.jpg' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
  };

  return (
    <div className="category-page">
      <h2>Vegetables & Fruits</h2>
      <p>Explore a wide variety of fresh vegetables and fruits. Our selection includes everything from leafy greens to seasonal fruits.</p>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Buttons Container */}
            <div className="action-buttons">
              <button onClick={() => handleAddToCart(product.name)} className="add-to-cart-btn">Add to Cart</button>
              <button onClick={() => handleBuyNow(product.name)} className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetablesFruits;
