const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('expanded');
  })
);
const btnScroll = document.querySelectorAll('.scroll-to');
const QRcode = document.querySelector('#scorll-here');
for (let i = 0; i < btnScroll.length; i++) {
  btnScroll[i].addEventListener('click', function (event) {
    QRcode.scrollIntoView({ behavior: 'smooth' });
  });
}
