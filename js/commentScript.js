const fetchComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then(data => {
    for (let i = 0; i < 3; i++) {
      let comment = data[i]
      document.querySelector(`#testimonial-name-${i}`).textContent = comment.name
      document.querySelector(`#testimonial-mail-${i}`).textContent = comment.email
      document.querySelector(`#testimonial-comment-${i}`).textContent = comment.body
    }
  })
}

fetchComments()