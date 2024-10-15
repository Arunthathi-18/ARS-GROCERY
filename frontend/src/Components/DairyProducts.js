import React from 'react';

const DairyProducts = () => {
  const products = [
    { name: 'Milk', description: 'Fresh whole milk rich in nutrients.', price: '$2.00', image: 'https://sapinsdairy.com/wp-content/uploads/2021/12/milk-bottle.png' },
    { name: 'Cheese', description: 'Delicious cheese from a variety of types.', price: '$5.00', image: 'https://thejourneyndestination.com/wp-content/uploads/2022/02/20220206_122506.jpg?w=836' },
    { name: 'Yogurt', description: 'Creamy yogurt in various flavors.', price: '$3.50', image: 'https://media.justo.mx/products/18818_Yogurt_Yoplait_Fresa_125g_7501040090745.jpg' },
    { name: 'Butter', description: 'Smooth butter perfect for baking and cooking.', price: '$4.00', image: 'https://www.jiomart.com/images/product/original/490306318/amul-school-pack-butter-100-g-pack-product-images-o490306318-p490306318-3-202203170317.jpg?im=Resize=(420,420)' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
  };

  return (
    <div className="category-page">
      <h2>Dairy Products</h2>
      <p>Explore our selection of dairy products, including fresh milk, cheese, yogurt, and butter.</p>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Action Buttons */}
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

export default DairyProducts;