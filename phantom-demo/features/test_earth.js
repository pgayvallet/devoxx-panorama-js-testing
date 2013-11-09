
var casper = require("casper").create({
    viewportSize : { width: 1280, height : 1024}
});

casper.start("http://neography.com/experiment/circles/solarsystem/", function() {

    this.capture("earth_1.png");

});

casper.wait(2000, function() {

    casper.mouse.processEvent("mousemove", "#venus");
    this.capture("earth_2.png");

});

casper.run();