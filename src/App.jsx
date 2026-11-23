import React, { useEffect, useMemo, useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import products from './data/products.js';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');
  const [searchText, setSearchText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  // Wait until the user pauses typing for 300ms before filtering.
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const filteredProducts = useMemo(() => {
    const keyword = debouncedSearch.trim().toLowerCase();

    const matchingProducts = products.filter((product) => {
      const matchesKeyword = product.title.toLowerCase().includes(keyword);
      const matchesCategory = category === 'All' || product.category === category;
      return matchesKeyword && matchesCategory;
    });

    const sortedProducts = [...matchingProducts];
    if (sortOrder === 'price-low-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-high-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  }, [debouncedSearch, category, sortOrder]);

  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  function handleAddToCart(productTitle) {
    setCartCount((count) => count + 1);
    setLastAdded(productTitle);
  }

  function handleClearFilters() {
    setSearchText('');
    setDebouncedSearch('');
    setCategory('All');
    setSortOrder('default');
  }

  return (
    <main className="store-container">
      <header className="store-header">
        <p className="eyebrow">DCIT26 · APPLICATION DEVELOPMENT</p>
        <h1>CvSU Mini Store</h1>
        <p className="subtitle">Find your essentials with live search and filters.</p>
      </header>

      <section className="cart-message" aria-live="polite">
        {cartCount === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>Items added to cart: <strong>{cartCount}</strong> (Last added: <strong>{lastAdded}</strong>)</p>
        )}
      </section>

      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        onClearFilters={handleClearFilters}
      />

      <p className="results-count" aria-live="polite">
        Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
      </p>

      {filteredProducts.length > 0 ? (
        <section className="product-grid" aria-label="Filtered product catalog">
          {filteredProducts.map((product) => (
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
      ) : (
        <section className="empty-state" role="status">
          <h2>No products found.</h2>
          <p>Try a different keyword or category.</p>
          <button type="button" onClick={handleClearFilters}>Clear Filters</button>
        </section>
      )}

      <footer className="store-footer">
        Built for Laboratory Exercise 4 · React useState and useEffect
      </footer>
    </main>
  );
}

export default App;
