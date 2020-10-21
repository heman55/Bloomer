$(function () {
	
	
	$("#loadMore").on('click', function (e) {
		
		e.preventDefault();
		
		$(".boxhidden:hidden").slice(0, 3).slideDown();
		if ($(".boxhidden:hidden").length==0) {
			$("#load").fadeOut('slow');
		}
		
		
		
	});
	
});	