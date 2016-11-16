function addPhone() {
	$.ajax({
		
		url: "http://localhost:8080/rest/api/phones",
		type: "POST",
		dataType: "json",
		success: function(data) {
			console.log(data);
			
			var image = $('#imageAdd'.val());
			var manu = $('#manuAdd'.val());
			var model = $('#modelAdd'.val());
			var color = $('#colorAdd'.val());
			var year = $('#yearAdd'.val());
			var desc = $('#descAdd'.val());
		}
	});
}