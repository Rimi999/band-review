init()

function init() {
	navi()
	mNavi()
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