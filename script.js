var form = document.querySelector('form')
form.addEventListener('submit', function(e) {
  e.preventDefault()
  var input = document.querySelector('input')
  console.log(input.value)
  console.log('Form submitted')
})