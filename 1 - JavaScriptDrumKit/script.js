/* javaScript30 - 1 Java Script Drum Kit

*/



function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;

    // Handle multiple hits in succession rewind audio to start
    audio.currentTime = 0;


    audio.play();

    // Add CSS class to key
    key.classList.add('playing');
}

// Remove CSS transition from key
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // Skip if not transform
    this.classList.remove('playing');
    
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
