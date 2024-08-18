# Node.js URL Shortener

A  Node.js URL shortener using ExpressJS and MongoDB.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ChinmoyHembram/URL-shortner.git
   ```

2. Install the project dependencies

   ```sh
    cd URL-shortner
    npm install
   ```

3. Configure the environment variables

   ```sh
    PORT=3000
    MONGODB_URI=your-mongodb-uri
    BASE_URL=your-api-base-url
   ```

4. To run the app in dev mode
   ```sh
   npm run dev
   ```
5. To run the app in production mode
   ```sh
   npm start
   ```

## Usage

To use the URL shortener API, make HTTP requests to the following endpoints:

- **POST /api/shorten:** Shorten a long URL.
- **GET /{urlId}:** Redirect to the original URL.

## API Documentation

For detailed information about the available API endpoints, please refer to the `BASE_URL/api-docs` , where `BASE_URL` is your API's base URL as configured in your environment file.

You can access the Swagger documentation by replacing `BASE_URL` with the actual base URL of your API.
