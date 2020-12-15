const text = document.querySelectorAll(".text");
const changeChevron = document.querySelectorAll(".changeChevron");
const menu = document.querySelector('.menu');

for (let i = 0; i < changeChevron.length; i++) {
	changeChevron[i].addEventListener("click", function() {
		changeChevron[i].classList.toggle("top");
		text[i].classList.toggle("hidden");
		
	});
}

if(window.SimpleSlide) {
	new SimpleSlide({
		slide: "quote",
		time: 5000,
		nav: true
	});
}

if(window.SimpleSlide) {
	new SimpleAnime();
}

menu.addEventListener('click', function() {
	this.classList.toggle('open');
});