sap.ui.define([
	"sap/ui/core/UIComponent",
	"LogaliUI5/SAPUI5/model/models",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, models, ResourceModel) {

	return UIComponent.extend("LogaliUI5.SAPUI5.Component", {

		metadata: {
			manifest: "json"
				/*			rootView: {
								"viewName": "LogaliUI5.SAPUI5.view.App",
								"type": "XML",
								"async": true,
								"id": "app"
							}*/
		},

		init: function () {
			// Call Init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// Set model on view
			this.setModel(models.createRecipient());

			// Set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "LogaliUI5.SAPUI5.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		}

	});
});