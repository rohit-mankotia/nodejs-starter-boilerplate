
# Node.js Starter Boilerplate

A Node.js starter boilerplate for building Express applications, with a CLI for easy project scaffolding.

## Features
- Express.js setup
- Environment variable support with dotenv
- Clean project structure: controllers, models, routes, config
- CLI to scaffold new projects instantly
- Sample route returns `hello developer`

## Quick Start (Recommended)

You can scaffold a new project using:

```sh
npx nodejs-starter-boilerplate my-app
```

Replace `my-app` with your desired project folder name. This will:
- Create a new folder with your project
- Copy all boilerplate files
- Install all dependencies automatically

Then, to start your new project:

```sh
cd my-app
cp .env.example .env # Set your environment variables
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see `hello developer`.

## Manual Setup (Alternative)

1. Clone this repository:
   ```sh
   git clone https://github.com/rohit-mankotia/nodejs-starter-boilerplate.git
   cd nodejs-starter-boilerplate
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Copy `.env.example` to `.env` and set your environment variables.
4. Start the server:
   ```sh
   npm start
   ```

## Project Structure
```
controllers/
models/
routes/
config/
.env.example
index.js
```

## License
MIT
