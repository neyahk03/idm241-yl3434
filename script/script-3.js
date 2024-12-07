
const flipCards = document.querySelectorAll('.poster');

const modelBox = document.querySelector('.model-box');
const closeButton = document.getElementById('close');

const outlineBookmark = "bookmark-2.svg";
const filledBookmark = "bookmark-fill-icon.png";

flipCards.forEach((card, index) => {
  const playButton = card.querySelector(`#play-${index + 1}`);
  const bookmarkButton = card.querySelector(`#bookmark-${index + 1}`);
  const addButton = card.querySelector(`#plus-${index + 1}`);
  
  // Flip card when clicked, except when specific buttons are clicked
  card.addEventListener('click', (event) => {
    if (!event.target.closest('.button-icon')) {
      card.classList.toggle('flipped');
    }
  });

// Play button
const playButtons = document.querySelectorAll('.play');

const playLinks = {
  "play-1": "https://www.crunchyroll.com/watch/GR3VWXP96/im-luffy-the-man-whos-gonna-be-king-of-the-pirates",
  "play-2": "https://www.crunchyroll.com/watch/G69XGG44R/ryomen-sukuna",
  "play-3": "hhttps://www.crunchyroll.com/watch/GRG5JD92R/cruelty"
};

// Add event listener to each play button
playButtons.forEach((playButton) => {
  playButton.addEventListener('click', (event) => {
    event.stopPropagation();

    const playId = playButton.id;
    const link = playLinks[playId];

    if (link) {
      for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize position and delay
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 0.5;

        star.style.left = `${randomLeft}%`;
        star.style.animationDelay = `${randomDelay}s`;
        star.style.top = '-1.1rem';

        // Append to the parent container
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


  // Bookmark button toggle
  bookmarkButton.addEventListener('click', (event) => {
    event.stopPropagation();

    const currentSrc = bookmarkButton.src.split('/').pop();
    bookmarkButton.src = "../../images/" + (currentSrc === outlineBookmark ? filledBookmark : outlineBookmark);
  });

  // Add button to open modal box
  addButton.addEventListener('click', (event) => {
    event.stopPropagation();
    modelBox.classList.add('visible');
  });
});

// Close modal box
closeButton.addEventListener('click', () => {
  modelBox.classList.remove('visible');
});
