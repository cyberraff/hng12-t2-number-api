# Number Classifier API (JavaScript Version)

This API takes a number as a query parameter and returns interesting mathematical properties about it along with a fun fact retrieved from the Numbers API (math type). The project is built using Node.js and Express for simplicity.

## Features

-   **Input Validation:** Accepts only valid integer values.
-   **Mathematical Analysis:**
    -   Checks if the number is prime.
    -   Checks if the number is a perfect number.
    -   Determines if the number is an Armstrong number.
    -   Calculates the sum of the digits.
    -   Determines the parity (even or odd).
-   **Properties Field:**
    -   Returns `["armstrong", "odd"]` if the number is an Armstrong number and odd.
    -   Returns `["armstrong", "even"]` if the number is an Armstrong number and even.
    -   Returns `["odd"]` if the number is not an Armstrong number but is odd.
    -   Returns `["even"]` if the number is not an Armstrong number but is even.
-   **Fun Fact:** Retrieves a math-related fun fact from the [Numbers API](http://numbersapi.com/).
-   **CORS Support:** Allows requests from any origin.
-   **JSON Responses:** All responses are in JSON format.

## Project Structure

```
number-api/
├── index.js       # Express server and API route
├── utils.js       # Helper functions (isPrime, isPerfect, isArmstrong)
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/) (v14 or later)
-   npm (comes with Node.js)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/cyberraff/hng12-t2-number-api.git
    cd number-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Running the API Locally

### Development Mode

To run the server with live reloading:

```bash
npm run dev
```

The API should now be running on `http://localhost:3000`.

### Production Mode

To run the server in production:

```bash
npm start
```

The `"start"` script in your `package.json` should be defined as:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

## API Documentation

### Endpoint

```
GET /api/classify-number?number=<number>
```

### Example Request

```bash
curl -X GET "http://localhost:3000/api/classify-number?number=371"
```

### Successful Response (200 OK)

```json
{
	"number": 371,
	"is_prime": false,
	"is_perfect": false,
	"properties": ["armstrong", "odd"],
	"digit_sum": 11,
	"fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

> **Note:** The `fun_fact` field is retrieved from the Numbers API and might vary.

### Error Response (400 Bad Request)

When an invalid value is passed as the `number` query parameter (e.g., a non-integer), you'll receive an error response:

```json
{
	"number": "alphabet",
	"error": true,
	"message": "Invalid number parameter"
}
```

## Deployment

To deploy this API to a cloud platform (e.g., Vercel, Render, Railway, Heroku):

1. **Push your repository to GitHub.**
2. **Ensure your deployment environment runs `npm install` before starting the server with `npm start`.**
3. **Make sure the deployment platform uses the `start` command as defined in `package.json`.**

## License

This project is open-source and available under the [MIT License](LICENSE).

## Author

-   **Your Name** - [GitHub Profile](https://github.com/cyberraff)
