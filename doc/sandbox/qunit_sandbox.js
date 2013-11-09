
module("Hello.World");

test("universe should agree", function() {
    ok(42==42, "probably true");
});

module("JS.Troll");

test("equality should be trolling material", function() {
    equal('\n\r\t' , 0, "a whitespace string is equal to zero");
});

test("transitivity should be trolling material", function() {

    equal(0, "");
    equal(0, "0");
    notEqual("", "0");
});



// test

test("true should be equals to true and different that false", function() {

    ok(true==true);
    ok(true!=false)

});


// module

module("Devoxx.View", {
    setup : function () {
        this.domSandbox = $("#sandbox");
    },
    teardown : function () {
        this.domSandbox.empty();
    }
});

test("view dom element should render", function() {
    var test = this;
    var View = Backbone.View.extend({
        className : "view",
        render : function() {
            this.$el.html("ok").appendTo(test.domSandbox);
        }
    });
    var view = new View();
    view.render();

    equal(this.sandbox.find(".view").length, 1);
    ok(this.sandbox.find(".view").html(), "ok");
});

test("another test about view dom rendering", function() {
    // sandbox will be empty again there.
});

// assertions

// ok()
ok(3 > 2); // pass
ok(1==2); // fail

// equals()
equal("same value", "same value"); // pass
equal("some value", "another value"); // fail

// deepEqual()
var a = { someValue : 2 };
var b = { someValue : 2 };
equal(a, b); // fail because a and b have not the same reference.
deepEqual(a, b); // pass because a and b have the same attributes.

// strictEqual()
equal(1, true); // pass because (1==true) is true
strictEqual(1, true); // fail because (1===true) is false"

// throws()
throws(function() {
    throw "thrown";
}, "thrown");   // pass because expected exception is raised.



// asyncTest

module("Devoxx.Async", {
    setup : function () { this.domSandbox = $("#sandbox"); },
    teardown : function () { this.domSandbox.empty(); }
});

asyncTest("element should be hidden after animation", function() {
    expect(3);

    var el = $("<div>").appendTo(this.domSandbox);

    ok(el.is(":visible"), "element should be visible");
    el.slideUp(1000);
    ok(el.is(":visible"), "element should still be visible during animation");

    setTimeout(function() {
        ok(el.is(":hidden"), "element should be hidden at end of animation");
        start(); // telling the test to start
    }, 1000);

});

asyncTest("stuff and remote work loading", function() {

    var stuff = new Stuff();
    ok(!stuff.readyToWork);

    $.get("/some/work/url", function(work) {

        stuff.loadWork(work);

        ok(stuff.readyToWork);

        start(); // telling the test to start.
    });

});




test("another test about view dom rendering", function() {
    // sandbox will be empty again there.
});


// plugins

// assertion definition
QUnit.extend( QUnit.assert, {
    /**
     * Asserts that given number is strictly greater than given minimum
     */
    greaterThan : function(number, minimum, message) {
        QUnit.push(number > minimum, number, ">" + minimum, message);
    }
});

// [...] using the assertion in a test
test("testing that 5 should be greater 3", function(assert) {
    var five = 5;
    var three = 3;
    assert.greaterThan(five, three, "5 should be greater than 3");
});