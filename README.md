# CUP GAME
_should work like this:_

## HOW TO PLAY

* A player should guess under which 'cup' there exists a 'ball'.

* A player must click a button which corresponds with the cup in which they believe the ball is currently under.

* When a button is clicked, the correct answer to which cup the ball is under is revealed.

  * If the player guesses correctly, the text content of the element representing correct clicks is incremented.
  * If the player guesses incorrectly, the text content of the element representing incorrect clicks is incremented.
  * Upon each click, the text content of the element representing total clicks is incremented.
  * The location of the ball is again concealed, and the player may continue to guess under which cup the ball exists.

## HTML SETUP

1. Three HTML elements should exist, each to represent one cup.

1. Three button elements should exist, one for each cup.

1. One HTML element, representing the ball.

1. Three text elements should exist:
    * to represent correct clicks
    * to represent incorrect clicks
    * to represent total clicks

**each HTML element should be represented with an ID.**

## JS SETUP

1. Grab DOM elements by ID for each HTML element listed in *HTML SETUP*.

1. Attach eventListener for 'click' to the each button element.
    * when the button is clicked:
        * a random number is generated to represent the cup under which the ball is located.
        * the .style of the element under which the ball is currently located should be mutated in order to reveal the element representing the ball.
        * a variable should exist for each the correct, incorrect, and total clicks:
            * correct clicks value should be incremented if the button is clicked for the cup under which the ball is currently located.
            * incorrect clicks value should be incremented if a button is clicked for a cup under which the ball is not currently located.
            * total clicks value should be incremented for each click.
        * the textContent of each the correct, incorrect, and total clicks elements should be mutated to equal the value of their corresponding variable.