$(function() {
	
	if (typeof InstallTrigger !== 'undefined') {
		$("#tswcomments").css("width", "70%");
	}
   
	$("#sendFeedback").mousedown(function() {
		$("#contactForm").css('display', 'none');
		$("#thankYou").css('display', 'block');
		
   });   
   
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