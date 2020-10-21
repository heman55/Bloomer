$(function () {
	
	$(".box-hidden").slice(0, 6).show();
	$("#loadMore").on('click', function (e) {
		
		e.preventDefault();
		
		$(".box-hidden:hidden").slice(0, 3).slideDown();
		if ($(".box-hidden:hidden").length==0) {
			$("#load").fadeOut('slow');
		}
		
		
		
	});
	
});	