function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

var elem = document.querySelector('[data-attr="#rules"]');
document.querySelector('.js-anchor--link').addEventListener('click', function() {
  scrollTo(document.body, elem.offsetTop, 300);
});
