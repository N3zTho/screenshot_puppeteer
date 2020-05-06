const puppeteer = require("puppeteer");

(async () => {
  console.log("Running");
  try {
    const url = "https://www.youtube.com/";

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    await page.setViewport({ width: 1200, height: 800 });
    await page.screenshot({ path: "screenshot.png" });

    await page.close();
    await browser.close();
    console.log("downloaded");
  } catch (err) {
    console.log("error");
  }
})();
