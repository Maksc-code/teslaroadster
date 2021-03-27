$(function(){

 $('.slider').slick({
	arrows: false,
	fade: true,
	autoplay: 2000,
	dots: true
 });

 $('.header-btn').on('click', function(){
	 $('.menu').addClass('active');
 })

 $('.close-btn').on('click', function(){
	 $('.menu').removeClass('active');
 })

});