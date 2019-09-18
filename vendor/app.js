$(document).ready(function () {

	$.each($('.zig-zag-slider'), function(i, el){
		$(el).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			nextArrow: $(el).next(),
			prevArrow:  $(el).prev(),
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	
	$.each($('.announcements-list'), function(i, el){
		$(el).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: $(el).prev().find('.announcements-list__prev'),
			nextArrow:  $(el).prev().find('.announcements-list__next'),
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	

	$('.nav-col').on('click', function(){
		$(this).find('.nav-col__list').length 
			? $(this).find('.nav-col__list').slideToggle()
			: $(this).next().slideToggle();

		$(this).toggleClass('active');
	});

	$('#hamb').on('click', function(){
		$('#mobile-navigation').addClass('active');
	});

	$('.close').on('click', function(){
		$('#mobile-navigation').removeClass('active');
	})

	$(window).on('resize', function() {
		if(window.innerWidth > 991) {
			$('.nav-col__list').slideDown();
			$('.nav-col').removeClass('active');
			$('.footer__soc').slideDown();
			$('.single-line-form').slideDown();
		}
	});

	$('.project__item').mouseenter(function(){
		$('.project__item').removeClass('active');
		$(this).addClass('active');
	}).mouseleave(function(){
		$(this).removeClass('active');
		$('.project__item').first().addClass('active');
	});
})