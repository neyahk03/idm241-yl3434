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

const flipCard = document.getElementById('flip-card');

flipCard.addEventListener('click', () => {
  flipCard.classList.toggle('flipped');
});

