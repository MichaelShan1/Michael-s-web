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

//lazy loading image
const imgLazy = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, obeserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  obeserver.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.5,
});
imgLazy.forEach((img) => imgObserver.observe(img));
