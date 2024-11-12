const passcodeInput = document.querySelector(".passcode-input");
const buttons = document.querySelectorAll(".buttons button");
const clearButton = document.querySelector(".clear");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    passcodeInput.value += button.textContent;
    if (passcodeInput.value === "0812") {
      window.location.href = "question.html"; // Redirect to questions.html
    }
  });
});

clearButton.addEventListener("click", () => {
  passcodeInput.value = "";
});
