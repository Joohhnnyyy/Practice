var btn = document.querySelector('button');
var progress = document.querySelector('.inner');
var h1 = document.querySelector('h1');
btn.addEventListener('click', function() {


var width = 0;
var int = setInterval(() => {
  width++;
  progress.style.width = width + '%';
  h1.innerText = width + '%';
 
}, 50);
setTimeout(() => {
  clearInterval(int);
  btn.innerHTML = 'Download';
  btn.style.opacity = '0.5';
  btn.style.pointerEvents = 'none';
  
}, 5000);



});