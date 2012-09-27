var rules = require('../lib/rules.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['rules'] = {
    setUp: function(done) {
        // setup here
        done();
    },
    'isJavascript': function(test) {
        test.expect(2);

        // Basic assertion.
        var files = [
            '/some/path',
            '/some/other/path.js',
            '/some/last/path.json'
            ],
        expected = [
            '/some/other/path.js'
        ];

        test.equal( rules.isJavascript( files ).join(), expected.join(),
            'Only js files left' );

        // Fail test.
        var notExpected = [
            '/some/other/path.js',
            '/some/last/path.json'
        ];
        test.notEqual( rules.isJavascript( files ).join(), notExpected.join(),
            ".json shouldn't be left" );

        // Assertions finished.
        test.done();
    }
};
