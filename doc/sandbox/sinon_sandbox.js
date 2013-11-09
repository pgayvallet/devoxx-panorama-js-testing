
// spies

var greeter = {
    greet : function(name) {
        console.log("hello " + (name || "stranger") + " !");
    }
}

var spy = sinon.spy(greeter, "greet");

greeter.greet("john");
greeter.greet("bobby");

spy.called      // true;
spy.calledOnce  // false
spy.calledTwice // true;

spy.withArgs("john").called // returns true
spy.withArgs("dolly").called // return false

// stubs

var stub = sinon.stub();

stub.returns("stubbed");
stub.withArgs("hello").returnsArg(0);
stub.withArgs("throw").throws("Woups");

stub();         // returns "stubbed"
stub("dolly");  // returns "stubbed"
stub("hello");  // returns "hello"
stub("throw");  // throws Woups

// this work too
stub.withArgs("hello").calledOnce;
stub.threw("Woups"); // returns true


// replacing existing methods :

var stuff = {
    work : function() { return "ok";}
};

// replacing object method with a stub
var stub = sinon.stub(stuff, "work");

stub.returns("stubbed");

stub(); // returns "stubbed"
greeter.greet(); // this works too

stub.restore(); // original method restored
stuff.work(); // return "ok" again


// mock

test("mock should mock", function() {
    var greeter = {
        greet : function(name) {
            console.log("hello " + (name || "stranger") + " !");
        }
    };

    var mock = sinon.mock(greeter);
    mock.expects("greet").once().withArgs("john");

    // mock.verify() // would raise
    greeter.greet("john");
    mock.verify(); // will pass
});

// fake timers

var clock = sinon.useFakeTimers();
var spy = sinon.spy();

window.setTimeout(spy, 150);

clock.tick(149);
spy.called; // returns false

clock.tick(1);
spy.called; // returns true

// alternative

var clock = sinon.useFakeTimers();
var spy = sinon.spy();

window.setInterval(spy, 30);
clock.tick(100);

clock.restore();

spy.calledThrice; // returns true

// fake xhr

var xhr = sinon.useFakeXMLHttpRequest();
var requests = [];
xhr.onCreate = function (request) {
    requests.push(request);
};

var spy = sinon.spy();

$.get("/").then(spy);

requests[0].respond(200, {}, "some text");

spy.calledOnce; // returns true
spy.withArgs("some text").calledOnce; // returns true

// fake server

var server = sinon.fakeServerWithClock.create();
server.respondWith("GET", "/",
    [200, { "Content-Type": "text/plain" }, "fake response"]);
var spy = sinon.spy();

$.get("/").then(spy);
server.respond();

spy.calledOnce;  // returns true
spy.withArgs("fake response").calledOnce; // returns true


// sandbox

var sandbox = sinon.sandbox.create();

sandbox.useFakeTimers();
sandbox.useFakeServer();
// all code from there uses fake timer and server.

// [...]

sandbox.restore();
// original behaviour is now restored.

// using sinon in qunit test
test("sinon adapter should work", function () {

    var stub = this.stub();
    stub.returns("stubbed");

    var result = stub();

    equal(result, "stubbed", "result value should be stubbed");
    ok(stub.calledOnce, "spy should have been called once");
});


////////////////////////
// more advanced exemple :
