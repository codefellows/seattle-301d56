console.log('linked');

// vanilla JS event listener and showing/hiding
// select the button
// button needs an event listener
// click
// there's a function that...
//     either shows or hides the text
// document.getElementsByClassName('toggler')[0].addEventListener('click', function(e) {
//   e.preventDefault();
//   let hidable = document.getElementsByClassName('hidable')[0];
//   hidable.classList.toggle('is-hidden');
// });


// vanilla JS event listener, jQuery for showing/hiding
// select the button
// button needs an event listener
// click
// there's a function that...
//     either shows or hides the text
// document.getElementsByClassName('toggler')[0].addEventListener('click', function(e) {
//   e.preventDefault();
//   $('.hidable').toggle();
// });

// vanilla JS event listener, jQuery for showing/hiding
// select the button
// button needs an event listener
// click
// there's a function that...
//     either shows or hides the text
$('.toggler').on('click', function(e) {
  e.preventDefault();
  $('.hidable').toggle();
});

// grab data and render
$.get('./data.json', data => {
  console.log(data);
  let ul = $('ul');
  ul.empty();
  data.forEach(day => ul.append(`<li>${day.day}: ${day.description}</li>`));
});
