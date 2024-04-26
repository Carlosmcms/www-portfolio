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
    Username : SMTP_MAIL,
    Password : SMTP_PASSWORD,
    To : SMTP_MAIL,
    From : SMTP_MAIL,
    Subject : contactSubject.value,
    Body : bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        alert("Message sent successfully.")
      }
    }
  );
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  sendEmail()
})