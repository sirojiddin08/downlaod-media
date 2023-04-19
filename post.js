const puppeteer = require('puppeteer');
const { ElementHandle } = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://mixdrop.co/f/zpwjpd9na0dk49');

  await page.screenshot({ path: "example.png" });
  console.log(element);


  // Simulate a click on the important a element and wait for 3 seconds
  await page.click('a.download-btn');
  await page.waitForTimeout(3000);

  // const hrefValue = await page.$eval('a.download-btn', a => a.href);
  // console.log(hrefValue);


  // The button has been clicked
  console.log('Task completed!');

  // Close the browser
  await browser.close();
})();
