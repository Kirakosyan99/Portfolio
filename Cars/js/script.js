window.addEventListener('scroll', ()=>{
	document.querySelector('nav').classList.toggle
	('window-scroll',window.scrollY > 100)
});
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
	faq.addEventListener('click', ()=>{
		faq.classList.toggle('open');

		const icon = faq.querySelector('.faq_icon i');
		if(icon.classList === 'uil uil-plus') {
			icon.classList = "uil uil-minus";
		}else{
			icon.classList = "fa fa-plus";
		}
	})
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}