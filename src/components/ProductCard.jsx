import React from 'react';
function ProductCard({
  title,
  price,
  category = 'General',
  inStock,
  onAddToCart,
  children,
}) {
  return (
    <article className={`product-card ${inStock ? '' : 'out-of-stock'}`}>
      <div className="product-card-top">
        <span className="category">{category}</span>
        {children}
      </div>

      <h2>{title}</h2>
      <p className="price">₱{price.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

      <div className="product-card-bottom">
        <span className={`stock-label ${inStock ? 'available' : 'unavailable'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
        <button type="button" onClick={() => onAddToCart(title)} disabled={!inStock}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
