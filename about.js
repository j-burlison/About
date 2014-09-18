jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    
    jQuery('#to-middle').fadeIn(duration);
    jQuery('#to-bottom').fadeIn(duration);
            
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#back-to-top').fadeIn(duration);
        } 
        
        else if (jQuery(this).scrollTop() <= offset){
            jQuery('#back-to-top').fadeOut(duration);
        }
        
        if (jQuery(this).scrollTop() < $(document).height()-$(window).height()) {
            jQuery('#to-bottom').fadeIn(duration);
        } 
        
        else if (jQuery(this).scrollTop() >= $(document).height()-$(window).height()) {
            jQuery('#to-bottom').fadeOut(duration);
        } 
    });
    
    jQuery('#back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
    
    jQuery('#to-middle').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: $(document).height() / 2}, duration);
        return false;
    })
    
    jQuery('#to-bottom').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: $(document).height()-$(window).height()}, duration);
        return false;
    })
});





jQuery(document).ready(function() {
	
	if (typeof InstallTrigger !== 'undefined') {
		$("#tswcomments").css("width", "70%");
	}
	
	if ($(location).attr('href') == "http://www.jburlison.com/#thankYou"){
		$("#thankYouModal").modal('show');
	}
	
	if ($(location).attr('href') == "http://www.jburlison.com/#Oops"){
		$("#oopsModal").modal('show');
	}
	
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
	
     
   $("#myFace").mousedown(function() {
		jQuery('html, body').animate({scrollTop: $("#myFaceModal").scrollTop()}, 500);   
   });
   
   
   $("#myFaceModal").mousedown(function() {
		$("#myFaceModal").modal('hide');
   });
   

   
   $("#HalfDomeSelfie").mousedown(function() {
		jQuery('html, body').animate({scrollTop: $("#HalfDomeSelfieModal").scrollTop()}, 500);   
   });
   
 
   
   $("#HalfDomeSelfieModal").mousedown(function() {
		$("#HalfDomeSelfieModal").modal('hide');
   });
   

   
   
   
   $("#CostaRica").mousedown(function() {
		jQuery('html, body').animate({scrollTop: $("#CostaRicaModal").scrollTop()}, 500);   
   });

   
   $("#CostaRicaModal").mousedown(function() {
		$("#CostaRicaModal").modal('hide');
   });
   

   
   
   
   $("#YosemiteHor").mousedown(function() {
		jQuery('html, body').animate({scrollTop: $("#YosemiteHorModal").scrollTop()}, 500);   
   });
   

   
   $("#YosemiteHorModal").mousedown(function() {
		$("#YosemiteHorModal").modal('hide');
   });
   

   
   
   
   $("#ParaJump").mousedown(function() {
		jQuery('html, body').animate({scrollTop: $("#ParaJumpModal").scrollTop()}, 500);   
   });
   

   $("#ParaJumpModal").mousedown(function() {
		$("#ParaJumpModal").modal('hide');
   });
   
 
   
   
   $("#MotoClass").mousedown(function() {
		jQuery('html, body').animate({scrollTop: $("#MotoClassModal").scrollTop()}, 500);   
   });
   
 
   
   $("#MotoClassModal").mousedown(function() {
		$("#MotoClassModal").modal('hide');
   });
   

   
   
   
   $("#MyFamily").mousedown(function() {
		jQuery('html, body').animate({scrollTop: $("#MyFamilyModal").scrollTop()}, 500);   
   });
   
 
   
   $("#MyFamilyModal").mousedown(function() {
		$("#MyFamilyModal").modal('hide');
   });
   
 
   
   
   


});