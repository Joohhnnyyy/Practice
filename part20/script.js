let img = document.querySelector('img');
let love = document.getElementById('love');

img.addEventListener('dblclick', () => {
  console.log('Image double clicked');
  love.style.opacity = 1;
  love.style.transform = 'translate(50%,-50%) scale(1) rotate(-60deg)';

  setTimeout(() => {
    love.style.opacity = 0;
    love.style.transform = 'translate(50%,-300%) scale(1) rotate(60deg)';
    love.style.transition = 'all 0.5s ease';
  }, 800);
  setTimeout(() => {
    love.style.transform = 'translate(50%,-50%) scale(0) rotate(-60deg)';
    love.style.opacity = 0;
  }, 1100);


});
