const addItemButtons = document.querySelectorAll(".add-item");
const cartHeading = document.getElementById("cart-heading");
const cartItemsContainer = document.querySelector(".cart-items");
const cartPara = document.getElementById("cart-para");
const orderConfirmation = document.querySelector(".order-confirmation");
const orderList = document.querySelector(".order-list");
const totalOrderAmount = document.querySelector(".total-order h3");
const newOrderBtn = document.querySelector(".new-order");
const overlay = document.querySelector(".overlay");
const cart = [];

const itemsData = [
  {
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    image: "assets/images/image-waffle-thumbnail.jpg",
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    image: "assets/images/image-creme-brulee-thumbnail.jpg",
  },
  {
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    image: "assets/images/image-macaron-thumbnail.jpg",
  },
  {
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    image: "assets/images/image-tiramisu-thumbnail.jpg",
  },
  {
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    image: "assets/images/image-baklava-thumbnail.jpg",
  },
  {
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    image: "assets/images/image-meringue-thumbnail.jpg",
  },
  {
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    image: "assets/images/image-cake-thumbnail.jpg",
  },
  {
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    image: "assets/images/image-brownie-thumbnail.jpg",
  },
  {
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    image: "assets/images/image-panna-cotta-thumbnail.jpg",
  },
];

function updateCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.classList.add("empty");
    cartItemsContainer.classList.remove("filled");

    cartItemsContainer.innerHTML = `
      <img src="assets/images/illustration-empty-cart.svg" alt="empty-img"/>
      <p id="cart-para">Your added items will appear here</p>`;
  } else {
    cartItemsAdded();
  }

  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartHeading.textContent = `Your cart (${totalItemsInCart})`;
}

function cartItemsAdded() {
  cartItemsContainer.classList.remove("empty");
  cartItemsContainer.classList.add("filled");

  let subtotal = 0;

  cart.forEach((cartItemObj, index) => {
    const { name, price, quantity } = cartItemObj;
    const total = (quantity * price).toFixed(2);
    subtotal += parseFloat(total);

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
        <div class="cart-item-details">
          <h5>${name}</h5>
          <div class="cart-item-quantity-price">
            <p class="cart-item-quantity">${quantity}x</p>    
            <p class="cart-item-price-perItem">@ $${price.toFixed(2)}</p>
            <p class="cart-item-price">$${(quantity * price).toFixed(2)}</p>
          </div>
        </div>
        <img
          src="assets/images/icon-remove-item.svg"
          alt="img"
          class="remove-item" style="cursor: pointer" data-index="${index}"
        >
      `;

    cartItemsContainer.appendChild(cartItem);
  });

  // 💰 Order Total
  const cartTotal = document.createElement("div");
  cartTotal.classList.add("cart-total");
  cartTotal.innerHTML = `
       <p>Order Total</p>
       <h2>$${subtotal.toFixed(2)}</h2>
     `;
  cartItemsContainer.appendChild(cartTotal);

  // 🌱 Carbon neutral message
  const carbonNote = document.createElement("div");
  carbonNote.classList.add("carbon-note");
  carbonNote.innerHTML = `
       <img src="assets/images/icon-carbon-neutral.svg" alt="leaf" width="20" height="20"/>
       <p>This is a <span id="carbon">carbon-neutral</span> delivery</p>
     `;
  cartItemsContainer.appendChild(carbonNote);

  confirmOrder();
}

function confirmOrder() {
  const confirmOrder = document.createElement("button");
  confirmOrder.textContent = "Confirm Order";
  confirmOrder.classList.add("confirmOrderBtn");
  cartItemsContainer.appendChild(confirmOrder);
}

addItemButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const itemDetails = itemsData[index];
    const existingItem = cart.find((i) => i.name === itemDetails.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        name: itemDetails.name,
        price: itemDetails.price,
        quantity: 1,
      });
    }

    updateCart();
  });
});

cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    const index = parseInt(e.target.getAttribute("data-index"));
    cart.splice(index, 1);
    updateCart();
  }
});

cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("confirmOrderBtn")) {
    orderConfirmation.style.display = "block";
    overlay.style.display = "block";

    orderList.innerHTML = "";

    let totalAmount = 0;

    cart.forEach((item) => {
      const itemTotal = (item.price * item.quantity).toFixed(2);
      totalAmount += parseFloat(itemTotal);

      const li = document.createElement("li");
      li.innerHTML = `
        <div class="order-item">
          <img src="${getThumbnail(item.name)}" alt="img" />
          <div class="order-item-details">
            <p>${item.name}</p>
            <div class="order-item-quantity-price">
              <p class="order-item-quantity">${item.quantity}x</p>
              <p class="order-item-price">@ $${item.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <p class="order-price">$${itemTotal}</p>
      `;
      orderList.appendChild(li);
    });

    totalOrderAmount.textContent = `$${totalAmount.toFixed(2)}`;
  }
});

function getThumbnail(name) {
  const item = itemsData.find((item) => item.name === name);
  return item ? item.image : "assets/images/placeholder.jpg";
}

newOrderBtn.addEventListener("click", () => {
  cart.length = 0;
  updateCart();
  orderConfirmation.style.display = "none";
  overlay.style.display = "none";
});
