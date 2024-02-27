// Selecting elements from the DOM
const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn"); // Button to generate meme
const memeImage = document.querySelector(".meme-generator img"); // Image element to display meme
const memeTitle = document.querySelector(".meme-generator .meme-title"); // Element to display meme title
const memeAuthor = document.querySelector(".meme-generator .meme-author"); // Element to display meme author

// Function to update meme details (image, title, author)
const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url); // Set image source
  memeTitle.innerHTML = title; // Set meme title
  memeAuthor.innerHTML = author; // Set meme author
};

// Function to generate meme
function generateMeme() {
  // Fetch meme data from API
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json()) // Parse response as JSON
    .then(data => {
      // Call updateDetails function with meme data
      updateDetails(data.url, data.title, data.author);
    })
    .catch(error => {
      // Log error if fetching fails
      console.error("Error fetching meme:", error);
    });
}

// Add event listener to generateMemeBtn to generate meme on click
generateMemeBtn.addEventListener("click", generateMeme);
