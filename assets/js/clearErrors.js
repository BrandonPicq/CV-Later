function clearAllErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => {
    error.textContent = "";
    error.style.display = "none";
  });
}
