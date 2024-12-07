// Define play buttons and their corresponding links
const playButtons = document.querySelectorAll('.play-button');

const playLinks = {
  "play-1": "https://www.crunchyroll.com/watch/GR3VWXP96/im-luffy-the-man-whos-gonna-be-king-of-the-pirates",
  "play-2": "https://www.crunchyroll.com/watch/GR4VWYP97/some-other-episode",
  "play-3": "https://www.crunchyroll.com/watch/GR5VWZP98/another-episode"
};

// Add event listener to each play button
playButtons.forEach((playButton) => {
  playButton.addEventListener('mouseup', (event) => {
    event.stopPropagation();

    const playId = playButton.id; // Get the ID of the clicked button
    const link = playLinks[playId]; // Fetch the corresponding link

    if (link) {
      // Optional: Add animation before opening the link
      for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize position and delay
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 0.5;

        star.style.left = `${randomLeft}%`;
        star.style.animationDelay = `${randomDelay}s`;

        // Append to the parent container (adjust this as needed)
        playButton.closest('.poster-back').appendChild(star);

        // Remove the star after animation
        star.addEventListener('animationend', () => {
          star.remove();
        });
      }

      // Open the link after animation
      setTimeout(() => {
        window.open(link, '_blank');
      }, 2000); // Match animation duration
    }
  });
});
  