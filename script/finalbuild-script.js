const flipCard = document.getElementById('flip-card');
const play = document.getElementById('play');
const bookmark = document.getElementById('bookmark');

flipCard.addEventListener('click', (event) => {
  if (!event.target.closest('#play')) {
    flipCard.classList.toggle('flipped');
  }
});

play.addEventListener('mouseup', (event) => {
  event.stopPropagation(); 
  window.open('https://www.crunchyroll.com/watch/GR3VWXP96/im-luffy-the-man-whos-gonna-be-king-of-the-pirates', '_blank');
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

const add = document.getElementById('plus');
const closeButton = document.getElementById('close');
const modelbox = document.querySelector('.model-box');


add.addEventListener('click', (event) => {
  event.stopPropagation();
  modelbox.style.display = 'block';
});

closeButton.addEventListener('click', (event) => {
    modelbox.style.display = 'none';
});
