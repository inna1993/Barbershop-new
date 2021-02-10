$(document).ready(function() {
	// $('body').hide()
})

const swiper = new Swiper('.swiper-container', {
 
  loop: true,

  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
  },
  
  autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});

