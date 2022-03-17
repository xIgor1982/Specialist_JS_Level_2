/* Создайте функцию mortgage() для нахождения аннуитетного ипотечного платежа. Экспортируйте её */

exports.mortgage = (S, p, n) => {
	p /= 1200;
	n *= 12;
	return  (S * p / (1 - (1 + p) ** (-n))).toFixed(2);
}

overpayment = (S, p, n) => {
	return (n * 12 * mortgage(S, p, n) - S).toFixed(2);
};

exports.overpayment = overpayment;