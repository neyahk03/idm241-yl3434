const flipCard = document.getElementById('flip-card-1');
const play = document.getElementById('play-1');
const bookmark = document.getElementById('bookmark-1');
const posterBack = document.querySelector('.poster-back');
const add = document.getElementById('plus-1');
const closeButton = document.getElementById('close');
const modelbox = document.querySelector('.model-box');


flipCard.addEventListener('click', (event) => {
  if (!event.target.closest('#play-1')) {
    flipCard.classList.toggle('flipped');
  }
});

play.addEventListener('mouseup', (event) => {
  event.stopPropagation(); 

  for (let i = 0; i < 10; i++) { // Adjust the number of stars as needed
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize the horizontal position and delay
    const randomLeft = Math.random() * 100; // Horizontal position as percentage
    const randomDelay = Math.random() * 0.5; // Delay for animation

    star.style.left = `${randomLeft}%`; // Random horizontal position
    star.style.animationDelay = `${randomDelay}s`; // Random delay

    // Append the star to the poster container
    posterBack.appendChild(star);

    // Remove the star after the animation ends
    star.addEventListener('animationend', () => {
      star.remove();
    });
  }

  // Open the link after the animation completes
  setTimeout(() => {
    window.open('https://www.crunchyroll.com/watch/GR3VWXP96/im-luffy-the-man-whos-gonna-be-king-of-the-pirates', '_blank');
  }, 2000); // Match the longest animation duration
});


  


const outlineBookmark = "bookmark-2.svg";
const filledBookmark = "bookmark-fill-icon.png";

bookmark.addEventListener('click', (event) => {
  event.stopPropagation();

  // Extract the filename from the current src for comparison
  const currentSrc = bookmark.src.split('/').pop();
  
  if (currentSrc === outlineBookmark) {
    bookmark.src = "../../images/" + filledBookmark;
  } else {
    bookmark.src = "../../images/" + outlineBookmark;
  }
});



add.addEventListener('click', (event) => {
  event.stopPropagation();
  modelbox.classList.add('visible');
});

closeButton.addEventListener('click', (event) => {
    modelbox.classList.remove('visible');

  });

