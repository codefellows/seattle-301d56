# Variable declarations with `let` and `const`

## Overview

- **`let`**
	- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
	- [caniuse.com](http://caniuse.com/#feat=let)
- **`const`**
	- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
	- [caniuse.com](http://caniuse.com/#feat=const)

You are familiar with the process of declaring a variable using `var`, and how that variable receives global or local scope depending on the context in which it was declared. If the variable is declared outside of any functions, it has global scope, but if it is declared inside a function, the variable is scoped to that function and not accessible globally.

With `let`, a variable declaration can be scoped to a code block `{ code }`, such as we commonly see with `for`,  `if`, or `while` constructions. As with variables declared with `var`, the values assigned to them can be reassigned to any type of value at any time, so long as the reassignment occurs within the same scope in which the variable was declared.

`const` is a little more complicated:

- Like `let`, `const` is also block-scoped.
- Variables initialized with `const` must be assigned a value at the time they are declared.
- Unlike variables declared with `var`, variables declared with `const` do not become properties of the `window` object.
- When `const` is used to assign to a variable one of the five primitive values in JavaScript (number, string, Boolean, null, undefined), the variable cannot be reassigned and attempting to do so will throw an error: "Uncaught TypeError: Assignment to constant variable."
- However, when a `const` variable is used to hold an object (and by extension arrays and functions, which are both objects in JavaScript), new properties can be assigned to the object and their values reassigned at will.

## Assignment Tasks

Follow these instructions carefully and in order.

1. Open the `index.html` file in the browser to ensure that it works.
1. In the `app.js` file, turn all `var` variable declarations into `let`.
1. After you do, there will be one error. Find that line in the code, delete that line and respond to the adjacent TODO task.
1. Return to the browser and ensure that the code works again.
1. Now, in the code, convert all `let` variable declarations into `const`.
1. Several bugs will occur. Debug one at a time by using the error messages in the browser console as guidance, turning `const` declarations back into `let` where necessary. Expect there to be some back-and-forth between your code editor and your browser.
1. When you think you have things working, clear local storage and reload the page to ensure that the code still works when starting from a totally clean state.
1. As a refresher on template literal notation, find all concatenations in the code and convert them into template literal notation.
1. Reload the browser to ensure that the code works as expected.
1. When finished, push your branch back to your fork on GitHub, and merge it into master. Submit the link to this pull request in the corresponding Canvas assignment. You can submit a link to a pull request even if the pull request is closed.

## Additional resources for let and const

- [Video from Fun Fun Function titled: “var, let and const - What, why and how](https://www.youtube.com/watch?v=sjyJBL5fkp8)
- ["JavaScript ES6+: var, let, or const?" by Eric Elliott](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)
- ["ES6 let vs. const variables" by Wes Bos](http://wesbos.com/let-vs-const/)
