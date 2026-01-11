const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

next.addEventListener('click', () => {
  index++;
  if (index > slider.children.length - 1) index = 0;
  slider.style.transform = `translateX(-${index * 320}px)`;
});

prev.addEventListener('click', () => {
  index--;
  if (index < 0) index = slider.children.length - 1;
  slider.style.transform = `translateX(-${index * 320}px)`;
});
