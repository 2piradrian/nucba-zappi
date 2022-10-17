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

const showFourMore = (arrayOfObjects)=>{
	const noPopularRest = arrayOfObjects.filter(e=>!e.popular);
	const result = [];
	for(let i = 0; i<= noPopularRest.length; i+=4)
	{
		result.push(noPopularRest.slice(i, i+4));
	}
}

//funcion de renderizado de los más populares en HTML.
const renderMostPopulars = (mostPopularsArray) => {
	mostPopularContainer.innerHTML = mostPopularsArray.map(desestructuringPopulars).join("");
};

// funcion solo para desestructurar los objs.
const desestructuringPopulars = (popularObj) => {
	const { name, img, price, subtitle, popular } = popularObj;

	return `
	<div class="itemContainer">
		<h2 class="popular-h2 ${popular ? "" : "disabled"}">Popular</h2>
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
	`;
};

// Filtra los populares y llama al render
const filterMostPopulars = (arrayOfObjects) => {
	const mostPopularFiltered = arrayOfObjects.filter((e) => e.popular);
	renderMostPopulars(mostPopularFiltered);
};

// Funciones carrito

// --> <-- //
const init = () => {
	cartNavIcon.addEventListener("click", showCartMenu);
	closeButton.addEventListener("click", closeCartMenu);
	document.addEventListener("click", (e) => {
		if (!cartMenuContainer.contains(e.target) && e.target !== cartNavIcon) {
			closeCartMenu();
		}
	});
<<<<<<< Updated upstream
	addEventListener("DOMContentLoaded", filterMostPopulars(productsArray)); //inicializamos la llamada al filter de populares.
	showMoreButton.addEventListener('click',(e)=>(showFourMore(productsArray)));
=======
	filterMostPopulars(productsArray);
>>>>>>> Stashed changes
};
init();
