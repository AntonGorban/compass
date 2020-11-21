$(document).ready(function(){

	// Слайдер - bxSlider
    $('.comments-slider').bxSlider();

    // Плавный якорь
    $('#anchor1').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#advantages').offset().top }, 1000);
		e.preventDefault();
	});

    // Модалка
    $('.order').click(function(){
    	$('#exampleModal').arcticmodal();
    })
});