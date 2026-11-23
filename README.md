# CvSU Mini Store — Laboratory Exercise 4

A React and Vite mini product catalog extended with controlled live search, category filtering, price sorting, and a 300ms debounce effect. The original Lab 3 product cards and Add to Cart behavior are retained.

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
```

## Lab 4 features
- Controlled keyword search, category dropdown, and price sorting controls in reusable `SearchBar`.
- `searchText` updates immediately while `debouncedSearch` updates after 300ms.
- Debounce cleanup with `clearTimeout` prevents outdated timers from applying.
- Case-insensitive product-title matching and category filtering.
- Price sorting uses a copied array, preserving the original `products` data.
- Result count and friendly empty state.
- Browser tab title updates when the result count changes.
- Clear Filters resets keyword, category, and sorting.
- Existing cart count, last-added message, ProductCard, and badges remain functional.
- Responsive search controls and product grid.

## Guide Questions

1. **Why do we use two separate states, `searchText` and `debouncedSearch`, instead of only one?**  
   `searchText` shows every character the user types immediately. `debouncedSearch` changes only after the user pauses for 300 milliseconds, so filtering does not need to run for every keystroke.

2. **What would happen if the debounce effect did not return a cleanup function?**  
   Older timers would continue running after the user types again. They could update the debounced value unnecessarily and cause extra renders or outdated updates.

3. **What is the purpose of the dependency array? What happens if it is empty (`[]`)? What happens if it is left out completely?**  
   The dependency array tells React which values an effect depends on. An empty array runs the effect after the initial mount only. If it is omitted, the effect runs after every render.

4. **Why should we avoid sorting the original products array directly?**  
   JavaScript's `sort()` changes the array in place. Sorting the original imported data could mutate shared data and create unexpected behavior. This project sorts a copy using `[...matchingProducts]`.

5. **Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.**  
   It is better to calculate it from `debouncedSearch`, `category`, and `sortOrder`. The list is derived from those values, so separate state would duplicate information and could become out of sync.

## Behavior checklist
- [x] Search keyword matches product titles without case sensitivity.
- [x] Search waits for a 300ms pause before filtering.
- [x] Category filtering works with the keyword.
- [x] Default, low-to-high, and high-to-low sorting work.
- [x] Original products array is not sorted or mutated.
- [x] Result count and empty-state message are displayed.
- [x] Clear Filters restores all default filter values.
- [x] Browser title includes the current result count.
- [x] Add to Cart continues to update the cart message.

## Git submission
The assignment requests a `lab4-live-search` branch, at least four meaningful commits, and pushes of both `main` and `lab4-live-search` to GitHub.
