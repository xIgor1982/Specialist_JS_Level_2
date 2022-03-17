const sum = (...args) => args.reduce((p, c) => p + c);

// function sum (a, b = 0, c = 0) {
// 	return a + b + c;
// }

module.exports = sum;
