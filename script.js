const jumpscareButton = document.getElementById('jumpscareButton');
const jumpscareContainer = document.getElementById('jumpscareContainer');
const jumpscareImage = document.getElementById('jumpscareImage');
const jumpscareSound = document.getElementById('jumpscareSound');

let isJumpscareActive = false;

jumpscareButton.addEventListener('click', () => {
    if (!isJumpscareActive) {
        isJumpscareActive = true;
        jumpscareContainer.classList.remove('hidden');
        jumpscareSound.play();

        setTimeout(() => {
            jumpscareContainer.classList.add('hidden');
            jumpscareSound.pause();
            jumpscareSound.currentTime = 0;
            isJumpscareActive = false;
        }, 1500); 
    }
});
