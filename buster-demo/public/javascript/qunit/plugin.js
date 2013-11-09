QUnit.extend( QUnit.assert, {
    /**
     * Asserts that given number is strictly greater than given minimum
     */
    greaterThan : function(number, minimum, message) {
        QUnit.push(number > minimum, number, "> " + minimum, message);
    }
});