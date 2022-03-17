import { mortgage, overpayment } from "./mymodule.mjs";

console.log("Hello, Node.js!");
console.log(new Date().toLocaleTimeString());
// console.log(process.argv);

let [, , S, p, n] = process.argv;

S = parseInt(S);
p = parseInt(p);
n = parseInt(n);

// console.log("S =>", S);
// console.log("p =>", p);
// console.log("n =>", n);

//************************************

const mortgageValue = mortgage(1e7, 10, 15);
const overpaymentValue = overpayment(1e7, 10, 15);

console.log(`Платёж: ${mortgageValue} руб.`);
console.log(`Переплата: ${overpaymentValue} руб.`);
