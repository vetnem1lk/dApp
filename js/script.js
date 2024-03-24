let count = 0;

function increaseCounter() {
  count++;
  document.getElementById("counter").textContent = count;
}

const coin = document.getElementById("coin");
const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;
const coinWidth = coin.clientWidth;
const coinHeight = coin.clientHeight;
let coinX = bodyWidth / 2 - coinWidth / 2;
let coinY = bodyHeight / 2 - coinHeight / 2;
let coinDX = 5;
let coinDY = 5;

function moveCoin() {
  coinX += coinDX;
  coinY += coinDY;

  if (coinX <= 0 || coinX >= bodyWidth - coinWidth) {
    coinDX = -coinDX;
  }
  if (coinY <= 0 || coinY >= bodyHeight - coinHeight) {
    coinDY = -coinDY;
  }

  coin.style.left = coinX + "px";
  coin.style.top = coinY + "px";

  requestAnimationFrame(moveCoin);
}

moveCoin();
