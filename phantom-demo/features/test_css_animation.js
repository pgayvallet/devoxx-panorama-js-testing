
// TODO : exemple broken

var casper = require("casper").create({
    viewportSize : {width: 800, height: 600}
    // clientScripts
});

casper.start("http://anthonycalzadilla.com/css3-ATAT/index-bones.html", function() {
    this.capture("animation1.png");
});

casper.wait(2000, function() {
    this.capture("animation2.png");
});


casper.run();