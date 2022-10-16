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

//se renderizan los filtrados populares que le llegan de parametro
const renderMostPopulars = (arrayToRender) =>{
	console.log(arrayToRender)
	return `<div class="itemContainer">
					<img src="/assets/img/pizzas/pizza1.png" alt="imagen del item" srcset="" />
					<div class="itemDescription">
							<h3 class="itemTitle">La Mr. Pit</h3>
							<p class="itemSubtitle">Solo para expertos</p>
							<div class="itemBuy">
							<p class="price">$ 350</p>
							<button class="addToCart">Agregar</button>
					</div>
			</div>`
}
// se filtran los mas populares
const filterMostPopulars = (arrayOfObjects)=>{
	const mostPopularFiltered = arrayOfObjects.filter(e=> e.popular);
	renderMostPopulars(mostPopularFiltered)
}

const init = () => {
	cartNavIcon.addEventListener("click", showCartMenu);
	closeButton.addEventListener("click", closeCartMenu);
	document.addEventListener('click',(e)=>{
		if(!cartMenuContainer.contains(e.target) && e.target !== cartNavIcon){closeCartMenu()};
	})
	addEventListener('DOMContentLoaded', filterMostPopulars(productsArray));
};
init();
