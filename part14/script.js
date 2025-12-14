var h1 = document.querySelector('h1');
var inc = document.querySelector('#inc');
var dec = document.querySelector('#dec');

var a = 0;

inc.addEventListener('click', function() {
  a++;
  h1.innerHTML = a;

})
dec.addEventListener('click', function() {
  a--;
  h1.innerHTML = a;
})