/****************************************************/
/* 1. Nav Transformicon */
/****************************************************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/****************************************************/
/* 2. Slide-In Nav */
/****************************************************/

$(window).load(function() {
	$(".nav_slide_button").click(function() {
		$(".pull").slideToggle();
	});
});