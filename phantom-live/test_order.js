
casper.test.comment("Order Test Suite");

casper.start(homeUrl, function() {

    this.click(".produit:nth-child(1) .btn_ajouter");

    this.click(".produit:nth-child(2) .btn_ajouter");

    this.test.assertSelectorHasText("#nb-article", "2 articles");


});


casper.thenClick("#panier a", function() {

    this.test.assertEval(function(size) {
        return $("#table_kart .basket_item").length == size;
    }, "basket should contains 2 items", 2);

});

casper.thenClick(".btn_valider", function() {

    casper.click("#validate");

    casper.test.assertExists("span.error", "error should be displayed");


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

    casper.capture("error.png");



    casper.test.assertSelectorHasText("#content", "Votre commande a bien été enregistrée")



})


casper.run(function() {
    this.test.done();
});