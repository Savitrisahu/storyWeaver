document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (isLoggedIn !== "true") {
        
        alert("Please login to access the library!");
        window.location.href = "login.html";
    }
});

const storyContainer = document.getElementById("storyBox");
const stories = JSON.parse(localStorage.getItem("stories")) || [];
storyContainer.innerHTML = "";

stories.forEach((story, index) => {
  const storyDiv = document.createElement("div");
  storyDiv.className = "story";

  storyDiv.innerHTML = `
    <li class="${story.genreClass}">${story.genre}</li>
    <div class="boxes">
      <a href="story.html?index=${index}">${story.title}</a>
      <p>${story.story.substring(0, 150)}...</p>
      <hr>
      <div class="box">
        <p>By ${story.author}</p>
        <button class="like">like</button>
      </div>
    </div>
  `;

  storyContainer.appendChild(storyDiv);
});

const storie= JSON.parse(localStorage.getItem("stories")) || [];
const totalCountSpan = document.getElementById("totalCount");
totalCountSpan.textContent = stories.length;

const genreLinks = document.querySelectorAll(".links a[data-genre]");

const genreCounts = {};

genreLinks.forEach(link => {
  const genre = link.dataset.genre;
  genreCounts[genre] = 0;
});

stories.forEach(story => {
  if (genreCounts.hasOwnProperty(story.genre)) {
    genreCounts[story.genre]++;
  }
});

genreLinks.forEach(link => {
  const genre = link.dataset.genre;
  const countSpan = link.querySelector(".count");
  if (countSpan) {
    countSpan.textContent = genreCounts[genre];
  }
});




