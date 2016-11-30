function addPhone() {
	var phone = '{ "imageURL":"' + $("#imageAdd").val() + '", "manufacturer":"' + $("#manuAdd").val() + '", "model": "' + $("#modelAdd").val() + '", "color": "' + $("#colorAdd").val() + '", "year": "' + $("#yearAdd").val() + '", "description": "' + $("#descAdd").val() + '"}';
	
	$.ajax({	
		
		url: "http://localhost:8080/rest/api/phones",
		type: "POST",
		data: phone,
		dataType: "json",
		success: function(data) {
			console.log(data);
		}
	});
}