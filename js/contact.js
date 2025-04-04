const submitButton = document.getElementById("submit-button");
const responseMessage = document.getElementById("response-message");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const responseMessage = document.getElementById("response-message");
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
    _subject: "New submission!",
    _template: "table",
  };
  responseMessage.innerHTML = "Sending Pls Wait...";
  fetch("https://formsubmit.co/ajax/kaifansari05xx@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      responseMessage.innerHTML = "Your message has been sent successfully!";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      setTimeout(() => {
        responseMessage.innerHTML = "";
      }, 3000);
    })
    .catch((error) => {
      console.error("Error:", error);
      responseMessage.innerHTML =
        "There was an error sending your message. Please try again later.";
      setTimeout(() => {
        responseMessage.innerHTML = "";
      }, 3000);
    });
});
