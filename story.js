
const params = new URLSearchParams(window.location.search);
const storyIndex = params.get("index");

if (storyIndex !== null) {
    const stories = JSON.parse(localStorage.getItem("stories")) || [];
    const story = stories[storyIndex];

    if (story) {
        document.getElementById("storyTitle").textContent = story.title;
        document.getElementById("storyAuthor").textContent = `By ${story.author}`;
        const storyGenreEl = document.getElementById("storyGenre");
        storyGenreEl.textContent = story.genre;
        storyGenreEl.className = story.genre.toLowerCase().replace(/\s/g, '');
        document.getElementById("storyContent").textContent = story.story;
    }
}
