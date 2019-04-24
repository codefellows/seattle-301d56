console.log('linked');

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
