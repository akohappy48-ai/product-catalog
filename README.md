# CvSU Mini Store — Laboratory Exercise 3

A Mini Product Catalog built with React and Vite to demonstrate props, component communication, conditional rendering, children, and list rendering.

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

## Features
- Eight sample products with `id`, `title`, `price`, `category`, and `inStock`.
- Reusable `ProductCard` with destructured props and a default category.
- Peso prices formatted with two decimal places.
- In-stock and out-of-stock states, including a disabled button for unavailable products.
- `onAddToCart` callback sends the selected product title to the parent.
- Parent `App` tracks cart count and last added item with `useState`.
- `children` displays New and Sale badges.
- Responsive CSS grid.

## Guide Questions

1. **What is the difference between props and state?** Props are values passed from a parent component to a child. State is data a component manages and can update over time.
2. **Why can a child component not modify the props it receives?** Props are read-only. Keeping them read-only makes data flow predictable and lets the parent control the values.
3. **How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?** The parent passes a function down as a prop. When the child calls that function with a product title, the function runs in the parent and updates the parent's state.
4. **Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?** A unique key helps React identify which list item changed. Missing or duplicated keys can cause warnings and make updates less predictable.
5. **What does the children prop allow you to do that a normal prop does not?** It lets a component receive and display nested content placed between its opening and closing tags, such as a badge or custom markup.

## Git commit plan
1. `chore: set up Vite React project`
2. `feat: add product data and reusable ProductCard`
3. `feat: implement cart callback and state message`
4. `style: add responsive product catalog design`
