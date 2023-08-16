// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// Function to handle the "Submit" button click
function handleSubmitClick() {
    const contactPage = document.querySelector('#contact-page');
    contactPage.innerHTML = '<p>Thank you for your message!</p>';
  }
  
  document.getElementById('submit-button').addEventListener('click', handleSubmitClick);
  
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

