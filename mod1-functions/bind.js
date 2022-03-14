const book = { title: "JS" };
function setPrice(price) {
	this.price = price;
}

// setPrice.apply(book, ["1000 руб"]);
// setPrice.call(book, "1000 руб");
const mySetPrice = setPrice.bind(book);
mySetPrice("1000 руб");

console.log("book", book);