
// screencast

/*
var page = require('webpage').create();
page.viewportSize = { width: 1280, height: 1024 };

// page.clipRect = { top: 14, left: 3, width: 400, height: 300 };

page.open('http://github.com/', function () {
    page.render('github.png');
    phantom.exit();
});
*/


// double context d'execution
/*
// BAD
var title = null;
page.evaluate(function() {
    title = document.title
});
console.log(title); // prints null.

// GOOD
var title = page.evaluate(function() {
    return document.title;
});
console.log(title); // print the page title.
*/



// hello world

var page = require('webpage').create();

page.open('http://localhost:8080', function (status) {

    var title = page.evaluate(function() {
       return document.title;
    });
    console.log("page title = " + title);

    var titles = page.evaluate(function() {
        var productTitleElements = document.querySelectorAll(".produit h2");
        var productTitles = [];
        for(var i=0; i<productTitleElements.length; i++) {
            productTitles.push(productTitleElements[i].textContent);
        }
        return productTitles;
    });
    console.log("article titles = ", JSON.stringify(titles));

    phantom.exit();
});

