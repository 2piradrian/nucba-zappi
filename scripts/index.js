// variables
const cartMenuContainer = document.querySelector('#cart_menu_container');
const cartNavIcon = document.querySelector('#cart_nav_icon');
const closeButton = document.querySelector('#closeButton');

// funciones
const showCartMenu = ()=>{
    cartMenuContainer.style.display="grid";
}
const closeCartMenu = ()=>{
    cartMenuContainer.style.display="none";
}

// init
const init = () =>{
    cartNavIcon.addEventListener('click', showCartMenu);
    closeButton.addEventListener('click',closeCartMenu);
}
init();