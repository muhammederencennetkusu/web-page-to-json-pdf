Web Page to JSON & PDF
Web Page to JSON & PDF is a versatile tool designed to extract content from web pages and save it in two formats: JSON and PDF. It supports scraping text, paragraphs, and other content from websites, making it easy to process and store the extracted data.

Features
Extracts content from any web page, and supports multiple pages for a seamless scraping experience.
Exports the extracted content into PDF and JSON formats.
Fully customizable for different website structures.
Utilizes Puppeteer for headless browsing, ensuring no browser UI appears during the extraction process.
Easy to adapt for various websites and content types.
Installation
To get started with the project, follow these steps:

Clone the repository:

bash
Kopyala
git clone https://github.com/muhammederencennetkusu/web-page-to-json-pdf.git
Navigate to the project directory:

bash
Kopyala
cd web-page-to-json-pdf
Install the required dependencies:

bash
Kopyala
npm install
This will install puppeteer and other necessary packages.

Optionally, install pdf-lib if you plan to work with PDFs:

bash
Kopyala
npm install pdf-lib
Usage
Convert Web Pages to JSON
To extract text content from a website and save it as a JSON file, follow these steps:

Modify the startPage, stopPage, and url variables in the script to match the website and page range you want to scrape.

Run the script with Node.js:

bash
Kopyala
node index.js
The extracted content will be saved in a file called output.json in the project directory.

Example of JSON Output:
json
Kopyala
[
  {
    "page": 1,
    "content": "This is the content from the first page..."
  },
  {
    "page": 2,
    "content": "This is the content from the second page..."
  }
]
Convert Web Pages to PDF
To convert web pages into a single PDF document:

Modify the startPage, stopPage, and url variables in the script to point to the desired website and pages.

Run the script:

bash
Kopyala
node index.js
The content from each page will be combined into a single PDF file, named output.pdf.

Configuration
You can easily customize the script by editing the following variables:

startPage: The starting page number for scraping.
stopPage: The ending page number for scraping.
appUrl: The base URL of the website from which you want to extract content.
Additionally, you can modify the evaluate function in the script to target specific content types (e.g., paragraphs, headings, etc.).

Example Output (PDF)
The content from each page will be compiled into a single PDF, which can be saved and viewed.

Contributing
Feel free to contribute to this project by forking the repository, making improvements, or reporting any issues. If you have suggestions or bug fixes, open a pull request or create an issue.

License
This project is licensed under the MIT License - see the LICENSE file for details.

