// npx wdio
// npx wdio wdio.conf.js
// npx wdio config/wdio.android.conf.js

import ApiDemosScreen from "../../../screens/android/apiDemos.screen";

describe("Sample tests", () => {
	before(async () => {
		// await driver.pause(3000);
		console.log("\nSample tests - BEFORE HOOK\n");
	});
	after(() => {
		console.log("\nSample tests - AFTER HOOK\n");
	});
	beforeEach(() => {
		console.log("\nSample tests - BEFORE EACH HOOK\n");
	});
	afterEach(() => {
		console.log("\nSample tests - AFTER EACH HOOK\n");
	});

	it.only("Screen object test", async () => {
		const textList = await ApiDemosScreen.textList;
		console.log("Text elements found:", textList.length);
	});

	it("Find element by class name", async () => {
		// find element by class name
		const className = await $("android.widget.TextView");
		// assert
		await expect(className).toHaveText("API Demos");
	});

	it("Find multiple elements", async () => {
		const expectedList = [
			"API Demos",
			"Access'ibility",
			"Accessibility",
			"Animation",
			"App",
			"Content",
			"Graphics",
			"Media",
			"NFC",
			"OS",
			"Preference",
			"Text",
			"Views",
		];
		const actualList = [];
		// find multiple elements
		// const textList = await $$("android.widget.TextView");
		const textList = await ApiDemosScreen.textList;
		// loop through them
		for (const element of textList) {
			actualList.push(await element.getText());
		}
		// assert the list
		await expect(actualList).toEqual(expectedList);
	});

	it("Working with text field", async () => {
		// access the auto complete screen
		await $("~Views").click();
		await $('//*[@text="Auto Complete"]').click();
		await $('//*[@content-desc="1. Screen Top"]').click();
		// enter the country name
		const textField = await $(
			'//*[@resource-id="io.appium.android.apis:id/edit"]'
		);
		await textField.addValue("Canada");
		// verify the country name
		await expect(textField).toHaveText("Canada");
	});
});
