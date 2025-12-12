import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';
import './Header.css';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const { user } = useUser();
  const cartCount = getCartItemsCount();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/profile" className="header-avatar-link">
            <img src={user.avatar} alt={user.name} className="header-avatar" />
          </Link>
          <Link to="/" className="logo">
            <h1>ShopHub</h1>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

