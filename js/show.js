$(document).ready(function(){
    
    $("#show_results").click(function(){
		var xhr = new XMLHttpRequest();
		var tags_request = document.getElementById("search_bar").value;
		xhr.open('POST', 'http://100.64.95.208:3000/data?tags='+tags_request, true);
		xhr.send();
    });  
	
	$("#hide_results").click(function(){
        $("#results").fadeOut();
    });  
});