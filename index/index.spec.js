'use strict';

const test = require( 'ava' );

const failingFunction = ( a, b ) => a - b;

test( 'it should add two numbers and return the result', t => {
    t.is( failingFunction( 1, 2 ), 3 );
});
