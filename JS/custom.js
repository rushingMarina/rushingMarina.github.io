 /*===============================================
		SERVICES-INTERESTS  
================================================*/
 //uses JQUery
 $(function () {

 	//animate on scroll
 	new WOW().init();

 });
 /*===============================================
		WORK
================================================*/
 $(function () {
 	$("#work").magnificPopup({
 		delegate: 'a',
 		type: 'image',
 		gallery: {
 			enabled: true
 		}

 	});
 });
 /*===============================================
		TEAM
================================================*/
 $(function () {
 	$("#team-members").owlCarousel({
 		items: 3,
 		autoplay: true,
 		smartSpeed: 700,
 		loop: true,
 		autoplayHoverPause: true
 	});
 });
 /*===============================================
		QUOTES
================================================*/
 $(function () {
 	$("#quotes-i-like").owlCarousel({
 		items: 1,
 		autoplay: true,
 		smartSpeed: 700,
 		loop: true,
 		autoplayHoverPause: true
 	});
 });
 /*===============================================
		NAVIGATION
================================================*/
//show/hide transperent black navigation 
$(function () {
	$(window).scroll(function(){
		
		if($(this).scrollTop() < 50) {
		   //hide nav
			$("nav").removeClass("rm-top-nav");
			$("#back-to-top").fadeOut();
		} else {
		   //show nav
			$("nav").addClass("rm-top-nav");
			$("#back-to-top").fadeIn();
	    }
		
	});

});

//smooth scrolling
$(function () {
	$("a.smooth-scroll").click(function (event) {
		event.preventDefault();

		//get/return id like #about, #work, #team etc
		var section = $(this).attr("href");

		$('html,body').animate({
			scrollTop: $(section).offset().top
		}, 1500, "easeInOutExpo");

	});

});

//Close mobile menu on click
$(function() {
	
	$(".navbar-collapse ul li a").on("click touch",function(){
		
		$(".navbar-toggle").click();
	});
	
});














