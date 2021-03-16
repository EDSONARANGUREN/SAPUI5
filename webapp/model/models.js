sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict"; // Uso privado

	return {

		createRecipient: function () {

			var oData = {
				recipient: {
					name: "Word"
				}
			};

			// Opción 1 para RETURN
			//var oModel = new JSONModel(oData);
			//return oModel;

			// Opción 2 para RETURN
			return new JSONModel(oData);
		}
	};
});