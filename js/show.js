$(document).ready(function(){
    
    $("#show_results").click(function(){
		var xhr = new XMLHttpRequest();
		var tags_request = document.getElementById("search_bar").value;
		xhr.open('POST', 'http://100.64.95.208:3000/data?tags='+tags_request, true);
		xhr.send();
		document.getElementById('data').scrollIntoView({block: 'start', behavior: 'smooth'});
		
		
		CreateTableFromJSON();
		
    });  
	
	$("#go_back").click(function(){
		
		document.getElementById('home').scrollIntoView({block: 'start', behavior: 'smooth'});
		$('#search_bar').tagsinput('removeAll');
    });  
	
});

function CreateTableFromJSON() {
        var Dependancies = [
            {
                "Name": "Express",
                "Version": "1.2" 
            }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < Dependancies.length; i++) {
            for (var key in Dependancies[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < Dependancies.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = Dependancies[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }