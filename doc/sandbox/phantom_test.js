


/*
var homeUrl = "http://localhost:8080";
var homeTitle = "Cahier d'écriture cursive 7 mms dans la boutique Serpodile.";

casper.test.comment('Loosy comment');

casper.start(homeUrl, function() {
    this.test.assertTitle(homeTitle, "home title should match");

    this.test.assertEval(function() {
   		return $(".product").length == 7;
    }, "home should display 7 products");

    this.click(".product a").click();
});

casper.then(function() {
	this.test.assertUrlMatch(/^http:\/\/localhost:8080\/product/, "should be on a product url");
});
*/


var homeTitle = "Boutique Serpodile. Des cahiers d'écriture pour enfants différents et tous ceux qui veulent apprendre autrement.";

casper.start("http://localhost:8080", function() {
	this.test.assertTitle(homeTitle, "home title should match");

	this.test.assertEvalEquals(function() {
   		return $(".produit").length;
    }, 7, "home should display 7 products");

});

casper.thenClick(".produit a", function() {
	this.test.assertUrlMatch(/^http:\/\/localhost:8080\/product/, "should be on a product url");
});

casper.run(function() {
    this.test.done(3); 
});