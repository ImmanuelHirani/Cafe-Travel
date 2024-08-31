const cartTrigger = document.getElementById("cartTrigger"),
  sidebarCart = document.getElementById("sidebarCart"),
  closeCart = document.getElementById("closeCart");

cartTrigger.addEventListener("click", () => {
  cartTrigger.classList.toggle("cart-active");
  sidebarCart.classList.add("sidebar-active");
});

closeCart.addEventListener("click", () => {
  cartTrigger.classList.remove("cart-active");
  sidebarCart.classList.remove("sidebar-active");
});
