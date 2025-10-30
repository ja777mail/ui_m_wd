// import path from "path";
import { config as baseConfig } from "./wdio.shared.conf.js";

// ========================
// Browserstack Credentials
// ========================
baseConfig.user = process.env.BS_USER || "dah_NUrSzG";
baseConfig.key = process.env.BS_KEY || "Ku3sw4A8o9DZyRxpBxoi";
//
// // ====================
// // Runner Configuration
// // ====================
// baseConfig.port = 4723;
// //
// ==================
// Specify Test Files
// ==================
baseConfig.specs = ["../test/specs/android/*.js"];
//
// ============
// Capabilities
// ============
baseConfig.capabilities = [
	{
		// capabilities for local Appium web tests on an Android Emulator
		// https://www.browserstack.com/docs/app-automate/capabilities
		platformName: "Android",
		"appium:deviceName": "Google Pixel 9 Pro", // Android GoogleAPI Emulator
		"appium:platformVersion": "15.0", // 12.0
		"appium:automationName": "UiAutomator2",
		// "appium:app": path.join(process.cwd(), "app/android/ApiDemos-debug.apk"),
		"appium:app": "bs://6023b2679af83d5f6f7f1d253d82006d38bbb8d3",
	},
];
//
// ===================
// Test Configurations
// ===================
baseConfig.services = ["browserstack"];

export const config = baseConfig;
