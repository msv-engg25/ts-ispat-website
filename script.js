// Add JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve form data
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display confirmation or handle submission
  alert(`Thank you, ${name}! Your query has been submitted successfully.\nWe will contact you at ${mobile} or ${email}.`);
  
  // You can send the form data to your backend server here (via an API)
});
