console.log('linked');

$('.toggler').on('click', function(e) {
  e.preventDefault();
  $('.hidable').toggle();
});

// liRenderer is a function that takes in an object and gives back a string
const liRenderer = Handlebars.compile($('#li-template').text());

// grab data and render
$.get('./data.json', data => {
  console.log(data);
  let ul = $('ul');
  ul.empty();
  //data.forEach(day => ul.append(`<li>${day.day}: ${day.description}</li>`));
  data.forEach(day => ul.append(liRenderer(day)));
});
