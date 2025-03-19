const happyInputElement = document.getElementById("happy-input");
const sadInputElement = document.getElementById("sad-input");
const nutralInputElement = document.getElementById("nutral-input");
const excitedInputElement = document.getElementById("excited-input");
const angryInputElement = document.getElementById("angry-input");
const moodContainerElement = document.getElementById("mood-container");

const moodSubmitBtn = document.getElementById("submitMoodBtn");
const todayMoodElement = document.getElementById("today-mood");

//User can select or checked only one mood for submit
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

//Get Date
function getDate(myDate) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return myDate.toLocaleDateString(undefined, options);
}

// When submit the mood button
moodSubmitBtn.addEventListener("click", () => {
  const now = new Date();

  if (happyInputElement.checked) {
    const h3Element = document.createElement("h3");
    h3Element.textContent = "Your Today Mood";

    const h4Element = document.createElement("h4");
    h4Element.textContent = getDate(now);

    const image = document.createElement("img");
    image.src = "./assets/happy.png";
    image.height = 50;
    image.width = 50;
    image.alt = "happy";

    const pTag = document.createElement("p");
    pTag.textContent =
      "Happiness is not something ready-made. It comes from your own actions";
    todayMoodElement.classList.remove("hide");
    todayMoodElement.appendChild(h3Element);
    todayMoodElement.appendChild(image);
    todayMoodElement.appendChild(pTag);
    todayMoodElement.appendChild(h4Element);
    todayMoodElement.classList.add("todayMood");
  } else if (sadInputElement.checked) {
    const h3Element = document.createElement("h3");
    h3Element.textContent = "Your Today Mood";

    const image = document.createElement("img");
    image.src = "./assets/sad.png";
    image.height = 50;
    image.width = 50;
    image.alt = "sad";

    const pTag = document.createElement("p");
    pTag.textContent = "Sadness flies away on the wings of time";
    todayMoodElement.classList.remove("hide");
    todayMoodElement.appendChild(h3Element);
    todayMoodElement.appendChild(image);
    todayMoodElement.appendChild(pTag);
  } else if (nutralInputElement.checked) {
    const h3Element = document.createElement("h3");
    h3Element.textContent = "Your Today Mood";

    const image = document.createElement("img");
    image.src = "./assets/nutral.png";
    image.height = 50;
    image.width = 50;
    image.alt = "neutral";

    const pTag = document.createElement("p");
    pTag.textContent =
      "Don not let yesterday take up too much of today. Just be";
    todayMoodElement.classList.remove("hide");
    todayMoodElement.appendChild(h3Element);
    todayMoodElement.appendChild(image);
    todayMoodElement.appendChild(pTag);
  } else if (excitedInputElement.checked) {
    const h3Element = document.createElement("h3");
    h3Element.textContent = "Your Today Mood";

    const image = document.createElement("img");
    image.src = "./assets/excited.png";
    image.height = 50;
    image.width = 50;
    image.alt = "excited";

    const pTag = document.createElement("p");
    pTag.textContent =
      "The world belongs to those who are excited to make it better.";
    todayMoodElement.classList.remove("hide");
    todayMoodElement.appendChild(h3Element);
    todayMoodElement.appendChild(image);
    todayMoodElement.appendChild(pTag);
  } else if (angryInputElement.checked) {
    const h3Element = document.createElement("h3");
    h3Element.textContent = "Your Today Mood";

    const image = document.createElement("img");
    image.src = "./assets/angry.png";
    image.height = 50;
    image.width = 50;
    image.alt = "angry";

    const pTag = document.createElement("p");
    pTag.textContent =
      "For every minute you remain angry, you give up sixty seconds of peace of mind";
    todayMoodElement.classList.remove("hide");
    todayMoodElement.appendChild(h3Element);
    todayMoodElement.appendChild(image);
    todayMoodElement.appendChild(pTag);
  }
  moodSubmitBtn.classList.remove("button-33");
  moodSubmitBtn.classList.add("hide");
  moodContainerElement.classList.remove("mood-select");
  moodContainerElement.classList.add("hide");
});
