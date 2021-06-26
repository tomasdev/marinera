'use strict';

(function() {

const MAX_ROWS = innerWidth > innerHeight ? 4 : 6;

const deck = document.querySelector('.deck');

const height = parseInt(getComputedStyle(deck).height, 10);

const buttons = Array.from(document.querySelectorAll('button'));
let _audioPlaying = false;
const audios = buttons.map(button => {
  const audio = new Audio();
  audio.src = 'audio/' + button.getAttribute('data-audio');
  audio.onended = () => _audioPlaying = false;
  return audio;
});

for (const [index, button] of buttons.entries()) {
  button.style.height = `${Math.floor(height / MAX_ROWS) - 30}px`;
  button.style.width = `${Math.floor(height / MAX_ROWS) - 30}px`;
  button.addEventListener('click', () => playSound(index), false);
}

function playSound(index) {
  if (_audioPlaying) {
    _audioPlaying.pause();
    _audioPlaying.currentTime = 0;
  }
  _audioPlaying = audios[index];
  audios[index].play();
}
})();
