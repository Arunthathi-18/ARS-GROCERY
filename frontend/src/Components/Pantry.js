import React from 'react';

const PantryProducts = () => {
  const products = [
    { name: 'Rice', description: 'Premium quality long-grain rice.', price: '$10.00', image: 'https://m.media-amazon.com/images/I/61gJSi+OdJL.jpg' },
    { name: 'Pasta', description: 'Durum wheat semolina pasta.', price: '$3.50', image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/RU/CN/NY/108031819/best-quality-best-price-pasta-125-350-700-grams-packing-from-3a-home-needs-500x500.jpg' },
    { name: 'Canned Beans', description: 'Ready-to-eat canned beans.', price: '$1.80', image: 'https://www.pngitem.com/pimgs/m/18-186751_can-of-baked-beans-hd-png-download.pnghttps://www.bushbeans.com/-/media/bushsbeans/salsifyimports/00039400017004_Web.png' },
    { name: 'Spices', description: 'A variety of aromatic spices for your dishes.', price: '$2.00', image: 'https://5.imimg.com/data5/VB/TB/HZ/SELLER-69094599/spice-packaging-bags.png' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
    // Implement cart functionality here
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
    // Implement buy functionality here
  };

  return (
    <div className="category-page">
      <h2>Pantry Products</h2>
      <p>Stock up on essentials for your pantry. From grains to spices, we have everything you need.</p>
      
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

export default PantryProducts;
