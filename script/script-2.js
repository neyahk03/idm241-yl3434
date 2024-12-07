document.querySelectorAll('.poster-container').forEach((container, index) => {
    const flipCard = container.querySelector('.poster');
    const play = container.querySelector('.button-icon #play-');
    const bookmark = container.querySelector('.button-icon #bookmark-');
    const posterBack = container.querySelector('.poster-back');
    const add = container.querySelector('.button-icon #plus-');
    const closeButton = container.querySelector('.model-box #close');
    const modelBox = container.querySelector('.model-box');

    // Flip card functionality
    flipCard.addEventListener('click', (event) => {
        if (!event.target.closest('.button-icon #play-')) {
            flipCard.classList.toggle('flipped');
        }
    });

    // Play button functionality
    play.addEventListener('mouseup', (event) => {
        event.stopPropagation();

        for (let i = 0; i < 10; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const randomLeft = Math.random() * 100;
            const randomDelay = Math.random() * 0.5;
            star.style.left = `${randomLeft}%`;
            star.style.animationDelay = `${randomDelay}s`;

            posterBack.appendChild(star);

            star.addEventListener('animationend', () => {
                star.remove();
            });
        }

        setTimeout(() => {
            window.open('https://www.crunchyroll.com/watch/GR3VWXP96/im-luffy-the-man-whos-gonna-be-king-of-the-pirates', '_blank');
        }, 2000);
    });

    // Bookmark functionality
    const outlineBookmark = "bookmark-2.svg";
    const filledBookmark = "bookmark-fill-icon.png";

    bookmark.addEventListener('click', (event) => {
        event.stopPropagation();
        const currentSrc = bookmark.src.split('/').pop();
        bookmark.src = currentSrc === outlineBookmark 
            ? "../../images/" + filledBookmark 
            : "../../images/" + outlineBookmark;
    });

    // Add to list button
    add.addEventListener('click', (event) => {
        event.stopPropagation();
        modelBox.classList.add('visible');
    });

    // Close button
    closeButton.addEventListener('click', (event) => {
        modelBox.classList.remove('visible');
    });
});
