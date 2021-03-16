sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	/*	"LogaliUI5/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel"*/
], function (Controller, MessageToast) {
	"use strict"; // Uso privado

	return Controller.extend("LogaliUI5.SAPUI5.controller.App", {
		// Uso público

		onInit: function () {
			/*			// Set model on view
						this.getView().setModel(models.createRecipient());
						
						// Set i18n model on view
						var i18nModel = new ResourceModel({
							bundleName: "LogaliUI5.SAPUI5.i18n.i18n"
						});
						this.getView().setModel(i18nModel, "i18n");*/
		},

		onShowHello: function () {

			// Read text from i18n / model
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("helloWorld");
			var sName = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = sHello.concat(" ").concat(sName);

			// Asignar por variable
			MessageToast.show(sMsg);

			// Asignar directo
			//MessageToast.show(sHello.concat(" ").concat(sName));

			// Hardcode
			//MessageToast.show("Hellow World 5");

			/*eslint-disable no-alert*/ // Quitar el error de alert en un JS
			//alert("Hello World");
			/*eslint-enable no-alert*/ // Activa el validador de alert en JS
		}
	});
});