$(function() {
	
				var deviceAgent = navigator.userAgent.toLowerCase();

            $("#myName").mouseover(function() {
                $(this).css("top", "35px");
                $(this).css("color", "transparent");
                $(this).css("text-shadow", "-9px 0 5px rgba(0,0,0,0.3), 9px 0 5px rgba(0,0,0,0.3), -21px 0 5px rgba(0,0,0,0.1), 21px 0 5px rgba(0,0,0,0.1), 0 0 0 rgba(0,0,0,0.1)");
            });

            $("#myName").mouseout(function() {
                $(this).css("top", "30px");
                $(this).css("color", "#707070");
                $(this).css("text-shadow", "5px 4px 0 #eee,7px 6px 0 #707070");
            });

            $("#myName").mousedown(function() {
            	
            	
					if(deviceAgent.match(/(iphone|ipod|ipad|android|iemobile|ppc|smartphone|blackberry|webos)/)){
						$("#myName").css("top", "35px");
                	$("#myName").css("color", "#707070");
                	$("#myName").css("text-shadow", "5px 4px 0 #eee,7px 6px 0 #707070");
                
                	setTimeout(function(){
                		$("#myName").css("top", "30px");
                		$("#myName").css("color", "#707070");
                		$("#myName").css("text-shadow", "5px 4px 0 #eee,7px 6px 0 #707070");  	
               	}, 100);	
   				}
   				
   				else{
   					$(this).css("top", "40px");
                	$(this).css("color", "#707070");
                	$(this).css("text-shadow", "5px 4px 0 #eee,7px 6px 0 #707070");
   				}
   				
   				//Download Resume PDF
            	
                
            });

            $("#myName").mouseup(function() {
                $(this).css("top", "35px");
                $(this).css("color", "#707070");
                $(this).css("text-shadow", "5px 4px 0 #eee,7px 6px 0 #707070");
            });
            

        });