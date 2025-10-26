const form = document.getElementById("storyForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const genre = document.getElementById("genre").value.trim();
  const story = document.getElementById("story").value.trim();

  if (!title || !author || !genre || !story) {
    alert("Please fill all fields!");
    return;
  }
  const genreClass = genre.toLowerCase().replace(/\s/g, '').replace(/[^a-z-]/g,'');
  const newStory = { title, author, genre, genreClass, story };
  const existingStories = JSON.parse(localStorage.getItem("stories")) || [];
  existingStories.push(newStory);
  localStorage.setItem("stories", JSON.stringify(existingStories));
  form.reset()
  alert("Story submitted successfully!");
  const storyIndex = existingStories.length - 1;
  window.location.href = `story.html?index=${storyIndex}`;
});
