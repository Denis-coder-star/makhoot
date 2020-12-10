$(document).ready(function(){
	$('.rate-btn2').click(function(){
		$('.rate-btn2').css('background-color', 'rgb(255, 255, 255)');
		$('.rate-btn2').css('box-shadow', '0px 0px 18px 0px rgba(0, 0, 0, 0.1)');
		$('.rate-btn2').css('color', '#0ea7eb');
		$('.rate-btn1').css('background-color', 'white');
		$('.rate-btn1').css('color', '#cccccc');
		$('.rate-btn1').css('box-shadow', 'none');
		$('.tabl-one p').text('349');
		$('.tabl-two p').text('699');
		$('.tabl-three p').text('1050');
		$('.tabl-footh p').text('2990');
	});
	$('.rate-btn1').click(function(){
		$('.rate-btn1').css('background-color', 'rgb(255, 255, 255)');
		$('.rate-btn1').css('box-shadow', '0px 0px 18px 0px rgba(0, 0, 0, 0.1)');
		$('.rate-btn1').css('color', '#0ea7eb');
		$('.rate-btn2').css('background-color', 'white');
		$('.rate-btn2').css('color', '#cccccc');
		$('.rate-btn2').css('box-shadow', 'none');
		$('.tabl-one p').text('113');
		$('.tabl-two p').text('219');
		$('.tabl-three p').text('349');
		$('.tabl-footh p').text('615');
	});
});

$('.slider-header').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  speed: 1500,
});

$('.reviews-body').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  speed: 1500,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
      },
    },
    ],
});

$(document).ready(function(){
  $('.burger-menu').click(function(){
    $('.menu-back').toggleClass('menu-back-active');
    $('.menu').toggleClass('menu-active');
    $('.menu__item').toggleClass('menu__item-active');
    $('.menu__link').toggleClass('menu__link-active');
  });
});

$(document).ready(function(){
  $('.menu__link').click(function(){
    $('.ham3').removeClass('active');
    $('.menu-back').removeClass('menu-back-active');
    $('.menu').removeClass('menu-active');
    $('.menu__item').removeClass('menu__item-active');
    $('.menu__link').removeClass('menu__link-active');
  });
});


document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    }
    }, 1500);
 }