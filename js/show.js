$(document).ready(function(){
    
    $("#show_results").click(function(){
		var xhr = new XMLHttpRequest();
		var tags_request = document.getElementById("search_bar").value;
		xhr.open('POST', 'http://100.64.95.208:3000/data?tags='+tags_request, true);
		xhr.send();
		document.getElementById('data').scrollIntoView({block: 'start', behavior: 'smooth'});
    });  
	
	$("#go_back").click(function(){
		
		document.getElementById('home').scrollIntoView({block: 'start', behavior: 'smooth'});
		$('#search_bar').tagsinput('removeAll');
    });  
});

