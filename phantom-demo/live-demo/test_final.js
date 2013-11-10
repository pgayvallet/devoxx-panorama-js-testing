var homeUrl = "http://localhost:8080";
var homeTitle = "Boutique Serpodile. Des cahiers d'écriture pour enfants différents et tous ceux qui veulent apprendre autrement.";

casper.test.comment("Home test Suite");

casper.start(homeUrl, function() {

    casper.test.assertTitle(homeTitle);

    casper.test.assertEval(function() {
        return $(".produit").length == 7;
    }, "should display 7 products");

});

casper.thenClick(".produit:nth-child(1) .btn_ajouter");
casper.thenClick(".produit:nth-child(2) .btn_ajouter");

casper.wait(500, function() {

    casper.test.assertSelectorHasText("#nb-article", "2 articles");

    // casper.capture("debug.png");
});

casper.thenClick("#panier a", function() {

    casper.test.assertUrlMatch(/cart$/, "should be on the basket page");

    casper.test.assertEval(function() {
        return $("#table_kart tr.basket_item").length == 2;
    }, "there should be two items in the basket");

});

casper.thenClick(".btn_valider");

casper.thenClick("#validate", function() {

    // casper.capture("validate.png");

    casper.test.assertVisible("span.error", "error messages should be displayed");

});

casper.run(function() {
    this.test.done();
});