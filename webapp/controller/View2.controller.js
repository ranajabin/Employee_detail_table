sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("navigationandrouting5.navigationandroutingproject5.controller.View2", {

            onInit: function () {
                debugger;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);

            },

            onRouteMatch: function (evt) {
                debugger;
                var keyId2 = evt.mParameters.arguments.Id;

                var array1 = [
                    { "employeeId": "1111", "empName": "AMit", "Salary": "200000", "Location": "Bangalore" },
                    { "employeeId": "2222", "empName": "Rohit", "Salary": "250000", "Location": "Pune" },
                    { "employeeId": "3333", "empName": "Sumit", "Salary": "3000000", "Location": "Mumbai" },
                ];
                var data = [];
                for (var i = 0; i < array1.length; i++) {
                    if (keyId2 == array1[i].employeeId) {
                        data.push(array1[i]);
                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(data);
                        this.getView().setModel(oModel, "array2");
                    }
                }
            },
            onNavBack: function () {
                history.go(-1);
            }
        });
    });



