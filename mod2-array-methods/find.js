const arr = ["Ехал", "Грека", "через", "рек"];

const arrFind = arr.find((word) => word.includes("ре"));
const arrFindIndex = arr.findIndex((word) => word.includes("ре"));

console.log(arrFind)
console.log(arrFindIndex)