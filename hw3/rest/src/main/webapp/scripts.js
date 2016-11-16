function getData() {
	$.ajax({
		
		url: "http://localhost:8080/rest/api/phones",
		type: "GET",
		dataType: "json",
		success: function(data) {
			var button = $('#buttonPhones').val();
			
			if (button == 0) {
				console.log(data);
				
				$('phonesTable').html('');
				
				$('#buttonPhones').val('1');
			
				var th = $('<tr>');
			
				th.append('<th>Picture</th>')
				th.append('<th>Manufacturer</th>');
				th.append('<th>Model</th>');
				th.append('<th>Color</th>');
				th.append('<th>Year</th>');
				th.append('<th>Description</th>');
				th.append('</tr>');
				
				$('#phonesTable').append(th);
				
				$.each(data, function(index) {
					
					var tr = $('<tr>');
			
					tr.append('<td><img src="' + data[index].imageURL + '"</td>');
					tr.append('<td>' + data[index].manufacturer + '</td>');
					tr.append('<td>' + data[index].model + '</td>');
					tr.append('<td>' + data[index].color + '</td>');
					tr.append('<td>' + data[index].year + '</td>');
					tr.append('<td>' + data[index].description + '</td>');
					tr.append('</tr>');
				
					$('#phonesTable').append(tr);
				});
			}
		}
	});
}

$(document).ready(function() {
	$('#buttonPhones').click(function() {
		getData();
	});
	
	$('#searchButton').click(function() {
		getSearchedData();
	});
	
	$('#openDialogButton').click(function() {
		openDialog();
	});
});

function getSearchedData() {
	$.ajax({
		
		url: "http://localhost:8080/rest/api/phones",
		type: "GET",
		dataType: "json",
		success: function(data) {
			console.log(data);
			
			var searchedWord = $('#searchText').val();
			var first = true;
			
			$('#buttonPhones').val('0');
			
			$.each(data, function(index) {
				var manufacturer = data[index].manufacturer;
				var model = data[index].model;
				var color = data[index].color;
				var year = data[index].year;
				
				if (((manufacturer.search(searchedWord)) != -1) || ((model.search(searchedWord)) != -1) || ((color.search(searchedWord)) != -1) || ((year.search(searchedWord)) != -1)) {
					if (first == true) {
						$('#phonesTable').html('');
						
						var th = $('<tr>');
						
						th.append('<th>Picture</th>')
						th.append('<th>Manufacturer</th>');
						th.append('<th>Model</th>');
						th.append('<th>Color</th>');
						th.append('<th>Year</th>');
						th.append('<th>Description</th>');
						th.append('</tr>');
							
						$('#phonesTable').append(th);
						
						first = false;
					}
					
					var tr = $('<tr>');
					
					tr.append('<td><img src="' + data[index].imageURL + '"</td>');
					tr.append('<td>' + data[index].manufacturer + '</td>');
					tr.append('<td>' + data[index].model + '</td>');
					tr.append('<td>' + data[index].color + '</td>');
					tr.append('<td>' + data[index].year + '</td>');
					tr.append('<td>' + data[index].description + '</td>');
					tr.append('</tr>');
					
					$('#phonesTable').append(tr);
				}
			});
		}
	});
}