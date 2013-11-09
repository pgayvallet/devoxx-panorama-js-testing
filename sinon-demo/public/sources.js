/**
 * Class - base class object.
 */
var Class = function() {
    this.initialize && this.initialize.apply(this, arguments);
};
_.extend(Class.prototype, Backbone.Events);
Class.extend = Backbone.Model.extend;


ONE_MINUTE = 1;// 1000 * 60;


Server = Class.extend({

    takeBeerOrderFrom : function(client) {
        if(this.isBusy()) {
            return;
        }
        return this.serveBeer(client);
    },

    isBusy : function() {
        return /* deep logic, but - */false;
    },

    serveBeer : function(client) {
        client.receiveBeer();
    },

    goGetBillFor : function(client) {
        $.get("/bills/", { clientId : client.id }).then(function(bill) {
            client.payBill(bill);
        }, "json");
    }

});

Client = Class.extend({

    initialize : function(server) {
        if(server==null) {
            throw "Server Required";
        }
        this.id = _.uniqueId("client_");
        this.drinks = [];
        this.server = server;
    },

    orderBeer : function() {
        this.server.takeBeerOrderFrom(this);
    },

    receiveBeer : function(beer) {
        this.drinks.push(beer);
        var client = this;
        setTimeout(function() {
            client.goToTheBathroom();
        }, 15 * ONE_MINUTE);
    },

    goToTheBathroom : function() {
        // going to the bathroom
    },

    requestBill : function() {
        this.server.goGetBillFor(this);
    },

    payBill : function(bill) {
        // paying the bill
    }

});
