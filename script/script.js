// const flipCard = document.getElementById('flip-card');
// const unflipButton = document.getElementById('unflip-button');

// flipCard.addEventListener('click', (event) => {
//   // Prevent flipping if the "X" button is clicked
//   if (event.target !== unflipButton) {
//     flipCard.classList.add('flipped');
//   }
// });

// unflipButton.addEventListener('click', (event) => {
//   // Prevent the event from bubbling up to the card container
//   event.stopPropagation();
//   flipCard.classList.remove('flipped');
// });

// const flipCard = document.getElementById('flip-card');

// flipCard.addEventListener('click', () => {
//   flipCard.classList.toggle('flipped');
// });


// const play = document.getElementById('play');

// play.addEventListener('mouseup', () => {
//   window.open('https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece', '_blank');
// })

const flipCard = document.getElementById('flip-card');
const play = document.getElementById('play');

flipCard.addEventListener('click', (event) => {
  if (!event.target.closest('#play')) {
    flipCard.classList.toggle('flipped');
  }
});

play.addEventListener('mouseup', (event) => {
  event.stopPropagation(); // Prevent the event from propagating to the flip card click
  window.open('https://www.crunchyroll.com/watch/GR3VWXP96/im-luffy-the-man-whos-gonna-be-king-of-the-pirates', '_blank');
});
