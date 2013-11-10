

casper.test.comment("Home Test Suite");

casper.start(homeUrl, function() {

    this.test.assertTitle(homeTitle, "title should be correct");

    this.test.assertEval(function() {
        return $(".produit").length == 7;
    }, "home should display 7 products");

});

casper.thenClick("#panier a", function() {

    this.test.assertSelectorHasText("#content", "Votre panier est vide");

});


casper.run(function() {
    this.test.done();
});