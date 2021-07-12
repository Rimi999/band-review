init()

function init() {
	navi()
	mNavi()
	slide()
	modal()
	map()
}

function navi() {
	$('.header-wrapper .sub-wrap').slideUp(0)
	$('.navi.more').on('click', openNavi)
	$('.navi.more').on('mouseover', hoverNavi)
	$('.navi.more').on('mouseleave', closeNavi)
	
	function openNavi(){
		$('.sub-wrap').stop().slideToggle(300)
	}
	function hoverNavi(){
		$('.sub-wrap').stop().slideDown(300)
	}
	function closeNavi(){
		$('.sub-wrap').stop().slideUp(300)
	}
}

function mNavi() {
	$('.m-sub-wrap').slideUp(0)
	$('.navi-wrapper .m-bar').on('click', openNavi)
	
	function openNavi(){
		$('.m-sub-wrap').stop().slideToggle(300)
	}
}

function slide() {
	var swiper = new Swiper('.main-wrapper .swiper-container', {
		spaceBetween: 30,
		effect: "fade",
		navigation: {
			nextEl: '.main-wrapper .bt-next',
			prevEl: '.main-wrapper .bt-prev',
		},
	})
}

function modal() {
	$('.tour-wrapper .bt-buy').click(function(e) {
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

function map() {
	var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
		center: new kakao.maps.LatLng(37.55524094809751, 126.9369011148819), //지도의 중심좌표.
		level: 3 //지도의 레벨(확대, 축소 정도)
	};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
}