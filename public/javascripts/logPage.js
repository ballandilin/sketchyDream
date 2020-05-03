$.noConflict();

jQuery(document).ready(function() {

	var socket = io();

	$("#pseudo").click(function(event) {
		if($("#pseudoInput").val() == "") {
			alert("Le pseudo ne peut pas etre vide");
		} else {
			socket.emit("pseudo", $("#pseudoInput").val())
			// $.post( "/sketch/", {pseudo: $("#pseudoInput").val()}, function( data ) {
		 // 		console.log($("#pseudoInput").val());
			// });
			document.location.href = "/sketch";
		}
	});


});

