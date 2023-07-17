$(window).scroll(function(){
	if($('.navbar').offset().top>50){
		$('.navbar-fixed-top').addClass('navbar-custom-animate');
	}else{
		$('.navbar-fixed-top').removeClass('navbar-custom-animate');
	}
});


