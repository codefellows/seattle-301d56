console.log('linked');

let getTwo = () => 2;

let add = (a, b) => a + b;

let logThing = thing => console.log(thing);

let logResult = thing => console.log(thing());

// an array
// a function
//     the thing to do on each element
let michelleForEach = (arr, behavior) => {
  for(let i = 0; i < arr.length; i++) {
    behavior(arr[i], i, arr);
  }
};


