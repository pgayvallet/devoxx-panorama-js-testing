module("Hello.World");

test("universe should agree", function() {
    ok(42==42, "probably true");
});

module("JS.Troll");

test("equality should be trolling material", function() {
    equal('\n\r\t' , 0, "a whitespace string is equal to zero");
});

test("transitivity should be trolling material", function() {
    equal(0, "", "zero is equal to empty string");
    equal(0, "0", "zero is equal to the strong '0'");
    notEqual("", "0", "the empty string is not equal to the '0' string");
});