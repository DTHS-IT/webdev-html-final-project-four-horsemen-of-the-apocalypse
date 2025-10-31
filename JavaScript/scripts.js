document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  // Sets variable for the success div
  const successDiv = document.getElementById("success");


  // Waits for the submit button to be pressed
  form.addEventListener("submit", function (event) {
    // Stop the form from refreshing the page (default browser behavior)
    event.preventDefault();

    // uses ID's to get given user input
    const name = document.getElementById("name").value;
    const feedBack = document.getElementById("feedBack").value;

    // Writing inside of the success Div
    successDiv.innerHTML = `
        <h2>Thanks for the feed back ${name}!</h2>
        <p><strong>Feedback:</strong> ${feedBack}</p>
      `;

    // Clear the form fields after submission so it's ready for another entry
    form.reset();
  });
});
