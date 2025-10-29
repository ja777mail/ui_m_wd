class ApiDemosScreen {
	get textList() {
		return $$("android.widget.TextView");
	}

	get alertDialogsBtn() {
		return $("~Alert Dialogs");
	}
}

// ✅ экспорт готового экземпляра (аналог module.exports = new ...)
export default new ApiDemosScreen();
