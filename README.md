
  <h1>Web Page to JSON & PDF</h1>

  <p><strong>Web Page to JSON & PDF</strong> is a versatile tool designed to extract content from web pages and save it in two formats: JSON and PDF. It is ideal for scraping text, paragraphs, and other content from websites, making it easy to process and store the extracted data.</p>

  <h2>Features</h2>
  <ul>
    <li>🧑‍💻 Extract content from any webpage.</li>
    <li>📄 Export data to <strong>PDF</strong> for easy viewing and sharing.</li>
    <li>📊 Save extracted text as <strong>JSON</strong> for structured data storage.</li>
    <li>⚡ Easily customizable for various websites and content types.</li>
    <li>🚀 Uses <strong>Puppeteer</strong> for headless browsing, ensuring smooth automation without a browser UI.</li>
  </ul>

  <h2>Installation</h2>
  <p>Follow these steps to get started:</p>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/muhammederencennetkusu/web-page-to-json-pdf.git</code></pre>

  <h3>2. Navigate to the Project Directory</h3>
  <pre><code>cd web-page-to-json-pdf</code></pre>

  <h3>3. Install Dependencies</h3>
  <pre><code>npm install</code></pre>

  <h3>4. (Optional) Install <strong>pdf-lib</strong> for PDF support</h3>
  <pre><code>npm install pdf-lib</code></pre>

  <h2>Usage</h2>
  <h3>Convert Web Pages to JSON</h3>
  <p>To extract content from a website and save it as a JSON file, follow these steps:</p>

  <ol>
    <li>Modify the <code>startPage</code>, <code>stopPage</code>, and <code>url</code> variables in the script to match the website and page range you want to scrape.</li>
    <li>Run the script using Node.js:
      <pre><code>node index.js</code></pre>
    </li>
    <li>The extracted content will be saved in a file called <code>output.json</code>.</li>
  </ol>

  <h4>Example JSON Output:</h4>
  <pre><code>
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
  </code></pre>

  <h3>Convert Web Pages to PDF</h3>
  <p>To extract and save the content of web pages as a PDF:</p>

  <ol>
    <li>Set the <code>startPage</code>, <code>stopPage</code>, and <code>url</code> variables in the script to the desired range of pages.</li>
    <li>Run the script with:
      <pre><code>node index.js</code></pre>
    </li>
    <li>The content will be saved as a single PDF document, named <code>output.pdf</code>.</li>
  </ol>

  <h2>Configuration</h2>
  <p>You can easily modify the script by adjusting the following variables:</p>
  <ul>
    <li><strong>startPage</strong>: The page number to start scraping.</li>
    <li><strong>stopPage</strong>: The page number to stop scraping.</li>
    <li><strong>appUrl</strong>: The base URL of the website to scrape from.</li>
  </ul>

  <p>Additionally, the <strong>evaluate</strong> function can be modified to target specific content types (such as paragraphs, images, etc.).</p>

  <h2>Example Output (PDF)</h2>
  <p>The content from each page will be compiled into a single PDF document for easy viewing and sharing.</p>

  <h2>Contributing</h2>
  <p>We welcome contributions! Feel free to:</p>
  <ul>
    <li>Fork the repository and make improvements.</li>
    <li>Report any issues you encounter.</li>
    <li>Suggest new features or fixes.</li>
  </ul>
  <p>To contribute, simply open a pull request or create an issue.</p>

  <h2>License</h2>
  <p>This project is licensed under the <a href="LICENSE" target="_blank">MIT License</a>.</p>
</body>
</html>
