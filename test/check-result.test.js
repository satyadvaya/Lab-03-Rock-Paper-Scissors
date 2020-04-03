// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { checkResult } from '../check-result.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    
    const userThrow = 'rock';
    const computerThrow = 'scissors';
    const expected = 'wins';
    const throwOutcome = checkResult(userThrow, computerThrow);

    // const wins = checkResult('rock', 'scisors');
    // const draws = checkResult('rock', 'rock');
    // const loses = checkResult('rock', 'scissors');

    //Assert
    // Make assertions about what is expected valid result
    
    assert.equal(throwOutcome, expected);
    
    // assert.equal(wins, true);
    // assert.equal(draws, true);
    // assert.equal(loses, true);
});