# Lab 00b: ES6 Arrow Functions

This assignment is designed to introduce you to some features in [ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/), otherwise known as ES6. From this point on, you are expected to use these features.

## Overview: Arrow Functions

- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [caniuse.com](https://caniuse.com/#search=arrow%20functions)

By now you should be comfortable writing [function expressions](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function) and [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function). Arrow functions are a shorter, more concise way to write a JavaScript function. The syntax might seem strange at first, so try to use arrow functions wherever you can and they will become second nature in no time.

There are a few caveats with arrow functions, though. Most importantly, arrow functions affect function scope. Typically, the scope of a function is within its opening and closing curly braces, called a code block. However, when an arrow function is used, the scope of the function bubbles up to the next-nearest scope. This can be an enclosing function, or if it is a deeply-nested function, the closest function that does not use an arrow function. If arrow functions are used exclusively in a file, the scope of the function will become the global window object.

Why does this happen? Arrow functions do not bind "this", so the context of "this" bubbles up to the global window object, which is the next-nearest enclosing scope. Therefore, you will want to avoid using an arrow function in a constructor or any method that needs to use "this" to behave properly.

## Assignment Tasks

1. The `app.js` file contains examples of function expressions, as you are accustomed to seeing. Work through steps 1-9, reading the notes and reviewing the refactored samples.
1. For each of these steps, uncomment the console.log line. Open the `index.html` file in the browser and verify the correct output in the developer console.
1. To complete step 10, refactor the function expressions one at a time. Uncomment the console.log line and use it to check that the output is the same after you have completed the refactoring process. If the output is not the same (including if a comment tells you that the code will break), it is okay to leave the code in its original, working state; your goal is to convert as many functions as possible to arrow functions.
1. To complete step 11, uncomment the two console.log lines and observe the output in the developer console in the browser. Answer the corresponding questions.

## Additional resources

- ["JavaScript Arrow Functions" by Wes Bos](https://wesbos.com/arrow-functions/)

## Submission Instructions

1. When finished, push your branch back to your fork on GitHub, and merge it into master.
1. Submit a link to your PR. You can link to a pull request even if the pull request is already merged or closed.
1. Add a comment in your Canvas assignment which includes the following:
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
