import { chromium } from "playwright";

const base = "http://localhost:3001";
const pages = [
  "/", "/company", "/process", "/quality", "/enquiry", "/contact",
  "/products/white-onion", "/products/red-onion", "/products/pink-onion",
  "/products/toasted-onion", "/products/fried-onion",
  "/products/garlic", "/products/vegetables", "/products/spices",
];

const browser = await chromium.launch();
let failures = 0;

async function newPageWithLogging() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const issues = [];
  page.on("console", (msg) => { if (msg.type() === "error") issues.push(`console.error: ${msg.text()}`); });
  page.on("pageerror", (err) => issues.push(`pageerror: ${err.message}`));
  page.on("requestfailed", (req) => {
    if (!req.url().includes("favicon")) issues.push(`requestfailed: ${req.url()} — ${req.failure()?.errorText}`);
  });
  page.__issues = issues;
  return page;
}

function report(label, issues) {
  if (issues.length) {
    failures += issues.length;
    console.log(`FAIL ${label}`);
    issues.forEach((i) => console.log(`    ${i}`));
  } else {
    console.log(`OK ${label}`);
  }
}

for (const path of pages) {
  const page = await newPageWithLogging();
  const resp = await page.goto(base + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const status = resp.status();
  const issues = [...page.__issues];
  if (status !== 200) issues.push(`http status ${status}`);
  const brokenImgs = await page.evaluate(() =>
    Array.from(document.images).filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.src)
  );
  brokenImgs.forEach((src) => issues.push(`broken image: ${src}`));
  report(`GET ${path}`, issues);
  await page.close();
}

{
  const page = await newPageWithLogging();
  await page.goto(base + "/enquiry", { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  await page.fill('input[name="name"]', "Test Buyer");
  await page.fill('input[name="company"]', "Test Co");
  await page.fill('input[name="email"]', "buyer@example.com");
  await page.fill('textarea[name="message"]', "Interested in a quote.");
  await page.click('button[type="submit"]');
  await page.waitForTimeout(2000);
  const success = await page.isVisible("text=Enquiry received");
  const issues = [...page.__issues];
  if (!success) issues.push("success state not shown after valid submit");
  report("Enquiry form submission", issues);
  await page.close();
}

{
  const page = await newPageWithLogging();
  await page.goto(base + "/products/fried-onion", { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  await page.click("text=Enquire About This Product");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(600);
  const url = page.url();
  const selected = await page.locator("#product").inputValue();
  const issues = [...page.__issues];
  if (!url.includes("product=fried-onion")) issues.push(`url missing product param: ${url}`);
  if (selected !== "fried-onion") issues.push(`dropdown not pre-filled, got: ${selected}`);
  report("Product -> Enquiry pre-fill (fried-onion)", issues);
  await page.close();
}

{
  const page = await newPageWithLogging();
  await page.goto(base + "/", { waitUntil: "networkidle" });
  const hrefs = await page.$$eval("a[href^='/']", (as) => [...new Set(as.map((a) => a.getAttribute("href")))]);
  const issues = [];
  for (const href of hrefs) {
    const clean = href.split("?")[0].split("#")[0];
    if (!clean) continue;
    const r = await page.request.get(base + clean);
    if (r.status() >= 400) issues.push(`${href} -> ${r.status()}`);
  }
  report(`Homepage link crawl (${hrefs.length} links)`, issues);
  await page.close();
}

await browser.close();
console.log("\n---");
console.log(failures === 0 ? "ALL TESTS PASSED" : `${failures} ISSUE(S) FOUND`);
process.exit(failures === 0 ? 0 : 1);
