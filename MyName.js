$(function() {

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
                $(this).css("top", "40px");
                $(this).css("color", "#707070");
                $(this).css("text-shadow", "5px 4px 0 #eee,7px 6px 0 #707070");
            });

            $("#myName").mouseup(function() {
                $(this).css("top", "35px");
                $(this).css("color", "#707070");
                $(this).css("text-shadow", "5px 4px 0 #eee,7px 6px 0 #707070");
            });

            //$( "#myName" ).click(function() {
            //alert("My Nigga");
            //});

        });