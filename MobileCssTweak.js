$(function() {
	
	var deviceAgent = navigator.userAgent.toLowerCase();
	
	if(deviceAgent.match(/(iphone|ipod|ipad|android|iemobile|ppc|smartphone|blackberry|webos)/)){
		$('#download_resume_mobile_note').text("^Tap to Download Resume PDF^");
		$("#glass-sm").css("position", "relative");
		$("#glass-sm").css("left", "0px");
		$("#glass-sm").css("top", "50px");   
		$("#linkedn").css("margin-left", "25%");
		$("#octocat").css("margin-left", "30%");
		$("#gittext").css("margin-left", "38%");
		$("#emailtext").css("margin-left", "25%");
		$(".tab-content").css("border-right", "0px");
		$("#contact_button").css("margin-left", "32%");
		$("#collapseOneExpand").css("display", "none");
		$("#collapseTwoExpand").css("display", "none");
		$("#uShip").css("display", "none");
		$("#uShip_mobile").css("visibility", "visible");
		$("#uShip_mobile").css("width", "60%");
		$("#uShip_mobile").css("margin-left", "15%");
		$("#THD").css("display", "none");
		$("#THD_mobile").css("visibility", "visible");
		$("#THD_mobile").css("width", "60%");
		$("#THD_mobile").css("margin-left", "15%");	
		$("#tswcomments").css("margin-left", "0%");	
		$("#tswcomments").css("width", "80%");
		$("#sendFeedback").css("margin-left", "55%");	
		$(".thankYouModal").css("width", "80%");	
		$("#contactFormModal").css("position", "absolute");	
			
		$(".thankYouOops").css("font-size", "30px");
		$(".thankYouOops").css("text-shadow", "none");
		
		$("#collapseOne").removeClass("collapse");	
		$("#collapseTwo").removeClass("collapse");	
		
   }
   
   else{
   	$('#download_resume_mobile_note').text("^Click to Download Resume PDF^");
   }


});