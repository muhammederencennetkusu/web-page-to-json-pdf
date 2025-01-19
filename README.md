Web Page to JSON & PDF
Web Page to JSON & PDF is a versatile tool designed to extract content from web pages and save it in two formats: JSON and PDF. It is ideal for scraping text, paragraphs, and other content from websites, making it easy to process and store the extracted data.

Features
🧑‍💻 Extract content from any webpage.
📄 Export data to PDF for easy viewing and sharing.
📊 Save extracted text as JSON for structured data storage.
⚡ Easily customizable for various websites and content types.
🚀 Uses Puppeteer for headless browsing, ensuring smooth automation without a browser UI.
Installation
Follow these steps to get started:

1. Clone the Repository
bash
Kopyala
git clone https://github.com/muhammederencennetkusu/web-page-to-json-pdf.git
2. Navigate to the Project Directory
bash
Kopyala
cd web-page-to-json-pdf
3. Install Dependencies
Run the following command to install necessary dependencies:

bash
Kopyala
npm install
4. (Optional) Install pdf-lib for PDF support
If you plan to work with PDFs, install the pdf-lib library:

bash
Kopyala
npm install pdf-lib
Usage
Convert Web Pages to JSON
To extract content from a website and save it as a JSON file, follow these steps:

Modify the startPage, stopPage, and url variables in the script to match the website and page range you want to scrape.

Run the script using Node.js:

bash
Kopyala
node index.js
The extracted content will be saved in a file called output.json.
Example JSON Output:
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
To extract and save the content of web pages as a PDF:

Set the startPage, stopPage, and url variables in the script to the desired range of pages.

Run the script with:

bash
Kopyala
node index.js
The content will be saved as a single PDF document, named output.pdf.
Configuration
You can easily modify the script by adjusting the following variables:

startPage: The page number to start scraping.
stopPage: The page number to stop scraping.
appUrl: The base URL of the website to scrape from.
Additionally, the evaluate function can be modified to target specific content types (such as paragraphs, images, etc.).

Example Output (PDF)
The content from each page will be compiled into a single PDF document for easy viewing and sharing.

Contributing
We welcome contributions! Feel free to:

Fork the repository and make improvements.
Report any issues you encounter.
Suggest new features or fixes.
To contribute, simply open a pull request or create an issue.

License
This project is licensed under the MIT License.
