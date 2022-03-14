// function fact(n) {
// 	return n > 0 ? n * fact(n - 1) : 1;
// }
// fact(4);
// console.log(fact(4));

/* Написать тело функции reversePrint(), чтобы она при вызове доходила до самого глубокого свойства next и поднимаясь выводила числа. Например, 4,3,2,1.*/

//Мое решение
// function reversePrint(linkedList) {
// 	if (linkedList.next != null) {
// 		console.log(linkedList.value);
// 		reversePrint(linkedList.next);
// 	} else {
// 		console.log(linkedList.value);
// 	}
// }

function reversePrint(linkedList) {
    linkedList.next ? reversePrint(linkedList.next) : null
    console.log(linkedList.value)
}

var someList = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};
reversePrint(someList);
