const sum = require("./sum.js");

describe("Базовые тесты", () => {
	test("сумма 3 и 5 будет равна 8", () => {
		expect(sum(3, 5)).toBe(8);
	});

	test("сумма 10 и 5 будет равна 15", () => {
		expect(sum(10, 5)).toBe(15);
	});

	test("сумма 7 и 7 будет равна 14", () => {
		expect(sum(7, 7)).toBe(14);
	});

	test("сумма 7 + 7 + 7 будет равна 21", () => {
		expect(sum(7, 7, 7)).toBe(21);
	});
});

describe("тесты с afterEach и beforeEach", () => {
	let a = 0;
	let b = 0;

	beforeEach(() => {
		a = 5;
		// console.log('before a =', a);
	});

	afterEach(() => {
		a = 0;
		// console.log("after a =", a);
	});

	test("сумма a = 5 + 10 будет равна 15", () => {
		expect(sum(a, 10)).toBe(15);
		a = 10;
		expect(sum(a, 10)).toBe(20);
	});

	test("сумма a = 5 + a = 5 будет равна 10", () => {
		expect(sum(a, a)).toBe(10);
	});
});

const promiseSum = async (a, b) => sum(a, b);

describe("тест с промисами", () => {
	test("Вызов promise sum(2,3) будет равен 5", () => {
		return promiseSum(2, 3).then((data) => {
			expect(data).toBe(5);
		});
	});
});

describe("тест с мок-функциями", () => {
	test("кол-во аргументов в sum - три", () => {
		const mockFn = jest.fn(sum)

		mockFn(3,4,5);

		expect(mockFn.mock.calls.length).toBe(1);

		expect(mockFn.mock.calls[0][0]).toBe(3);
		expect(mockFn.mock.calls[0][1]).toBe(4);
		expect(mockFn.mock.calls[0][2]).toBe(5);

		expect(mockFn.mock.results[0].value).toBe(12);
	});
});