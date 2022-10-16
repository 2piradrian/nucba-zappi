const cartMenuContainer = document.querySelector("#cart_menu_container");
const cartNavIcon = document.querySelector("#cart_nav_icon");
const closeButton = document.querySelector("#closeButton");

const productsArray = [
	{
		id: 1,
		name: "Muzzarela",
		category: "pizza",
		img: "./assets/img/pizzas/pizza3.png",
	},
	{
		id: 2,
		name: "Con peperoni",
		category: "pizza",
		img: "./assets/img/pizzas/pizza6.png",
	},
	{
		id: 3,
		name: "Con jamon crudo y rucula",
		category: "pizza",
		img: "./assets/img/pizzas/pizza2.png",
	},
	{
		id: 4,
		name: "Con vegetales",
		category: "pizza",
		img: "./assets/img/pizzas/pizza1.png",
	},
	{
		id: 5,
		name: "Con Cheddar y hongos",
		category: "pizza",
		img: "./assets/img/pizzas/pizza4.png",
	},
	{
		id: 6,
		name: "Pizza veggie",
		category: "pizza",
		img: "./assets/img/pizzas/pizza8.png",
	},
	{
		id: 7,
		name: "Hamburguesa completa",
		category: "hamburguesa",
		img: "./assets/img/products/completa.jgp",
	},
	{
		id: 8,
		name: "Con queso",
		category: "hamburguesa",
		img: "./assets/img/products/simpleQueso.webp",
	},
	{
		id: 9,
		name: "Con queso Brie y hongos",
		category: "hamburguesa",
		img: "./assets/img/products/mushroomBrie.jgp",
	},
	{
		id: 10,
		name: "Con barbacoa",
		category: "hamburguesa",
		img: "./assets/img/products/barbecue.webp",
	},
	{
		id: 11,
		name: "Con aros de cebolla",
		category: "hamburguesa",
		img: "./assets/img/products/onionRing.jgp",
	},
	{
		id: 12,
		name: "Veggie de lentejas",
		category: "hamburguesa",
		img: "./assets/img/products/veggie.jgp",
	},
	{
		id: 13,
		name: "Papas fritas",
		category: "papas",
		img: "./assets/img/products/fries.jgp",
	},
	{
		id: 14,
		name: "Con Bacon&Cheddar",
		category: "papas",
		img: "./assets/img/products/friesBacon.jgp",
	},
	{
		id: 15,
		name: "Con Chili",
		category: "papas",
		img: "./assets/img/products/friesChili.jgp",
	},
	{
		id: 16,
		name: "Con queso crema y ciboulette",
		category: "papas",
		img: "./assets/img/products/friesCreamChesse.jgp",
	},
	{
		id: 17,
		name: "Con carne",
		category: "wrap",
		img: "./assets/img/products/wrapMeat.jpg",
	},
	{
		id: 18,
		name: "Con atun",
		category: "wrap",
		img: "./assets/img/products/wrapAtun.jpg",
	},
	{
		id: 19,
		name: "De vegetales",
		category: "wrap",
		img: "./assets/img/products/wrapVeggie.webp",
	},
	{
		id: 20,
		name: "Tacos de carne",
		category: "mexicana",
		img: "./assets/img/products/tacosMeat.webp",
	},
	{
		id: 21,
		name: "Tacos Veggie",
		category: "mexicana",
		img: "./assets/img/products/tacosVeggie.jgp",
	},
	{
		id: 22,
		name: "Quesadilla",
		category: "mexicana",
		img: "./assets/img/products/quesadilla.jpg",
	},
	{
		id: 23,
		name: "Nachos con cheddar",
		category: "mexicana",
		img: "./assets/img/products/nachosCheddar.webp",
	},
	{
		id: 24,
		name: "Nachos full",
		category: "mexicana",
		img: "./assets/img/products/nachosBeans.jpg",
	},
	{
		id: 25,
		name: "De frutilla",
		category: "batido",
		img: "./assets/img/products/shakeStrawberry.webp",
	},
	{
		id: 26,
		name: "De chocolate",
		category: "batido",
		img: "./assets/img/products/shakeChocolate.jgp",
	},
	{
		id: 27,
		name: "Sprinkle",
		category: "batido",
		img: "./assets/img/products/shakeSprinkle.webp",
	},
	{
		id: 28,
		name: "De Mashmellow",
		category: "batido",
		img: "./assets/img/products/shakeMashmellow.jgp",
	},
];
