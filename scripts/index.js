// Funcion para guardar carrito en local storage
let carrito = JSON.parse(localStorage.getItem("cart")) || [];
const saveToLocalStorage = (carrito) => {
	localStorage.setItem("carrito", JSON.stringify(carrito));
};
// Mostrar carrito de compras
const showCartMenu = () => {
	cartMenuContainer.style.display = "grid";
};
// Ocultar carrito de compras
const closeCartMenu = () => {
	cartMenuContainer.style.display = "none";
};

const init = () => {
	cartNavIcon.addEventListener("click", showCartMenu);
	closeButton.addEventListener("click", closeCartMenu);
	document.addEventListener('click',(e)=>{
		if(!cartMenuContainer.contains(e.target) && e.target !== cartNavIcon){closeCartMenu()};
	})
};
init();
