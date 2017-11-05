'use strict'
let pA = {
	brushColor : "#ff0000",
};
// Select color input
let colorPicker = $("#colorPicker");
colorPicker.on("change", function () {
  pA.brushColor = colorPicker.val();
});

$('#submit').click('change',function(){
	$('.gird').remove();
	pA.width = $('#input_width').val();
	pA.height = $('#input_height').val();
	layout();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
const gird = $('<div class="gird col-md-1"></div>');
gird.on('click', function(){
  event.target.style.backgroundColor = pA.brushColor;
});
return gird;
}

//the layout code
function layout(){
	const table = $("#pixel_canvas");
		for (let row = 0; row < pA.height; row++) {
			const newRow = $('<div class="row"></div>')
			for (let col = 0; col < pA.width; col++) {
				newRow.append(makeGrid());
			};
			table.append(newRow);
		};
}
