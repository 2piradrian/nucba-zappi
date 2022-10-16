// Mostrar carrito de compras
const showCartMenu = () => {
	cartMenuContainer.style.display = "grid";
};
// Ocultar carrito de compras
const closeCartMenu = () => {
	cartMenuContainer.style.display = "none";
};

// funciones
const showCartMenu = () => {
	cartMenuContainer.style.display = "grid";
};
const closeCartMenu = () => {
	cartMenuContainer.style.display = "none";
};

// init
const init = () => {
	cartNavIcon.addEventListener("click", showCartMenu);
	closeButton.addEventListener("click", closeCartMenu);
};
init();
