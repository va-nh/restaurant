const burger = document.querySelector('.menu-burger');
		menu = document.querySelector('.header-top__cap');
		body = document.querySelector('body');

const slides = document.querySelectorAll('.slide'),
		prev = document.querySelector('.comments__arrow_L_wrapper'),
		next = document.querySelector('.comments__arrow_R_wrapper'),
		dots = document.querySelectorAll('.comments__point');



	burger.addEventListener('click', ()=> {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
});


let index = 0;


const activeSlide = n => {
	for(slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeDot = n => {
	for(comments__point of dots) {
		comments__point.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}


const nextSlide = () => {
	if(index == slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}

const prevSlide = () => {
	if(index == 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);