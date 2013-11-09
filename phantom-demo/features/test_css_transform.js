

var casper = require("casper").create();

casper.start("http://www.paulrhayes.com/experiments/cube/multiCubes.html", function() {
    this.viewport(1024, 768);

    //this.mouse.processEvent("mousemove", ".cube.two");
    this.page.sendEvent("mousemove", 400, 700);
});

casper.wait(500, function() {
    this.capture("transform.png");
});

casper.run();