
/*
    Show that phantomjs is capable of true canvas rendering.
*/

var casper = require("casper").create();

casper.start('http://tomtheisen.com/spread/');

casper.wait(1000, function() {
    this.captureSelector("screen1.png", "#notepad");
    console.log("first screen captured");
});

casper.wait(5000, function() {
    this.captureSelector("screen2.png", "#notepad");
    console.log("second screen captured");
});

casper.run();
