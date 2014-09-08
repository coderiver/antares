head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	console.log($('body').html());

	// $('.content').masonry({
	// 	// columnWidth: 200,
	// 	itemSelector: '.b',
	// 	"gutter": 10
	// });

	var menuBtn = $('.menu-btn'),
		menu    = $('.header__nav');

	menuBtn.click(function(event) {
		menu.slideToggle();
	});

});