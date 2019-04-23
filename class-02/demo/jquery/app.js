console.log('linked');

document.getElementsByClassName('toggler')[0].addEventListener('click', function(e) {
  e.preventDefault();
  let hidable = document.getElementsByClassName('hidable')[0];
  hidable.classList.toggle('is-hidden');
});
