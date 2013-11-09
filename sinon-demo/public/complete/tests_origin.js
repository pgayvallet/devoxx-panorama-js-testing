

module("Bar");

test("Client should have a server assigned and no drinks when entering the bar", function() {

    var server = new Server();
    var client = new Client(server);

    ok(client.server!=null, "client should have a server");
    strictEqual(client.drinks.length, 0, "client should have no consummed drinks")

});

test("Server should serve a beer to the client who ordered one", function() {


    var server = new Server();

    var clientA = new Client(server);
    var clientB = new Client(server);

    var serveSpy = this.spy(server, "serveBeer");

    clientA.orderBeer();

    ok(serveSpy.calledOnce, "server should have server a beer");
    ok(serveSpy.withArgs(clientA).calledOnce, "server should have served a beer to this client");
    ok(serveSpy.withArgs(clientB).notCalled, "server should have served a beer to this client");


});

test("Server should not be able to serve a beer if he is busy", function() {

    var server = new Server();
    var client = new Client(server);

    var serveSpy = this.spy(server, "serveBeer");
    var busyStub = this.stub(server, "isBusy").returns(true);

    client.orderBeer();

    ok(serveSpy.notCalled, 0, "server should have server a beer");

});

asyncTest("Client should go to the toilets 15 minutes after the first beer", function() {

    var server = new Server();
    var client = new Client(server);

    // bug with spy in asyncTest
    var bathRoomSpy = sinon.spy(client, "goToTheBathroom");

    client.orderBeer();

    strictEqual(bathRoomSpy.callCount, 0);

    setTimeout(function() {

        ok(bathRoomSpy.calledOnce);

        start();

    }, 15 * ONE_MINUTE);


});

test("(sinon) Client should go to the toilets 15 minutes after the first beer", function() {

    var clock = this.sandbox.useFakeTimers();

    var server = new Server();
    var client = new Client(server);

    // bug with spy in asyncTest
    var bathRoomSpy = sinon.spy(client, "goToTheBathroom");

    client.orderBeer();

    strictEqual(bathRoomSpy.callCount, 0);

    clock.tick(15 * ONE_MINUTE);

    ok(bathRoomSpy.calledOnce);

});

test("Client should pay the bill when the server give it to him.", function() {

    var server = new Server();
    var client = new Client(server);

    var paySpy = this.spy(client, "payBill");

    var fakeServer = this.sandbox.useFakeServer();
    fakeServer.respondWith([200, {"Content-Type" : "text/json"}, JSON.stringify({ amount : "17€" })]);

    client.requestBill();

    ok(paySpy.notCalled);

    fakeServer.respond();

    ok(paySpy.calledOnce);

});


