document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const genre = urlParams.get("genre");

  const stories = JSON.parse(localStorage.getItem("stories")) || [];
  const storyContainer = document.querySelector(".storyBox");
  const title = document.getElementById("genreTitle");
  const info = document.getElementById("genreInfo");

  // Filter stories by selected genre
  const filteredStories = stories.filter(
    (story) => story.genre.toLowerCase() === genre.toLowerCase()
  );

  // Update headings
  title.textContent = `${genre} Stories`;
  info.textContent =
    filteredStories.length > 0
      ? `Showing ${filteredStories.length} ${genre} stor${
          filteredStories.length === 1 ? "y" : "ies"
        }.`
      : `No stories found in ${genre}.`;

  // Render stories
  if (filteredStories.length === 0) {
    storyContainer.innerHTML = `<p class="noStories">No stories found in this genre.</p>`;
    return;
  }

  filteredStories.forEach((story, index) => {
    const genreClass = story.genre
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

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

  // Go back button
  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "library.html";
  });
});
