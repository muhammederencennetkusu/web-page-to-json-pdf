const puppeteer = require('puppeteer');
const fs = require('fs');

async function convertToJSON() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const pages = [];
  let appUrl = "https://risaleoku.com/oku/dvan/";
  let startPage = 4;
  let stopPage = 82;
  let jsonName = "divani-harbi";

  for (let i = startPage; i <= stopPage; i++) {
    console.log(`Sayfa ${i} işleniyor...`);
    await page.goto(appUrl + i, { waitUntil: 'domcontentloaded' }); 

    const content = await page.evaluate(() => {
      const bodyText = document.body.innerText.trim();
      return bodyText;
    });

    if (content) {
      pages.push({
        page: i,
        content: content
      });
    } else {
      console.log(`Sayfa ${i} boş veya içerik alınamadı. Atlanıyor...`);
    }
  }

  fs.writeFileSync("json/"+jsonName + '.json', JSON.stringify(pages, null, 2));

  console.log('JSON oluşturuldu: ' + jsonName + '.json');
  await browser.close();
}

convertToJSON();
