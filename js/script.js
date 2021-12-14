
var windows = [];

$(document).ready(function() {
	var DOC_HEIGHT = $(window).height();
	var DOC_WIDTH = $(window).width();

	
	windows.push(new Pop("magenta"));
	windows.push(new Pop("yellow"));
	windows.push(new Pop("teal"));
	windows.push(new Pop("lime"));
	windows.push(new Pop("red"));
	windows.push(new Pop("yellow"));

	// Setup Windows
	for(var i = windows.length - 1; i >= 0; i--) {
		cascadeWindows(i,function(){})	
	}
	
	var speed = 100;
	// Cycle Through Hiding Them
	setTimeout(function() {
		hideWindow(windows.length-1)},
		speed);
	function hideWindow(i) {
		var w = windows[i];
		w.setDimensions(0, 0, DOC_WIDTH/2, DOC_HEIGHT/2);
		setTimeout(function() {
			i = i - 1;
			if(i <= 0) {
				i = 1;
				showWindow(i);
			} else {
				hideWindow(i);
			}
		},speed);
	}

	function showWindow(i) {
		var w = windows[i];
		var width = (DOC_WIDTH/windows.length) * i + 1;
		var height = (DOC_HEIGHT/windows.length) * i + 1;
		var x = (DOC_WIDTH/2) - (width/2);
		var y = (DOC_HEIGHT/2) - (height/2);
		w.setDimensions(width, height, x, y);
		setTimeout(function() {
			i = i + 1;
			if(i >= windows.length) {
				i = windows.length - 1;
				hideWindow(i);
			} else {
				showWindow(i);
			}
		},speed);
	}

	function cascadeWindows(i, callback) {
		var w = windows[i];
		var width = (DOC_WIDTH/windows.length) * i + 1;
		var height = (DOC_HEIGHT/windows.length) * i + 1;
		var x = (DOC_WIDTH/2) - (width/2);
		var y = (DOC_HEIGHT/2) - (height/2);
		w.x = x;
		w.y = y;
		w.createSquare(width,height,x,y);		
		callback();
	}

	/*
	setTimeout(function() {
			i = i - 1;
			if(i == 0) {
				i = windows.length - 1;
			}
			cascadeWindows(i);
		}, 1000);
*/




	// Create squares on top of each other
	/*
	for(var i = windows.length - 1; i >= 0; i--) {
		var w = windows[i];
		var width = (DOC_WIDTH/windows.length) * i + 1;
		var height = (DOC_HEIGHT/windows.length) * i + 1;
		var x = (DOC_WIDTH/2) - (width/2);
		var y = (DOC_HEIGHT/2) - (height/2);
		w.createSquare(width,height,x,y);		
	}
	*/

})

//


