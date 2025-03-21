const happyInputElement = document.getElementById("happy-input");
const sadInputElement = document.getElementById("sad-input");
const nutralInputElement = document.getElementById("nutral-input");
const excitedInputElement = document.getElementById("excited-input");
const angryInputElement = document.getElementById("angry-input");
const moodContainerElement = document.getElementById("mood-container");

const moodSubmitBtn = document.getElementById("submitMoodBtn");
const todayMoodElement = document.getElementById("today-mood");

const allMoodsGrid = document.getElementById("all-modes");

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

// Add div into moods grid
function addItemToGrid(moodText, imgPath, myDate, time) {
  console.log("Add item to grid clicked");

  const divElement = document.createElement("div");

  const image = document.createElement("img");
  image.src = imgPath;
  image.height = 50;
  image.width = 50;
  image.alt = moodText;

  const h3Tag = document.createElement("h3");
  h3Tag.textContent = moodText;
  h3Tag.style.textTransform = "capitalize";

  const pTag = document.createElement("p");
  pTag.textContent = myDate;
  const timeElement = document.createElement("p");
  timeElement.textContent = `${time.hour}:${time.minutes}:${time.seconds} ${time.amNpm}`;

  divElement.appendChild(image);
  divElement.appendChild(h3Tag);
  divElement.appendChild(pTag);
  divElement.appendChild(timeElement);
  divElement.classList.add("grid-items");
  // console.log(divElement);
  // document.getElementById("all-modes").appendChild(divElement);

  return divElement;
}

function addTodayMoodDiv(myDate, imgSrc, mood, time) {
  console.log(time);

  let quotes = "";
  if (mood === "happy") {
    quotes =
      "Happiness is not something ready-made. It comes from your own actions";
  } else if (mood === "sad") {
    quotes = "Sadness flies away on the wings of time";
  } else if (mood === "neutral") {
    quotes = "Don not let yesterday take up too much of today. Just be";
  } else if (mood === "excited") {
    quotes = "The world belongs to those who are excited to make it better.";
  } else if (mood === "angry") {
    quotes =
      "For every minute you remain angry, you give up sixty seconds of peace of mind";
  }

  const h3Element = document.createElement("h3");
  h3Element.textContent = "Your Today Mood";

  const pElement = document.createElement("p");
  pElement.textContent = myDate;
  pElement.classList.add("timeDateStyle");
  const timeElement = document.createElement("p");
  timeElement.textContent = `${time.hour}:${time.minutes}:${time.seconds} ${time.amNpm}`;
  timeElement.classList.add("timeDateStyle");

  const image = document.createElement("img");
  image.src = imgSrc;
  image.height = 50;
  image.width = 50;
  image.alt = mood;

  const pTag = document.createElement("p");
  pTag.textContent = quotes;
  todayMoodElement.classList.remove("hide");
  todayMoodElement.appendChild(h3Element);
  todayMoodElement.appendChild(pElement);
  todayMoodElement.appendChild(timeElement);
  todayMoodElement.appendChild(image);
  todayMoodElement.appendChild(pTag);
  todayMoodElement.classList.add("today-mood-class");

  document.getElementById("mood-select-text").classList.add("hide");
  moodSubmitBtn.classList.remove("button-33");
  moodSubmitBtn.classList.add("hide");
  moodContainerElement.classList.remove("mood-select");
  moodContainerElement.classList.add("hide");
}

// Save mood to local storage
function saveMoodToLocalStorage(moodItem) {
  //Get the current mood items
  const currentMoods = getMoodItemsFromLocalStorage();
  //Add the new mood item
  currentMoods.push(moodItem);
  localStorage.setItem("moodItems", JSON.stringify(currentMoods));
}

//Get mood items for grid from local storage
function getMoodItemsFromLocalStorage() {
  const storedMoodItems = localStorage.getItem("moodItems");
  return storedMoodItems ? JSON.parse(storedMoodItems) : [];
}

function createMoodGridItem(moodItem) {
  const { mood, imgSrc, date, time } = moodItem;
  const elementData = addItemToGrid(mood, imgSrc, date, time);
  allMoodsGrid.classList.remove("hide");
  allMoodsGrid.classList.add("moods-grid");
  document.getElementById("all-modes").appendChild(elementData);
}

// Display mood items from local storage
function displayMoodItems() {
  // const gridContainer = document.getElementById("all-modes");
  // gridContainer.innerHTML = "";

  // const moodItems = getMoodItemsFromLocalStorage();

  // if (moodItems.length === 0) {
  //   allMoodsGrid.classList.remove("moods-grid");
  //   allMoodsGrid.classList.add("hide");
  //   return;
  // }
  // moodItems.forEach((mood) => {
  //   allMoodsGrid.classList.remove("hide");
  //   allMoodsGrid.classList.add("moods-grid");
  //   createMoodGridItem(mood);
  // });
  const gridContainer = document.getElementById("all-modes");
  gridContainer.innerHTML = "";

  const moodItems = getMoodItemsFromLocalStorage();

  if (moodItems.length === 0) {
    allMoodsGrid.classList.remove("moods-grid");
    allMoodsGrid.classList.add("hide");
    return;
  }

  // Sort mood items by time, most recent first
  const sortedMoodItems = moodItems.sort((a, b) => {
    const dateA = new Date(
      `${a.date} ${a.time.hour}:${a.time.minutes}:${a.time.seconds} ${a.time.amNpm}`
    );
    const dateB = new Date(
      `${b.date} ${b.time.hour}:${b.time.minutes}:${b.time.seconds} ${b.time.amNpm}`
    );
    return dateB - dateA; // Sort by descending order
  });

  // Render sorted items
  sortedMoodItems.forEach((mood) => {
    allMoodsGrid.classList.remove("hide");
    allMoodsGrid.classList.add("moods-grid");
    createMoodGridItem(mood);
  });
}

// get the time with am and pm
function getTimeWithAmPm(now) {
  let hour = now.getHours() % 12 || 12;

  let minutes = now.getMinutes().toString().padStart(2, "0");
  //   console.log(minutes);

  let seconds = now.getSeconds().toString().padStart(2, "0");
  //   console.log(seconds);

  let amNpm = now.getHours() > 12 ? "PM" : "AM";

  return { hour, minutes, seconds, amNpm };
}

// When submit the mood button
moodSubmitBtn.addEventListener("click", () => {
  const now = new Date();
  const date = getDate(now);
  const time = getTimeWithAmPm(now);
  console.log(time);

  let imgSrc = "";
  let mood = "";

  if (happyInputElement.checked) {
    imgSrc = "./assets/happy.png";
    mood = "happy";
    addTodayMoodDiv(date, imgSrc, mood, time);
    // const elementData = addItemToGrid(mood, imgSrc, date);
    const moodItem = { mood, imgSrc, date, time };
    createMoodGridItem(moodItem);
    saveMoodToLocalStorage(moodItem);
  } else if (sadInputElement.checked) {
    imgSrc = "./assets/sad.png";
    mood = "sad";
    addTodayMoodDiv(date, imgSrc, mood, time);
    const moodItem = { mood, imgSrc, date, time };
    createMoodGridItem(moodItem);
    saveMoodToLocalStorage(moodItem);
  } else if (nutralInputElement.checked) {
    imgSrc = "./assets/nutral.png";
    mood = "neutral";
    addTodayMoodDiv(date, imgSrc, mood, time);
    const moodItem = { mood, imgSrc, date, time };
    createMoodGridItem(moodItem);
    saveMoodToLocalStorage(moodItem);
  } else if (excitedInputElement.checked) {
    imgSrc = "./assets/excited.png";
    mood = "excited";
    addTodayMoodDiv(date, imgSrc, mood, time);
    const moodItem = { mood, imgSrc, date, time };
    createMoodGridItem(moodItem);
    saveMoodToLocalStorage(moodItem);
  } else if (angryInputElement.checked) {
    imgSrc = "./assets/angry.png";
    mood = "angry";
    addTodayMoodDiv(date, imgSrc, mood, time);
    const moodItem = { mood, imgSrc, date, time };
    createMoodGridItem(moodItem);
    saveMoodToLocalStorage(moodItem);
  }

  displayMoodItems();
  document.getElementById("reSubmitMoodBtn").classList.add("button-33");
});

document
  .getElementById("reSubmitMoodBtn")
  .addEventListener("click", () => window.location.reload());

displayMoodItems();
