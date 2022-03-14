/* Напишите функцию counter(), которая при каждом вызове возвращает число на единицу большее предыдушего  */

// const counter = (function () {
// 	let i = 1;
// 	return function () {
// 		return i++;
// 	};
// })();

// const counter = (() => {
// 	let i = 1;
// 	return () => i++;
// })();

//Решение преподавателя
//1
// const counter = (function (i = 1) {
// 	return function () {
// 		return i++;
// 	};
// })();
//2
const counter = ((i = 1) => () => i++)()

console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
