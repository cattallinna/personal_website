document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for your message!');
  this.reset();
});
console.log("hello world")