import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h1 className='usname'>HELLO! {location.state?.id}</h1>
      
      <section>
        <h2 className='wel'>Welcome to Our Grocery Store</h2>
        <p className='para1'>Shop from a variety of fresh groceries delivered to your door.</p>
      </section>

      {/* Image Section with Links and Descriptions */}
      <div className="image-links">
        <div className="image-card">
          <a href="/vegetables-fruits">
            <img className='d2' src="https://wallpaperaccess.com/full/1306611.jpg" alt="Vegetables" />
          </a>
          <p className="image-description">Fresh Vegetables & Fruits</p>
        </div>

        <div className="image-card">
          <a href="/dairy-eggs">
            <img className='d2' src="https://wallpaperaccess.com/thumb/3520772.jpg" alt="Dairy Products" />
          </a>
          <p className="image-description">Dairy & Eggs</p>
        </div>

        <div className="image-card">
          <a href="/snacks-confectionery">
            <img className='d2' src="https://wallpaperaccess.com/thumb/1891216.jpg" alt="Snacks" />
          </a>
          <p className="image-description">Snacks & Confectionery</p>
        </div>

        <div className="image-card">
          <a href="/beverages">
            <img className='d2' src="https://img.freepik.com/free-photo/colorful-soda-drinks-macro-shot_53876-32237.jpg?size=626&ext=jpg&ga=GA1.1.1603758944.1727611697&semt=ais_hybrid" alt="Beverages" />
          </a>
          <p className="image-description">Refreshing Beverages</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
