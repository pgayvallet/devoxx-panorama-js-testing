
var casper = require("casper").create({
    viewportSize : { width: 1280, height : 1024}
});

casper.start("http://modernizr.github.com/Modernizr/test/index.html", function() {
    this.evaluate(function() {
        document.body.bgColor = 'white';
    });
    this.capture("modernizr.png");
    console.log("all done");
});

casper.run();