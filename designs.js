'use strict'
var pA = {
	brushColor : "#ff0000",
  height : 20,
  width : 20
};

// Select color input
var colorPicker = $("#colorPicker");
colorPicker.on("change", function () {
  pA.brushColor = colorPicker.val();
});
// Select size input
var sizePicker = $("#SubmitSize");
    sizePicker.on("click",function(){
      pA.height = $('#input_height').val();
      pA.width = $('#input_width').val();
    });

// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
var gird = $('<div class="gird col-md-1"></div>');
gird.on('click', function(){
  event.target.style.backgroundColor = pA.brushColor;
});
return gird;
}

//the layout code
var table = $("#pixel_canvas");
	for (var row = 0; row < pA.height; row++) {
		var newRow = $('<div class="row"></div>')
		for (var col = 0; col < pA.width; col++) {
			newRow.append(makeGrid());
		};
		table.append(newRow);
	};
