# Arrow Functions

## Overview

- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [caniuse.com](https://caniuse.com/#search=arrow%20functions)

By now you should be comfortable writing [function expressions](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function) and [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function). Arrow functions are a shorter, more concise way to write a JavaScript function. The syntax might seem strange at first, so try to use arrow functions wherever you can and they will become second nature in no time.

There are a few caveats with arrow functions, though. Most importantly, arrow functions affect function scope. Typically, the scope of a function is within its opening and closing curly braces, called a code block. However, when an arrow function is used, the scope of the function bubbles up to the next-nearest scope. This can be an enclosing function, or if it is a deeply-nested function, the closest function that does not use an arrow function. If arrow functions are used exclusively in a file, the scope of the function will become the global window object.

Why does this happen? Arrow functions do not bind "this", so the context of "this" bubbles up to the global window object, which is the next-nearest enclosing scope. Therefore, you will want to avoid using an arrow function in a constructor or any method that needs to use "this" to behave properly.

## Assignment Tasks

1. The `app.js` file contains examples of function expressions, as you are accustomed to seeing. Work through steps 1-9, reading the notes and reviewing the refactored samples. 
1. For each of these steps, uncomment the console.log line. Open the `index.html` file in the browser and verify the correct output in the developer console.
1. To complete step 10, refactor the function expressions one at a time. Uncomment the console.log line and use it to check that the output is the same after you have completed the refactoring process.
1. To complete step 11, uncomment the two console.log lines and observe the output in the developer console in the browser. Answer the corresponding questions.
1. When finished, push your branch back to your fork on GitHub, and merge it into master. Submit the link to this pull request in the corresponding Canvas assignment. You can submit a link to a pull request even if the pull request is closed.

## Additional resources for arrow functions

- ["JavaScript Arrow Functions" by Wes Bos](https://wesbos.com/arrow-functions/)
