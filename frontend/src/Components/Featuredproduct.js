import React from 'react';
import '../Components/Featuredproduct.css'

const FeaturedProducts = () => {
  const featuredProducts = [
    { name: 'Product 1', price: '$10', image: 'https://5.imimg.com/data5/SELLER/Default/2020/12/OW/RT/WF/51068474/grocery-items-photography-500x500.png' },
    { name: 'Product 2', price: '$15', image: 'https://ik.imagekit.io/wlfr/wellness/images/products/342942-1.jpg' },
    { name: 'Product 3', price: '$20', image: 'https://www.unileverfoodsolutions.us/dam/global-ufs/mcos/nam/calcmenu-products/us/10077567275056/10077567275056_Hero_400x400.jpg' },
    { name: 'Product 4', price: '$25', image: 'https://truesouth.in/cdn/shop/files/Decoction_Rain.jpg?v=1707470484' },
    { name: 'Product 5', price: '$30', image: 'https://www.tasteofhome.com/wp-content/uploads/2019/07/Raspberries-shutterstock_254253385.jpg?fit=700%2C700' },
    { name: 'Product 6', price: '$35', image: 'https://m.media-amazon.com/images/I/51cMDaGSEjL.jpg' }
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
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {featuredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            
            {/* Buttons for Add to Cart and Buy Now */}
            <div className="button-container">
              <button
                onClick={() => handleAddToCart(product.name)}
                className="button add-to-cart"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product.name)}
                className="button buy-now"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
