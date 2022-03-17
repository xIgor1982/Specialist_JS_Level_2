const { mortgage } = require("./mymodule.js");

describe("Базовые тесты", () => {
	test("mortgage(1e7, 10, 15) будет 107460.51", () => {
		expect(mortgage(1e7, 10, 15)).toBe('107460.51');
	});

	// test("overpayment(1e7, 10, 15) будет 9342891.80", () => {
	// 	expect(overpayment(1e7, 10, 15)).toBe("9342891.80");
	// });
});
