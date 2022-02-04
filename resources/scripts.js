var font1 = document.getElementById("font1");
//alert(font1);
var colors = ["red", "blue", "pink", "black", "green", 
"purple", "yellow", "orange", "white", "brown", "ivory"];
var colorIndex = 0;
function changeColor() {
	if(colorIndex == colors.length) {
		colorIndex = 0;
	}
	alert(colors[colorIndex]);
	font1.setAttribute("color", colors[colorIndex]);
	colorIndex++;
};
