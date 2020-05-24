//sticky navigation
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("top-nav2")
  } else {
    navbar.classList.remove("top-nav2");
  };
};

$(document).ready(function(){
	$('.menu-toggler').on('click',function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
	$('.top-nav .nav-link').on('click',function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	$('.scroll-js-home').click(function(){
    $('html,body').animate({scrollTop:$('#home').offset().top},1000);
  });
	$('.scroll-js-about').click(function(){
    $('html,body').animate({scrollTop:$('#about').offset().top},1000);
  });
	$('.scroll-js-services').click(function(){
    $('html,body').animate({scrollTop:$('#services').offset().top},1000);
  });
	$('.scroll-js-portfolios').click(function(){
    $('html,body').animate({scrollTop:$('#portfolios').offset().top},1000);
  });
	$('.scroll-js-experience').click(function(){
    $('html,body').animate({scrollTop:$('#experience').offset().top},1000);
  });
	$('.scroll-js-contact').click(function(){
    $('html,body').animate({scrollTop:$('#contact').offset().top},1000);
  });
	$('.scroll-js-up').click(function(){
    $('html,body').animate({scrollTop:$('#home').offset().top},1000);
  });
	
	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true
	});
});

$(function(){
	$('#navbar').navpoints({
		speed: 1000,
		offset: 100,
		currentClass:'active'
	});
});

