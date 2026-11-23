import React from 'react';

function SearchBar({
  searchText,
  onSearchTextChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
  onClearFilters,
}) {
  return (
    <section className="search-panel" aria-label="Search and filter products">
      <label className="search-field">
        <span>Search products</span>
        <input
          type="search"
          value={searchText}
          onChange={(event) => onSearchTextChange(event.target.value)}
          placeholder="e.g. mouse, notebook..."
        />
      </label>

      <label className="search-field">
        <span>Category</span>
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="School Supplies">School Supplies</option>
          <option value="Accessories">Accessories</option>
        </select>
      </label>

      <label className="search-field">
        <span>Sort by price</span>
        <select value={sortOrder} onChange={(event) => onSortOrderChange(event.target.value)}>
          <option value="default">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </label>

      <button className="clear-filters" type="button" onClick={onClearFilters}>
        Clear Filters
      </button>
    </section>
  );
}

export default SearchBar;
