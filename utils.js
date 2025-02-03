function isPrime(n) {
	if (n < 2) return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}

/**
 * Check if a number is perfect.
 */
function isPerfect(n) {
	if (n <= 1) return false;
	let sum = 1;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			sum += i;
			if (i !== n / i) sum += n / i;
		}
	}
	return sum === n;
}

/**
 * Check if a number is an Armstrong number.
 */
function isArmstrong(n) {
	const digits = n.toString().split('').map(Number);
	const power = digits.length;
	return digits.reduce((acc, d) => acc + Math.pow(d, power), 0) === n;
}

module.exports = { isPrime, isPerfect, isArmstrong };
