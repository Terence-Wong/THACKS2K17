window.data=[]
window._data=[]
$(document).ready(function(){
    
    $("#show_results").click(function(){
    	window.data=[]
		CreateTableFromJSON();
		var xhr = new XMLHttpRequest();
		var tags_request = document.getElementById("search_bar").value;
		xhr.open('POST', 'http://100.64.95.208:3000/data?tags='+tags_request, true);
		var divLoad = document.getElementById("showData")
		divLoad.innerHTML = "<h1><span class='animate-flicker'>NOW LOADING...</span></h1>";
		 xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
			  window._data=JSON.parse(xhr.response); //Outputs a DOMString by default
			  window._data=window._data.map(a=> [a[0],parseFloat(a[1]).toFixed(2)+"%",a[1]])
			  window.data=window._data;
			  CreateTableFromJSON();

			}
		  }


		xhr.send();
		document.getElementById('data').scrollIntoView({block: 'start', behavior: 'smooth'});		
    });  
	
	$("#go_back").click(function(){
		
		document.getElementById('home').scrollIntoView({block: 'start', behavior: 'smooth'});
		$('#search_bar').tagsinput('removeAll');
    });  
	
});

function CreateTableFromJSON() {
       
        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = ['Name','Usage'];


        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        //for (var i = 0; i < col.length; i++) {
        //    var th = document.createElement("th");      // TABLE HEADER.
        //    th.innerHTML = col[i];
        //    tr.appendChild(th);
        //}

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][j];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
		divContainer.style="overflow:scroll;height:300px;width:100%;overflow:auto";
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }