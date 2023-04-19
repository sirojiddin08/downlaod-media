const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://mixdrop.co/f/zpwjpd9na0dk49');

  // await page.screenshot({ path: "example.png", fullPage: true });
  // await page.pdf({ path: "example.pdf", format: "A4" });
  // const html = await page.content();

  // Simulate a click on the important a element and wait for 3 seconds
  const element = await page.$(".download-btn")
  await page.evaluate(element => element.click(), element)
  await page.waitForTimeout(5000);

  const text = await page.evaluate(element => element.innerHTML, element)
  const href = await page.evaluate(element => element.href, element)
  console.log(text, href);


  // The button has been clicked
  console.log('Task completed!');

  // Close the browser
  await browser.close();
})();
