const contactForm = document.querySelector('form')
const contactName = document.querySelector('#contact-name')
const contactEmail = document.querySelector('#contact-email')
const contactPhone = document.querySelector('#contact-phone')
const contactSubject = document.querySelector('#contact-subject')

const sendEmail = () => {
  const bodyMessage = `
    Name: ${contactName.value}<br>
    Email: ${contactEmail.value}<br>
    Phone: ${contactPhone.value}<br>
    Message: ${contactSubject.value}
  `

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "uv374304816@hotmail.com",
    Password : "62757E019C719A7D02290F2E75B30913465D",
    To : "uv374304816@hotmail.com",
    From : "uv374304816@hotmail.com",
    Subject : contactSubject.value,
    Body : bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        alert(`Message sent successfully from ${contactName.value} (${contactEmail.value}.)`)
      }
    }
  );
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  sendEmail()
})