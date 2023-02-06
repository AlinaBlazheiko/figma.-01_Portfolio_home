


let menuIcon = document.querySelector('.menu__icon');
let menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function(){
	menuIcon.classList.toggle('active');
	menu.classList.toggle('active');
})