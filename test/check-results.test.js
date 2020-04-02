// IMPORT MODULES under test here:
// import example from '../src/example.js';

import default checkResult;

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const wins = checkResult('rock', 'scisors');
    const loses = checkResult('rock', 'rock');
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(wins, true);
    assert.equal(loses, false);
});