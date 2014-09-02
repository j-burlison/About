$(function() {
	
	var deviceAgent = navigator.userAgent.toLowerCase();
	
	if(deviceAgent.match(/(iphone|ipod|ipad|android|iemobile|ppc|smartphone|blackberry|webos)/)){
		$("#download_resume_mobile_note").css("display", "block");  	
		$("#glass-sm").css("position", "relative");
		$("#glass-sm").css("left", "0px");
		$("#glass-sm").css("top", "50px");   
		$("#linkedn").css("margin-left", "25%");
		$("#octocat").css("margin-left", "30%");
		$("#gittext").css("margin-left", "38%");
		$("#emailtext").css("margin-left", "25%");
		$(".tab-content").css("border-right", "0px");
   }


});