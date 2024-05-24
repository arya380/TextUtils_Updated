# TextUtils

TextUtils is a versatile text manipulation application built using React.js. This web app allows users to perform various text transformations such as converting text to uppercase, lowercase, and extracting emails from large blocks of text. The project is a great demonstration of how React can be used to build interactive web applications with real-world functionality.

## Features

- **Convert to Uppercase**: Transform your entire text to uppercase letters.
- **Convert to Lowercase**: Convert your text to lowercase letters.
- **Email Extraction**: Extract and display all email addresses found within the input text.

## Demo

[Live Demo](#) (https://textanalysishub.netlify.app/)



## Installation

Follow these steps to get a local copy of the project up and running:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/arya380/TextUtils_Updated
    cd textutils_Updated
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start run
    ```

    This will start the app and open it in your default web browser at `http://localhost:3000`.

## Usage

1. Enter or paste your text into the input area.
2. Click on the desired button to perform the text transformation:
   - **Uppercase**: Converts the input text to uppercase.
   - **Lowercase**: Converts the input text to lowercase.
   - **Extract Emails**: Scans the text and extracts all email addresses.

## Project Structure

TextUtils/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── EmailExtractor.js
│   │   ├── TextTransformer.js
│   │   └── Navbar.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
│   └── reportWebVitals.js
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js
└── README.md



