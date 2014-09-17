jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});





$(function() {
	
	if (typeof InstallTrigger !== 'undefined') {
		$("#tswcomments").css("width", "70%");
	}
	
	if ($(location).attr('href') == "http://www.jburlison.com/#thankYou"){
		$("#thankYouModal").modal('show');
	}
	
	if ($(location).attr('href') == "http://www.jburlison.com/#Oops"){
		$("#oopsModal").modal('show');
	}
	
   
	//$("#sendFeedback").mousedown(function() {
		//$("#contactForm").css('display', 'none');
		//$("#thankYou").css('display', 'block');
		
   //});   
   
   $("#myFaceModal").mousedown(function() {
		$("#myFaceModal").modal('hide');
   });
   
   $("#HalfDomeSelfieModal").mousedown(function() {
		$("#HalfDomeSelfieModal").modal('hide');
   });
   
   $("#CostaRicaModal").mousedown(function() {
		$("#CostaRicaModal").modal('hide');
   });
   
   $("#YosemiteHorModal").mousedown(function() {
		$("#YosemiteHorModal").modal('hide');
   });
   
   $("#ParaJumpModal").mousedown(function() {
		$("#ParaJumpModal").modal('hide');
   });
   
   $("#MotoClassModal").mousedown(function() {
		$("#MotoClassModal").modal('hide');
   });
   
   $("#MyFamilyModal").mousedown(function() {
		$("#MyFamilyModal").modal('hide');
   });
   
   
   $("#collapseOneExpand").mousedown(function() {
   	if ($('#collapseOneText').text() == "Click To Expand Section"){
   		$('#collapseOneText').text("Click To Collapse Section");
   	}
   	
   	else {
			$('#collapseOneText').text("Click To Expand Section");   	
   	}
   });
   
    $("#collapseTwoExpand").mousedown(function() {
   	if ($('#collapseTwoText').text() == "Click To Expand Section"){
   		$('#collapseTwoText').text("Click To Collapse Section");
   	}
   	
   	else {
			$('#collapseTwoText').text("Click To Expand Section");   	
   	}
   });


});