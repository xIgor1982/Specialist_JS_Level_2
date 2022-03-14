//1
let car = { modal: "Kia" };
function changeColor(color) {
	this.color = color;
}

changeColor.apply(car, ["red"]);

console.log(window.visualViewport);
