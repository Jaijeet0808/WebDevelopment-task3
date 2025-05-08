// Carousel Functionality
const images = [
    "https://cgu-odisha.ac.in/wp-content/uploads/2023/06/Banner_Inventing-The-Future-With-Learning-scaled.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQGogQL5PLgj92MB4B-jHO-_uJbHzZpJKkg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2eeVFnrb9NIFp5y-uLGKF-qbRbVt-Hs6oA&s"
  ];
  
  let currentImageIndex = 0;
  
  function updateImage() {
    document.getElementById("carousel").src = images[currentImageIndex];
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  }
  
  // Joke API Fetching
  async function getJoke() {
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent = "Loading...";
  
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      jokeElement.textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
      jokeElement.textContent = "Failed to fetch a joke. Please try again.";
    }
  }
  