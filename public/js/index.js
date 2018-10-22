let catalogButton = document.querySelector(".catalog-btn");
let catalogMenu = document.querySelector(".catalog-menu");
let catalogMenuItems = document.querySelectorAll(".catalog-menu_item");
let contentSection = document.querySelector(".content");
let footer = document.querySelector("footer");

catalogButton.onclick = () => {
	catalogMenu.classList.toggle("hidden");
	Close();
}

catalogButton.onblur = () => {
	catalogMenu.classList.add("hidden");
	Close();
}

for(let i = 0; i < catalogMenuItems.length; i++){
	catalogMenuItems[i].onmouseover = () => {
		Close();
		let childElems = catalogMenuItems[i].getElementsByTagName('*');
		if(childElems[0].classList.contains('sub-menu')){
			childElems[0].classList.remove("hidden");
			contentSection.classList.add("back");
			footer.classList.add("back");
		}
	}
}

document.onmouseover = (event) => {
	var traget = event.traget;
	if(target.className != 'sub-menu'){
		Close();
	}
}

const Close = () => {
	for(let i = 0; i < catalogMenuItems.length; i++){
		let childElems = catalogMenuItems[i].getElementsByTagName('*');
		if(childElems[0].classList.contains('sub-menu')){
			childElems[0].classList.add("hidden");
			contentSection.classList.remove("back");
			footer.classList.remove("back");
		
	}
}
}



