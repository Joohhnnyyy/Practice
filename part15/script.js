var like = document.querySelector(".ri-heart-fill");
var card = document.querySelector('#container');
var flag = false;
card.addEventListener('dblclick', function() {

like.style.transform = "translate(-50%,-50%) scale(1)";
setTimeout(function() {
  like.style.transform = "translate(-50%,-50%) scale(0)";
}, 800);

});

like.addEventListener('click', function() {


});