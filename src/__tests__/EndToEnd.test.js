import puppeteer from "puppeteer";

test("An event element is collapsed by default", async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("http://localhost:3000/");
	await page.waitForSelector(".Event");

	const eventDetails = await page.$(".Event .details");
	expect(eventDetails).toBeNull();

	await browser.close();
});
