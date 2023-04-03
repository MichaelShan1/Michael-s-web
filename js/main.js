const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('expanded');
  })
);
const btnScroll = document.querySelector('.scroll-to');
const QRcode = document.querySelector('#scorll-here');
btnScroll.addEventListener('click', function (event) {
  QRcode.scrollIntoView({ behavior: 'smooth' });
});
