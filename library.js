document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  if (isLoggedIn !== "true") {
    alert("Please login to access the library!");
    window.location.href = "login.html";
  }

  const storyContainer = document.querySelector(".storyBox"); 
  const stories = JSON.parse(localStorage.getItem("stories")) || [];

  // ---- Display all stories ----
  stories.forEach((story, index) => {
    // Convert genre to match your CSS class names
    const genreClass = story.genre
      .toLowerCase()
      .replace(/\s+/g, "-") // e.g. "Sci Fi" → "sci-fi"
      .replace(/[^a-z0-9-]/g, ""); // remove special characters

    const storyDiv = document.createElement("div");
    storyDiv.classList.add("storyBoxes");

    storyDiv.innerHTML = `
      <p class="genre ${genreClass}">${story.genre}</p>
      <div class="title">
        <a href="story.html?index=${index}">${story.title}</a>
      </div>
      <div class="story">
        <p>${story.story.substring(0, 150)}...</p>
      </div>
      <hr>
      <div class="authorLike">
        <p>By ${story.author}</p>
        <button class="like">Like</button>
      </div>
    `;

    storyContainer.appendChild(storyDiv);
  });

  // ---- Update genre counts ----
  const genreLinks = document.querySelectorAll(".links a");
  const genreCounts = {};

  genreLinks.forEach(link => {
    const text = link.childNodes[0].textContent.trim(); 
    genreCounts[text] = 0;
  });

  stories.forEach(story => {
    const genre = story.genre.trim();
    if (genreCounts.hasOwnProperty(genre)) {
      genreCounts[genre]++;
    }
  });

  genreLinks.forEach(link => {
    const text = link.childNodes[0].textContent.trim();
    const countSpan = link.querySelector(".count");
    if (countSpan) {
      countSpan.textContent = `(${genreCounts[text] || 0})`;
    }
  });

  const allLink = Array.from(genreLinks).find(link =>
    link.textContent.trim().startsWith("All")
  );
  if (allLink) {
    const countSpan = allLink.querySelector(".count");
    if (countSpan) {
      countSpan.textContent = `(${stories.length})`;
    }
  }
});
