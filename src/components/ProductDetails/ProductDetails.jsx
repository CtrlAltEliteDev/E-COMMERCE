import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details-container">
        <div className="not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/products')} className="back-btn">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="product-details-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      <div className="product-details">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} className="detail-image" />
        </div>
        <div className="product-details-section">
          <h1 className="detail-name">{product.name}</h1>
          <div className="detail-rating">
            <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
            <span className="rating-text">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          <div className="detail-price-section">
            <span className="detail-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="detail-original-price">${product.originalPrice.toFixed(2)}</span>
                <span className="detail-discount">-{discount}%</span>
              </>
            )}
          </div>
          <p className="detail-description">{product.description}</p>
          <div className="detail-category">
            <strong>Category:</strong> {product.category}
          </div>
          <div className="detail-actions">
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(-1)} className="quantity-btn">-</button>
              <span className="quantity-value">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)} className="quantity-btn">+</button>
            </div>
            <button
              className="add-to-cart-detail-btn"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



