const puppeteer = require('puppeteer');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function convertToPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  let appUrl = "https://risaleoku.com/oku/dvan/";
  let startPage = 4;
  let stopPage = 82;
  let pdfName = "divani-harbi";

  const mergedDoc = await PDFDocument.create();

  for (let i = startPage; i <= stopPage; i++) {
    const url =  appUrl+`${i}`;
    console.log(`Sayfa ${i} işleniyor...`);

    await page.goto(url, { waitUntil: 'networkidle2' });

    const pdfBytes = await page.pdf({
      format: 'A4',
      printBackground: true
    });

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach(page => mergedDoc.addPage(page));
  }

  const finalPdfBytes = await mergedDoc.save();
  fs.writeFileSync("pdf/"+pdfName+'.pdf', finalPdfBytes);

  console.log('PDF oluşturuldu: output.pdf');
  await browser.close();
}

convertToPDF();
