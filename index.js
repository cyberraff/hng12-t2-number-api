const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { isPrime, isPerfect, isArmstrong } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/classify-number', async (req, res) => {
	const { number } = req.query;

	// Validate input
	if (!number || isNaN(number)) {
		return res.status(400).json({
			number,
			error: true,
			message: 'Invalid number parameter',
		});
	}

	const num = parseInt(number, 10);

	// Mathematical properties
	const prime = isPrime(num);
	const perfect = isPerfect(num);
	const armstrong = isArmstrong(num);
	const digitSum = num
		.toString()
		.split('')
		.reduce((acc, d) => acc + parseInt(d, 10), 0);

	// Determine properties
	const properties = armstrong
		? ['armstrong', num % 2 === 0 ? 'even' : 'odd']
		: [num % 2 === 0 ? 'even' : 'odd'];

	// Fetch fun fact from Numbers API
	let funFact = `No fun fact available for ${num}.`;
	try {
		const response = await axios.get(`http://numbersapi.com/${num}/math`);
		funFact = typeof response.data === 'string' ? response.data : funFact;
	} catch (error) {
		console.error('Error fetching fun fact:', error.message);
	}

	res.json({
		number: num,
		is_prime: prime,
		is_perfect: perfect,
		properties,
		digit_sum: digitSum,
		fun_fact: funFact,
	});
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
