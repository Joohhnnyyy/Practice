const cursor = document.querySelector('.cursor');
var main = document.querySelector('#main');

var flag = false;

var h = document.querySelector('h1');
h.addEventListener('mouseover', function () {

  if(flag === false){

    cursor.style.scale = 3;
    flag = true;
  }
  setTimeout(function(){
    cursor.style.scale = 1;
    flag = false;
  }, true);
  
});

main.addEventListener('mousemove', function (dets) {
  cursor.style.left = dets.x + 'px';
  cursor.style.top = dets.y + 'px';
});