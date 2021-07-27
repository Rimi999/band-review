init()

function init() {
	navi()
	sildeAbout()
	sildeTour()
	modal()
}

function navi() {
	$('.m-navi-wrapper').slideUp(0)
	$('.header-wrapper .bars').on('click', onNaviClick)
	$('.m-navi-wrapper .m-navi').on('click', onNaviLeave)
	$('.m-navi-wrapper').on('mouseleave', onNaviLeave)
	
	function onNaviClick() {
		$('.m-navi-wrapper').stop().slideToggle(300)
	}
	function onNaviLeave() {
		$('.m-navi-wrapper').stop().slideUp(300)
	}
}

function sildeAbout() {
	var swiper = new Swiper('.about-wrapper .swiper-container', 
	{ pagination: '.swiper-pagination', 
		observer: true, 
		observeParents: true,
		loop: true,
		autoplay: {delay: 2500, disableOnInteraction: false},
	});
	$('.swiper-slide').on('mouseover', function(){
		swiper.autoplay.stop();
	});
	$('.swiper-slide').on('mouseout', function(){
		swiper.autoplay.start();
	});
}

function sildeTour() {
	var swiper = new Swiper(".tour-wrapper .mySwiper", {
		
		loop: true,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			1399: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 15, },
			768: { slidesPerView: 2, slidesPerGroup: 2,spaceBetween: 15 },
			575: { slidesPerView: 1, slidesPerGroup: 1,spaceBetween: 15 },
		}
	});
}

function modal() {
	$('.tour-wrapper .swiper-slide').click(function(e) {
		$('.modal-wrapper').addClass('active')
		$('.modal-wrapper > .modal-wrap').css('transform')
		$('.modal-wrapper > .modal-wrap').css('transform', 'translateY(0)')
	})

	$('.modal-wrapper .bt-close').click(function(e) {
		$('.modal-wrapper').removeClass('active')
		$('.modal-wrapper .modal-wrap').css('transform', 'translateY(-100vh)')
	})
	
	$('.modal-wrapper .modal-wrap').click(function(e) {
		e.stopPropagation()
	})
}