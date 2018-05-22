// ( contrived ) Example function with failing test.
// Edit add function to make test pass!

const test = require( 'tape' );

const add = ( a, b ) => a + b;

test( 'it should add two numbers', t => {
    t.equal( add( 1, 2 ), 3 );
    t.end();
});

test( 'it should work with negative numbers', t => {
    t.equal( add( 1, -2 ), -1 );
    t.end();
});
