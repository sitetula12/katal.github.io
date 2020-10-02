$(document).ready(function(){

	$('.header__burger').click(function(){
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
		
	});
	$('.menu__item').click(function(event) {
        $('.header__burger,.menu__body').removeClass('active');
		$('body').removeClass('lock');
	});
});