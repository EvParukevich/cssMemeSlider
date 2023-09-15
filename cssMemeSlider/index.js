// carousel
const carousel = document.querySelectorAll("[data-carousel]")
const ellipses = document.querySelector(".about_ellipse");
const slides = carousel[0].closest("[data-carousel]").querySelector("[data-slides]");
let title = document.querySelector(".title");

const getIndex = (slides, activeSlide, offset) => {	
	let newIndex = [...slides.children].indexOf(activeSlide) + offset	
    if (newIndex < 0) newIndex = slides.children.length + newIndex
    if (newIndex >= slides.children.length) newIndex = newIndex - slides.children.length
	return newIndex;
};

document.querySelectorAll('.slides_ellipse').forEach((ellipse, index) => {
  
  	ellipse.addEventListener('click', (e) => {
		const activeSlide = slides.querySelector("[data-active]")
  		const leftSlide = slides.querySelector("[data-left]")
  		const rightSlide = slides.querySelector("[data-right]")
  		const activeEllipse = ellipses.querySelector("[data-active]")

		if ([...slides.children].indexOf(activeSlide) === index) {
			e.stopPropagation();

		} else {

			let newActiveSlide = [...slides.children][index];			
			let leftIndex = getIndex(slides, newActiveSlide, -1);
			let rightIndex = getIndex(slides, newActiveSlide, 1);		
	
			ellipse.dataset.active = true
			slides.children[index].dataset.active = true
			delete activeSlide.dataset.active
			delete activeEllipse.dataset.active	
	
			slides.children[leftIndex].dataset.left = true
			delete leftSlide.dataset.left
		
			slides.children[rightIndex].dataset.right = true
			delete rightSlide.dataset.right

			if (index === 0) {
				delete title.dataset.active
				title.dataset.active = true;				
				title.textContent = '1';
			} else 
			
			if (index === 1) {
				delete title.dataset.active
				title.dataset.active = true;
				title.textContent = '2'
			}  else 

			if (index === 2) {
				delete title.dataset.active
				title.dataset.active = true;
				title.textContent = '3'
			}  else 

			if (index === 3) {
				delete title.dataset.active
				title.dataset.active = true;
				title.textContent = '4'
			}  else 

			if (index === 4) {
				delete title.dataset.active
				title.dataset.active = true;
				title.textContent = '5'
			}  else 

			if (index === 5) {
				delete title.dataset.active
				title.dataset.active = true;
				title.textContent = '6'
			}  else 

			if (index === 6) {
				delete title.dataset.active
				title.dataset.active = true;
				title.textContent = '7'
			}  else {
				delete title.dataset.active
				title.dataset.active = true;
				title.textContent = '8'
			}

		}		

	})
});