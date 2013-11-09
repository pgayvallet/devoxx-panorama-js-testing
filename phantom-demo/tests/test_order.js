
casper.test.comment("order test suite");


casper.start(homeUrl, function() {

    this.click(".produit:first-child .btn_ajouter");

});

casper.wait(1000);

casper.then(function() {
    this.test.assertEval(function() {
        return $("#nb-article").text() == "1 article";
    }, "basket should display correct label");
});

casper.thenClick("#panier a", function() {

    // using cart.jsp hack.
    this.test.assertEval(function() {
        return $("#table_kart .basket_item").length == 1;
    }, "basket should display one item.");
    this.test.assertSelectorHasText("#table_kart .basket_item h3", products[0].title, "basket item title should be correct");

});

casper.thenClick(".valider a", function() {

    casper.test.assertUrlMatch(/order[.]html$/, "we should be on the order page.");

    this.click("#validate");

    this.test.assertEval(function() {
        return $("span.error").length > 0;
    }, "error messages should be displayed");

});

casper.then(function() {

    casper.fill("#checkout_form", {
        "prenom"        : "Headless",
        "nom"           : "Zombie",
        "email"         : "headlesszombie@morlhon.net",
        "nom_l"         : "Headless Zombie",
        "adresse_l"     : "66 rue ambroise croizat",
        "code_postal_l" : "78800",
        "ville_l"       : "Houilles",
        "pays_l"        : "france",
        "cgv"           : true
    }, true);


});

casper.then(function() {

    this.test.assertSelectorHasText("#content", "Votre commande a bien été enregistrée", "command should be registered");

});

casper.thenOpen("http://test:test@localhost:8080/orders", function() {



})

casper.run(function() {
    this.test.done();
});