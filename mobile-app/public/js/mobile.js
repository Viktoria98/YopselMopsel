let burgerButton = document.querySelector(".burger-btn");
let dropMenu = document.querySelector(".menu");
let catalogMenuItems = document.querySelectorAll(".catalog-menu_item");
let contentSection = document.querySelector(".content");
let background = document.querySelector(".back");
let footer = document.querySelector("footer");

burgerButton.onclick = () => {
	dropMenu.classList.toggle("hidden");
	background.classList.toggle("hidden");
}

burgerButton.onblur = () => {
	dropMenu.classList.add("hidden");
	background.classList.add("hidden");
}




let search = document.querySelector(".search");
let openedSearch = document.querySelector("#search");
let backBtn = document.querySelector(".backSearch");

search.onclick = () => {
	openedSearch.classList.remove("hidden");
	backBtn.classList.remove("hidden");
	background.classList.remove("hidden");
}

backBtn.onclick = () => {
	background.classList.add("hidden");
	openedSearch.classList.add("hidden");
	backBtn.classList.add("hidden");
}

let openPhone = document.querySelector(".openPhone");
let modalForm = document.querySelector(".modal-form");
let closeBtn = document.querySelector(".close");

openPhone.onclick = () => {
	modalForm.classList.remove("hidden");
}

closeBtn.onclick = () => {
	modalForm.classList.add("hidden");
}

