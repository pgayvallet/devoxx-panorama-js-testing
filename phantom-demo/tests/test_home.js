
casper.test.comment("home test suite");

casper.start(homeUrl, function() {
    var homeTitle = "Boutique Serpodile. Des cahiers d'écriture pour enfants différents et tous ceux qui veulent apprendre autrement.";
    this.test.assertTitle(homeTitle, "title should match");


    this.test.assertEvalEquals(function() {
        return $(".produit").length;
    }, products.length, "home should have correct number of products displayed");


    // assertSelectorHasText(String selector, String text[, String message])
    // TODO : the other way ( iterate server side ).

    // ou this.test.assert(this.eval [..]
    this.test.assertEval(function(products) {

        var elements = $(".produit");
        for(var i = 0; i < products.length; i++) {
            var product = products[i];
            var element = elements.eq(i);
            if(element.find("h2").text() != product.title) return false;
        }
        //_.each()

        // console.log("hello")

        return true;

    }, "Products should have correct titles", products);


});

casper.thenClick("#panier a", function() {
    this.test.assertSelectorHasText("#content h2.font", "Votre panier est vide", "basket should be empty");
});


casper.run(function() {
    this.test.done();
});
