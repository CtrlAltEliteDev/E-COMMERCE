import ProductList from '../components/ProductList/ProductList';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <div className="page-header">
        <h1>All Products</h1>
        <p>Browse our complete collection</p>
      </div>
      <ProductList />
    </div>
  );
};

export default Products;

