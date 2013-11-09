
var casper = require("casper").create();

/*
casper.start("http://www.zachstronaut.com/lab/isocube.html", function() {
    this.viewport(1024, 768);
    this.capture("isocube.png");
});
*/

casper.start("http://xebia.fr", function() {
    this.viewport(1024, 768);
    this.evaluate(function() {
        document.body.bgColor = 'white';
    });
    this.capture("xebia.png");
});

casper.run();