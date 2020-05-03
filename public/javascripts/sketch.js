jQuery(document).ready(function() {

	var socket = io();



	socket.on('pseudo', function(pseudo){
		console.log('connection');
      $('#conn').append($('<li>').text("pseudo"));
    });

    socket.on('deconnection', function() {
    	alert(pseudo + "est deconnecte");
    });


	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var mouseX = 0;
	var mouseY = 0;

	function draw(x, y, preX, preY) {
		var cercle = new Path2D();
		ctx.beginPath();
		ctx.moveTo(preX, preY);
		cercle.moveTo(x, y);
		cercle.arc(x, y, 5, 0, 2 * Math.PI);
		ctx.lineTo(x, y);
		ctx.lineWidth = 10;
		ctx.stroke();
		ctx.fill(cercle);
	}


	$("#canvas").mousedown(function(e) {
		var elm = $(this);
		var xPos = e.pageX - elm.offset().left;
		var yPos = e.pageY - elm.offset().top;
		mouseX = xPos;
		mouseY = yPos;
		draw(xPos, yPos, mouseX, mouseY);
		socket.emit('draw', [xPos, yPos, mouseX, mouseY]);
		$(this).mousemove(function(e) {
			var elm = $(this);
		    var xPos = e.pageX - elm.offset().left;
		    var yPos = e.pageY - elm.offset().top;
		    socket.emit('draw', [xPos, yPos, mouseX, mouseY]);
			draw(xPos, yPos, mouseX, mouseY);
			mouseX = xPos;
			mouseY = yPos;
		});
	});

	socket.on('draw', function(coord) {
		console.log("je dessine"+coord);
		draw(coord[0], coord[1], coord[2] , coord[3])
	})


	$(document).mouseup(function(e) {
		$("#canvas").unbind('mousemove');
	});

});