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
    const computerThrow = 'rock';
    const expected = 'draws';
    const outcome = checkResult(userThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(outcome, expected);
    
});

test('time to test a function', function(assert) {

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    
    const userThrow = 'rock';
    const computerThrow = 'paper';
    const expected = 'loses';
    const outcome = checkResult(userThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(outcome, expected);
    
});

test('time to test a function', function(assert) {

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    
    const userThrow = 'rock';
    const computerThrow = 'scissors';
    const expected = 'wins';
    const outcome = checkResult(userThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(outcome, expected);
    
});

test('time to test a function', function(assert) {

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    
    const userThrow = 'paper';
    const computerThrow = 'rock';
    const expected = 'wins';
    const outcome = checkResult(userThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(outcome, expected);
    
});

test('time to test a function', function(assert) {

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    
    const userThrow = 'paper';
    const computerThrow = 'paper';
    const expected = 'draws';
    const outcome = checkResult(userThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(outcome, expected);
    
});

test('time to test a function', function(assert) {

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    
    const userThrow = 'paper';
    const computerThrow = 'scissors';
    const expected = 'loses';
    const outcome = checkResult(userThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(outcome, expected);
    
});

test('time to test a function', function(assert) {

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    
    const userThrow = 'scissors';
    const computerThrow = 'rock';
    const expected = 'loses';
    const outcome = checkResult(userThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(outcome, expected);
    
});

test('time to test a function', function(assert) {

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    
    const userThrow = 'scissors';
    const computerThrow = 'paper';
    const expected = 'wins';
    const outcome = checkResult(userThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(outcome, expected);
    
});

test('time to test a function', function(assert) {

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    
    const userThrow = 'scissors';
    const computerThrow = 'scissors';
    const expected = 'draws';
    const outcome = checkResult(userThrow, computerThrow);
    
    //Assert
    // Make assertions about what is expected valid result

    assert.equal(outcome, expected);
    
});