// import path from "path";
import { config as baseConfig } from "./wdio.shared.conf.js";

// ========================
// Browserstack Credentials
// ========================
baseConfig.user = process.env.BS_USER;
baseConfig.key = process.env.BS_KEY;
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
		"appium:app": "bs://f0cf2db91b09f9c6d27279e69d72a926c48bcc65",
	},
];
//
// ===================
// Test Configurations
// ===================
baseConfig.services = ["browserstack"];

export const config = baseConfig;
