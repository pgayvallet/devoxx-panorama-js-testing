
// http://docs.busterjs.org/en/latest/getting-started/

// Approche TDD

buster.testCase("project.Stuff", {

	setUp: function () {
        this.stuff = new Stuff();
    },

    "my stuff should exists" : function () {
        assert.defined(this.stuff);
    },

	"my stuff should be fluffy" : function() {
		assert(this.stuff.isFluffy());
	}

});

// Approche BDD

buster.spec.expose(); // expose globals.

describe("my stuff", function () {

	before(function() {
		this.stuff = new Stuff();
	});

    it("should exists", function () {
        expect(this.stuff).toBeDefined();
    });

    it("should be fluffy", function() {
    	expect(this.stuff.isFluffy()).toBe(true);
    });

});

// nested tests

buster.testCase("project.Stuff", {

	setUp: function () {
        this.stuff = new Stuff();
    },  

	"new stuff" : {	
		"is working" : function() {
			assert(this.stuff.working());
		}
	},

	"broken stuff" : {
		setUp : function() {
			this.stuff.broken = true;
		},

		"is not working" : function() {
			refute(this.stuff.working());
		}
	}

});

// assert vs refute

assert.isNotNull(); // n'existe pas

refute.isNull();

// disabled tests

buster.testCase("projet.refactor", {
    "this test will run normally": function () {
        assert(true);
    },
    "// this test will appear but not run": function () {
        assert(false);
    }
});



// Browser test

buster server

// then

buster test


/*
can launch multiple browser 

récent ( version 1.0 milieu d'année 2012 )

basé sur NPM;
*/

config["My tests"] = {
    env: "browser",        // or "node"
    extensions: [require("buster-coverage")], // adding the coverage extension
    "buster-coverage": {
        outputDirectory: "coverage_reports"  // any plugin config
    },
    rootPath: "../",
    libs : [               // list of libs to use for tests
        "lib/jquery.js", "lib/underscore.js"
    ],
    sources: [             // list of source files
        "sources/**/*.js"  // Glob patterns supported
    ],
    tests: [               // List of test files.
        "test/*-test.js"
    ],
    resources: [           // list of server resources available to tests.
    	{ 
    		path: "/todo-items",    // proxy resource to remote server
    		backend: "http://localhost:8000/todo/todo-items" 
    	},
    	{
	        path: "/user.json",     // mocked resource
	        content: JSON.stringify({ id: 1, name: "Christian" }),
	        headers: { "Content-Type": "application/json" }
        }
    ]
};


// feature requirement

buster.testCase("My thing", {
    requiresSupportFor: {
        "touch events": typeof(document.body.ontouchstart) != "undefined",
        "XHR": typeof(XMLHttpRequest) != "undefined"
    },

    "touch events should trigger an ajax call": function () {
        // ..
    }

});

// deferred test

buster.testCase("projet.deferred", {

    "this test will be executed": function () {
        assert(true);
    },

    "// this test will not appear but not launch": function () {
        assert(false);
    }

});