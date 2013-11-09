
// inject underscore
casper.options.clientScripts = [
    "underscore.js"  // relative or absolute path
];

// sortie console client dans le server
casper.on('remote.message', function(message) {
    console.log(message);
});

homeUrl = "http://localhost:8080";


// load list of products
var fs = require('fs');
products = JSON.parse(fs.read("products.json"));