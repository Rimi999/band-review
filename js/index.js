init()

function init() {
	navi()
}

function navi() {
	$('.header-wrapper .sub-wrap').slideUp(0)
	$('.navi.more').on('click', openNavi)
	$('.navi.more').on('mouseover', hoverNavi)
	$('.sub-wrap').on('mouseleave', closeNavi)
	
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