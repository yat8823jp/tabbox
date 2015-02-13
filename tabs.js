$(function(){
	$(".tab").each(function(){
		//.tabで括ったボックスでのみ動作させる。ページ内に複数設置可能

		$(this).children().click(function(){
			var activeBt = $(this).parent().children().index(this);
			activeBt++;
			console.log(activeBt);
			$(this).parent().parent().children(".tabbox").children().removeClass('active');

			$(this).parent().children().removeClass('active');
			$(this).addClass('active');

			$(this).parent().parent().children(".tabbox").children().removeClass('active');
			$(this).parent().parent().children(".tabbox").children($(this).prop("tagName") + ":nth-of-type(" + activeBt + ")").addClass('active');

		return false;

		});
	});
});