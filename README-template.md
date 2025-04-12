# 🍰 Dessert Cart Web App

A modern, interactive, and responsive dessert shopping cart interface built using **HTML**, **CSS**, and **JavaScript**. This project features a catalog of dessert items, a dynamic shopping cart, quantity controls, and an order confirmation modal — all styled with a clean UI and responsive design for mobile devices.

---

## 🚀 Features

### 🧁 Product Listing
- Displays a grid of dessert items with:
  - **Image**
  - **Name**
  - **Category**
  - **Price**

### 🛒 Add to Cart Functionality
- Each item has an **“Add to Cart”** button.
- Once added:
  - The button is replaced by **quantity controls (+/-)**.
  - The dessert image gets an **orange border** to indicate it's in the cart.
  - If removed, the border and quantity controls disappear.

### ➕ Quantity Control
- Users can:
  - **Increase** or **decrease** item quantity.
  - Automatically removes the item if quantity reaches **0**.

### 📦 Cart Sidebar
- Shows a **list of items** added with:
  - Name
  - Quantity
  - Price per unit
  - Total price per item
- Displays **total cart value**.
- Includes **Remove** button to delete items.

### ✅ Order Confirmation Modal
- "Confirm Order" button triggers a modal with:
  - Ordered item list
  - Total price
  - Summary UI
- Includes a **"New Order"** button to reset cart and modal.

### 📱 Responsive Design
- Mobile-friendly layout using **media queries**:
  - Converts desktop grid to stacked layout
  - Scales images and buttons for smaller screens
  - Optimized for devices under 768px and 480px widths

---

## 🧩 Technologies Used

| Technology | Purpose              |
|------------|----------------------|
| HTML5      | Structure and layout |
| CSS3       | Styling and animation|
| JavaScript | Interactivity & logic|

---

## 📂 Folder Structure


```plaintext
/project-root
│
├── index.html     # Main HTML file
├── style.css      # All UI and responsive styles
└── script.js      # Cart logic and DOM manipulation


## 👨‍🍳 Author

Created with ❤️ for sweets & code.  
Feel free to fork or contribute!
