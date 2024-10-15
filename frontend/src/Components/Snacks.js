import React from 'react';

const SnacksProducts = () => {
  const products = [
    { name: 'Chips', description: 'Crispy potato chips in different flavors.', price: '$2.50', image: 'https://gumlet-images.assettype.com/afaqs%2F2022-08%2Fb887e923-f980-4c4a-811c-a924561e6b5c%2FLay_s_Gourmet_Thai_Sweet_Chilli.png?auto=format%2Ccompress&w=400&dpr=2.6' },
    { name: 'Cookies', description: 'Freshly baked cookies in various varieties.', price: '$3.00', image: 'https://tornadoughalli.com/wp-content/uploads/2023/12/CHOCOLATE-CHIP-REESES-STUFFED-COOKIES.jpg' },
    { name: 'Nuts', description: 'Healthy mixed nuts for snacking.', price: '$4.50', image: 'https://www.dryfruitbasket.in/storage/media/loNsrxswTo7QpL2BlUSDckpWqeM4ypOTIbnvJ7uP.jpg' },
    { name: 'Chocolate Bars', description: 'Sweet and delicious chocolate bars.', price: '$1.80', image: 'https://brands-of-germany.com/cdn/shop/products/KinderBueno.gif?v=1625935357' }
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
      <h2>Snacks Products</h2>
      <p>Find your favorite snacks, from crunchy chips to sweet chocolate bars.</p>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>

            {/* Buttons */}
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

export default SnacksProducts;
