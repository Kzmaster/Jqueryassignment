$("document").ready(function() {
	$("a:first").css("background-color", "blue");
	$("#content h2:nth-child(1)").on("click", function() {
		$(this).toggleClass("hidden");
	});
});