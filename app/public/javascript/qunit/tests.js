

module("Devoxx");

test("testing that 5 should be greater 3", function(assert) {
    var five = 5;
    var three = 3;
    assert.greaterThan(five, three, "5 should be greater than 3");
});