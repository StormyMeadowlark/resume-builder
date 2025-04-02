const puppeteer = require("puppeteer");

const fetchCompanyContent = async (url) => {
  try {
    console.log("🧠 Launching headless browser to scrape:", url);

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });

    // Wait for something meaningful to appear (like #root content)
    await page.waitForSelector("body", { timeout: 5000 });

    // Extract more than just <p> — include headings, spans, divs
    const content = await page.evaluate(() => {
      const selectors = ["main", "div"];
      return Array.from(document.querySelectorAll(selectors.join(",")))
        .map(el => el.innerText.trim())
        .filter(text => text.length > 10) // filter short/irrelevant chunks
        .join("\n\n");
    });

    await browser.close();

    return content.trim().slice(0, 30000); // cap to avoid token overload
  } catch (error) {
    console.error("❌ Puppeteer scrape failed:", error.message);
    return null;
  }
};

module.exports = { fetchCompanyContent };
