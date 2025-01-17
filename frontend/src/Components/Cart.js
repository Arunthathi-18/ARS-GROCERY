import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import '../Components/Cart.css'
const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
        
      <h1 className='cartt'>Cart</h1>
      <ul className='crtt'>
        {cart.map((product) => (
            
          <li className='cttt' key={product._id}>
            <h2 className='vcc'>{product.name}</h2>
            <p className='vct'>Quantity: {product.quantity}</p>
            <p className='cvc'>Price: ₹{product.price}</p>
            <img src={product.imageUrl} alt={product.name}
            className='proimage' />
            
          </li>
          
        ))}
      </ul>
      <p className='dtext'> EXPress Delivery At your Door Step</p>
    
    </div>
  );
};

export default Cart;