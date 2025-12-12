import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList/ProductList';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopHub</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Home;



