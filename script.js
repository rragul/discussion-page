// Get form and comments elements
const form = document.getElementById('comment-form');
const commentsDiv = document.getElementById('comments');

// Load comments from local storage
const comments = JSON.parse(localStorage.getItem('comments')) || [];

// Render comments
function renderComments() {
    const hours = parseInt(new Date(Date.now()).getHours());
    const minutes = parseInt(new Date(Date.now()).getMinutes());


    console.log(hours, minutes);
    commentsDiv.innerHTML = '';
    for (const comment of comments) {
      console.log(comments.hours);
    commentsDiv.innerHTML += `
      <div id="comment-${comment.id}" class="comment-body">
      <ion-icon name="person-circle-outline"></ion-icon>
        <p>${comment.text}</p>
        <span>${hours - comment.hours} : ${minutes - comment.minutes}</span>
        <button data-id="${comment.id}" class="upvote-button">Upvote</button>
        <span class="upvote-count">${comment.upvotes}</span>
      </div>
    `;
  }
}
renderComments();

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent page reload

  // Get the comment from the form
  const comment = document.getElementById('comment').value;

  const hours = parseInt(new Date(Date.now()).getHours());
  const minutes = parseInt(new Date(Date.now()).getMinutes());
  const date = new Date(Date.now()).getDate() +
    "/" +
    new Date(Date.now()).getMonth() +
    "/" +
    new Date(Date.now()).getFullYear();


  // Add the comment to the array and re-render
  if(comment === '') return alert('Please enter a comment');
  comments.push({
    id: Date.now(),
    text: comment,
    upvotes: 0,
    hours: hours,
    minutes: minutes,
    date: date
  });
  localStorage.setItem('comments', JSON.stringify(comments));
  renderComments();
  document.getElementById('comment').value = '';
});

// Handle upvote clicks
commentsDiv.addEventListener('click', (event) => {
  if (event.target.classList.contains('upvote-button')) {
    // Get the comment ID
    const commentId = event.target.getAttribute('data-id');

    // Find the comment in the array and update the upvote count
    const comment = comments.find((c) => c.id === commentId);
    comment.upvotes++;

    // Save the updated comments array to local storage and re-render
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComments();
  }
});