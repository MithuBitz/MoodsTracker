const happyInputElement = document.getElementById("happy-input");
const sadInputElement = document.getElementById("sad-input");
const nutralInputElement = document.getElementById("nutral-input");
const excitedInputElement = document.getElementById("excited-input");
const angryInputElement = document.getElementById("angry-input");

//When happy is checked
happyInputElement.addEventListener("click", () => {
  if (happyInputElement.checked) {
    sadInputElement.checked = false;
    nutralInputElement.checked = false;
    excitedInputElement.checked = false;
    angryInputElement.checked = false;
  }
});
//When sad is checked
sadInputElement.addEventListener("click", () => {
  if (sadInputElement.checked) {
    happyInputElement.checked = false;
    nutralInputElement.checked = false;
    excitedInputElement.checked = false;
    angryInputElement.checked = false;
  }
});
//When nutral is checked
nutralInputElement.addEventListener("click", () => {
  if (nutralInputElement.checked) {
    sadInputElement.checked = false;
    happyInputElement.checked = false;
    excitedInputElement.checked = false;
    angryInputElement.checked = false;
  }
});
//When angry is checked
angryInputElement.addEventListener("click", () => {
  if (angryInputElement.checked) {
    sadInputElement.checked = false;
    happyInputElement.checked = false;
    nutralInputElement.checked = false;
    excitedInputElement.checked = false;
  }
});
//When excited is checked
excitedInputElement.addEventListener("click", () => {
  if (excitedInputElement.checked) {
    sadInputElement.checked = false;
    happyInputElement.checked = false;
    nutralInputElement.checked = false;
    angryInputElement.checked = false;
  }
});
