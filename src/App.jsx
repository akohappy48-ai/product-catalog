import React, { useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import products from './data/products.js';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');

  function handleAddToCart(productTitle) {
    setCartCount((count) => count + 1);
    setLastAdded(productTitle);
  }

  return (
    <main className="store-container">
      <header className="store-header">
        <p className="eyebrow">DCIT26 · APPLICATION DEVELOPMENT</p>
        <h1>CvSU Mini Store</h1>
        <p className="subtitle">A simple product catalog built with reusable React components.</p>
      </header>

      <section className="cart-message" aria-live="polite">
        {cartCount === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>Items added to cart: <strong>{cartCount}</strong> (Last added: <strong>{lastAdded}</strong>)</p>
        )}
      </section>

      <section className="product-grid" aria-label="Product catalog">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.id === 1 && <span className="badge new-badge">New</span>}
            {product.id === 5 && <span className="badge sale-badge">Sale</span>}
          </ProductCard>
        ))}
      </section>

      <footer className="store-footer">Built for Laboratory Exercise 3 · React Props and Component Communication</footer>
    </main>
  );
}

export default App;
