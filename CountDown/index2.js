let counterElement = document.querySelector('.text-6xl');
let count = 10;
const intervalId = setInterval(() => {
  count--;
  counterElement.textContent = count;
}, 1000);
function Fivesecond() {
  count += 5;
  counterElement.textContent = count;
}

  function Tensecond() {
    count+=10;
    counterElement.textContent = count;
  }

  function Fifsecond() {
    count+=15;
    counterElement.textContent = count;
  }

  