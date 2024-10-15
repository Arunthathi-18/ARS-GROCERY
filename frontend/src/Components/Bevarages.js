import React from 'react';
/*import './Beverages.css';*/


const Beverages = () => {
  const products = [
    { name: 'Soft Drinks', description: 'Enjoy a variety of soft drinks including cola, lemon-lime sodas, and more.', price: '$2.50', image: 'https://img.freepik.com/free-photo/futuristic-brightly-colored-soda-can_23-2150995333.jpg' },
    { name: 'Juices', description: 'Fresh and healthy fruit juices to keep you hydrated.', price: '$3.00', image: 'https://i.pinimg.com/736x/19/5e/cd/195ecd73b88a6682544e5d675e485fd2.jpg' },
    { name: 'Energy Drinks', description: 'Boost your energy with a range of popular energy drinks.', price: '$4.00', image: 'https://esajee.com/public//5/0/5000177482079n.jpg' },
    { name: 'Water', description: 'Pure and refreshing bottled water for your everyday needs.', price: '$1.00', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-bottle/t/r/u/1000-silicone-water-bottle-with-motivational-time-marker-original-imagp4cexyzea3ue.jpeg?q=90&crop=false' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
    // Implement cart functionality here
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
    // Implement buy now functionality here
  };

  return (
    <div className="category-page">
      <h2>Beverages</h2>
      <p>Explore our selection of refreshing beverages. Whether you're looking for soft drinks, juices, or energy drinks, we've got you covered.</p>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
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

export default Beverages;
