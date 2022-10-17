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

//funcion de renderizado de los más populares en HTML.
const renderMostPopulars = (mostPopularsArray)=>{
	mostPopularContainer.innerHTML = mostPopularsArray.map((desestructuringPopulars)).join('');
}

// funcion solo para desestructurar los objs.
const desestructuringPopulars = (popularObj)=>{
	const {name, img, price, subtitle} = popularObj;

	return `
	<div class="itemContainer">
							<img src="${img}" alt="imagen del item" srcset="" />
							<div class="itemDescription">
								<h3 class="itemTitle">${name}</h3>
								<p class="itemSubtitle">${subtitle}</p>
								<div class="itemBuy">
									<p class="price">$ ${price}</p>
									<button class="addToCart">Agregar</button>
								</div>
							</div>
						</div>
	`
}

// filtra los populares y llama al render
const filterMostPopulars = (arrayOfObjects)=>{
	const mostPopularFiltered = arrayOfObjects.filter(e=> e.popular);
	renderMostPopulars(mostPopularFiltered);	
}

const init = () => {
	cartNavIcon.addEventListener("click", showCartMenu);
	closeButton.addEventListener("click", closeCartMenu);
	document.addEventListener('click',(e)=>{
		if(!cartMenuContainer.contains(e.target) && e.target !== cartNavIcon){closeCartMenu()};
	})
	addEventListener('DOMContentLoaded', filterMostPopulars(productsArray)); //inicializamos la llamada al filter de populares.
};
init();
