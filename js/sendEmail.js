// Initialize EmailJS //
emailjs.init("TEkYKK7HNV5TjOWGK");

// Add event listener to handle form submission 
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission


// Collect data from form //
const formData = {
    name: document.querySelector("input[name='Name']").value, 
    email: document.querySelector("input[name='Email']").value, 
    message: document.querySelector ("input[name='Message']").value
};
// Send email with EmailJs // 
emailjs.send ("service_6lwoys8","template_p7j137d",formData)
.then(function(response) {
    alert ("Confirmation email sent!");
})
.catch(function(error) {
    console.error ("EmailJS Error:", error); 
    alert ("Failed to send email. Please try again.");

      });
   });
});