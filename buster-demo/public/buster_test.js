
var assert = buster.assert;

buster.testCase("projet.refactor", {

    "my refactoring test": function () {
        assert(true);
    },

    "my second refactoring test": function () {
        assert(true);
    },

    "// this test will not work until refactor is done": function () {
        assert(false);
    }

});
