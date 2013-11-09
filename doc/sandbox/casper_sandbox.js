
// screen cast

// casper
casper.start('http://localhost:8080', function() {
    this.captureSelector('header.png', '#header');
});

casper.run();


// phantom
var page = require('webpage').create();
page.open("http://localhost:8080", function(status) {
	if(status!="success") {
		phantom.exit();
	}
	var headerClipRect = page.evaluate(function() {
		var clipRect = document.querySelector(selector).getBoundingClientRect();
        return {
            top: clipRect.top, left: clipRect.left, 
            width: clipRect.width, height: clipRect.height
        };	
	});
	var oldClipRect = page.clipRect;
	page.clipRect = headerClipRect;
	page.render("header.png");
	page.clipRect = oldClipRect;

	phantom.exit();
});    

//// Url opening

// phantom
var page = require("webpage").create();
page.open(url1, function(status) {
    if(status=="fail") { phantom.exit(); }
    page.open(url2, function(status) {
        if(status=="fail") { phantom.exit(); }
        page.open(url3, function(status) {
            if(status=="fail") { phantom.exit(); }

            // DO SOMETHING

        });
    });
});

// casper

var casper = require("casper").create();
casper.on("load.finished", function(status) {
    if(status=="fail") { this.exit(); }
});

casper.start(url1);
casper.thenOpen(url2);
casper.thenOpen(url3, function() {

    // DO SOMETHING

});


//// Tester API

casper.test.comment('Loosy comment');

casper.start(homeUrl, function() {
    this.test.assertTitle(homeTitle, "home title should match");

    this.test.assertEval(function() {
   		return $(".product").length == 7;
    }, "home should display 7 products");

    this.click(".product a").click();
});

casper.then(function() {
	this.test.assertUrlMatch(/http:\/\/localhost:8080\/product/, "should be on a product url");
});

casper.run(function() {
    this.test.done(3); 
});

// 1.1 tester API


casper.test.begin('My test name', 2, {
    setUp: function(test) {
        // some setup stuff
    },

    tearDown: function(test) {
        // some tearDown stuff
    },

    test: function(test) {
        casper.open(url, function() {
            test.assertTitle("my title", "title should match")
        });
        casper.then(function() {
            // some more test
        });
        casper.then(function() {
            test.done(); // finishing the test.
        })
    }
});


// appel au tester

/*
$ casperjs test --includes=foo.js,bar.js \ ## these scripts will be included at startup
                --pre=pre-test.js \        ## this will be executed before each test
                --post=post-test.js \      ## this will be executed after each test
                --direct \                 ## log messages redirected to the console
                --log-level=debug \        ## log level
                --fail-fast \              ## stop suite after first fail.
                --xunit=xunit.xml          ## path for the xunit output file
                test1.js test2.js /path/to/another/test/dir ## path to test and test folders to launch
*/