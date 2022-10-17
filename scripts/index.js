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

const showFourMore = (arrayOfObjects) => {
	const noPopularRest = arrayOfObjects.filter((e) => !e.popular);
	const result = [];
	for (let i = 0; i <= noPopularRest.length; i += 4) {
		result.push(noPopularRest.slice(i, i + 4));
	}
};

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
const renderCartList = (product) => {
	const { id, name, img, price, subtitle, quantity } = product;
	return `
		<div class="items-cart">
			<img class="image-simulate" src="${img}" alt="imagen de producto" />
			<h3 class="items-cart-title">${name}</h3>
			<span class="items-cart-second-title">${subtitle}</span>
			<span class="items-cart-precio">$${price}</span>
			<div class="buttons-pedido-container">
				<button class="pedido-button-less" data-id=${id}>-</button>
				<span class="pedido-value">${quantity}</span>
				<button class="pedido-button-plus" data-id=${id}>+</button>
			</div>
		</div>
	`;
};

const cleanPrices = () => {
	total.textContent = "--";
	subtotal.textContent = "--";
	envio.textContent = "--";
};

const cartRender = () => {
	if (!cart.length) {
		itemsCartSelected.innerHTML = "<p>Tu carrito está vacío :(</p>";
		cleanPrices();
		return;
	}
	itemsCartSelected.innerHTML = cart.map(renderCartList).join("");
};
// -->  Carrito  <-- //

// Selecciona categoria y lo renderiza
renderMenu = (e) => {
	const clickData = e.target.dataset.type;
	console.log(clickData);
	menu.innerHTML = "";
	if (clickData) {
		const obtainProduct = productsArray.filter(
			(objeto) => objeto.category === clickData
		);
		console.log(obtainProduct);
		renderProduct = obtainProduct.map(
			(object) =>
				(menuContainer.innerHTML += `<div class="itemContainer">
		<img src="${object.img}" alt="imagen del item" srcset="" />
		<div class="itemDescription">
			<h3 class="itemTittle>${object.name}</h3>
			<p class="itemSubtittle">${object.subtitle}</p>
			<div class="itemBuy">
				<p class="price">$${object.price}</p>
				<button class="addToCart">Agregar</button>
			</div>
		</div>
	</div>
	`)
		);
	}
};
const init = () => {
	cartNavIcon.addEventListener("click", showCartMenu);
	closeButton.addEventListener("click", closeCartMenu);
	document.addEventListener("click", (e) => {
		if (!cartMenuContainer.contains(e.target) && e.target !== cartNavIcon) {
			closeCartMenu();
		}
	});
	document.addEventListener("click", (e) => renderMenu(e));
	filterMostPopulars(productsArray);
	cartRender();
};
init();
