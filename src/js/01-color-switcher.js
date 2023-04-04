const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
let switcherId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  toggleActiveBtns();
  switcherId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  toggleActiveBtns();
  clearInterval(switcherId);
}

function toggleActiveBtns() {
  refs.startBtn.toggleAttribute('disabled');
  refs.stopBtn.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
